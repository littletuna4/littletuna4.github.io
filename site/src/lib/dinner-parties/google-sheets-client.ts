/**
 * Google Sheets Client for Dinner Parties Data
 *
 * Functional Requirements:
 * - Fetch event data from public Google Sheets at build time
 * - Fetch RSVP responses (public portion) for guest list display
 * - Handle missing/malformed data gracefully
 * - Provide typed interfaces for all data structures
 * - Support static site generation (no runtime API calls)
 * - Cache responses during build for efficiency
 */

/**
 * Configuration for Google Sheets integration
 * Sheet: https://docs.google.com/spreadsheets/d/1ATkk_MkQKw3bhUKAsDQ-UYEM6xoesbU1mXcBRn-EMUo/
 */
export const DINNER_PARTY_CONFIG = {
  // Google Sheet ID for the events/RSVP data
  SHEET_ID: '1ATkk_MkQKw3bhUKAsDQ-UYEM6xoesbU1mXcBRn-EMUo',

  // Sheet name for events list
  EVENTS_SHEET_NAME: 'master',

  // Sheet name for public RSVP responses (update when you create this sheet)
  RSVP_SHEET_NAME: 'rsvp_public',

  // Base URL for the RSVP Google Form (update with your actual form)
  RSVP_FORM_BASE_URL: 'https://forms.gle/YOUR_RSVP_FORM_ID',

  // Base URL for Expression of Interest form (update with your actual form)
  EOI_FORM_URL: 'https://forms.gle/YOUR_EOI_FORM_ID',

  // Google Sheets API endpoint for public sheets (CSV export)
  SHEETS_CSV_BASE_URL: 'https://docs.google.com/spreadsheets/d',
} as const;

/**
 * Represents a dinner party event
 * Columns from Google Sheet "master": Event ID, Date, Time, Status, Location
 */
export interface DinnerPartyEvent {
  readonly eventId: string;
  readonly date: string;
  readonly time?: string;
  readonly status?: string;
  readonly location?: string;
  readonly theme?: string;
  readonly description?: string;
}

/**
 * Represents a public RSVP response (for guest list display)
 */
export interface RsvpResponse {
  readonly inviteId: string;
  readonly eventId: string;
  readonly displayName: string;
  readonly response: 'yes' | 'no' | 'maybe';
  readonly hasPlusOne: boolean;
  readonly plusOneName?: string;
  readonly dietaryRequirements?: string;
  readonly bringing?: string;
}

/**
 * Parses CSV text into an array of objects
 * Handles quoted values and normalizes headers to snake_case
 */
function parseSimpleCsvToObjects<T extends Record<string, string>>(
  csvText: string
): T[] {
  const lines = csvText.trim().split('\n');
  console.log(`CSV has ${lines.length} lines (including header)`);
  
  if (lines.length < 2) {
    console.warn('CSV has no data rows - sheet may not be published to web');
    return [];
  }

  // Parse headers: remove quotes, lowercase, replace spaces with underscores
  const headers = lines[0]
    .split(',')
    .map(header => 
      header
        .trim()
        .replace(/^"|"$/g, '')  // Remove surrounding quotes
        .toLowerCase()
        .replace(/\s+/g, '_')   // Replace spaces with underscores
    );
  
  console.log('Parsed headers:', headers);
  
  const results: T[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;  // Skip empty lines
    
    // Simple CSV parsing (handles quoted values)
    const values = line.split(',').map(value => 
      value.trim().replace(/^"|"$/g, '')  // Remove surrounding quotes
    );
    
    const rowObject: Record<string, string> = {};

    headers.forEach((header, index) => {
      rowObject[header] = values[index] || '';
    });

    console.log(`Row ${i}:`, rowObject);
    results.push(rowObject as T);
  }

  return results;
}

/**
 * Builds CSV export URL for a specific sheet
 * Tries the export endpoint which is more reliable for programmatic access
 */
function buildGoogleSheetsCsvExportUrl(sheetId: string, sheetName: string): string {
  // Use the export endpoint - more reliable than gviz/tq for server-side fetch
  // Note: gid=0 is the first sheet. If "master" is not the first sheet, you'll need the actual gid
  return `${DINNER_PARTY_CONFIG.SHEETS_CSV_BASE_URL}/${sheetId}/export?format=csv&gid=0`;
}

/**
 * Normalizes date from Google Sheets format to ISO format
 * Handles formats like "7/02/2026" (D/MM/YYYY) or "2026-02-07" (ISO)
 */
function normalizeGoogleSheetsDate(dateString: string): string {
  if (!dateString) return '';
  
  // If already ISO format, return as-is
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return dateString;
  }
  
  // Handle Australian format: D/MM/YYYY or DD/MM/YYYY
  const australianMatch = dateString.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (australianMatch) {
    const [, day, month, year] = australianMatch;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  
  // Fallback: return as-is and let JavaScript try to parse it
  console.warn('Unrecognized date format:', dateString);
  return dateString;
}

/**
 * Fetches event data from Google Sheets
 * Sheet: master, Columns: Event ID, Date, Time, Status, Location
 * Falls back to mock data if fetch fails
 */
export async function fetchDinnerPartyEvents(): Promise<DinnerPartyEvent[]> {
  try {
    const csvUrl = buildGoogleSheetsCsvExportUrl(
      DINNER_PARTY_CONFIG.SHEET_ID,
      DINNER_PARTY_CONFIG.EVENTS_SHEET_NAME
    );

    console.log('Fetching events from:', csvUrl);
    
    // Fetch with no-cache to avoid stale data, and browser-like headers
    const response = await fetch(csvUrl, {
      cache: 'no-store',
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/csv,text/plain,*/*',
      },
    });

    console.log('Response status:', response.status);
    console.log('Response URL (after redirects):', response.url);
    console.log('Content-Type:', response.headers.get('content-type'));

    if (!response.ok) {
      console.error('Failed to fetch events from Google Sheets:', response.status);
      return getMockEvents();
    }

    const csvText = await response.text();
    console.log('Raw CSV response length:', csvText.length);
    console.log('Raw CSV response:', JSON.stringify(csvText));

    const rawEvents = parseSimpleCsvToObjects<Record<string, string>>(csvText);
    console.log('Parsed events:', rawEvents);

    // Map columns: event_id, date, time, status, location
    // Header normalization converts "Event ID" -> "event_id", "Date" -> "date", etc.
    const mappedEvents = rawEvents
      .filter(row => {
        const hasEventId = Boolean(row.event_id);
        const hasDate = Boolean(row.date);
        if (!hasEventId || !hasDate) {
          console.log('Skipping row - missing event_id or date:', row);
        }
        return hasEventId && hasDate;
      })
      .map(row => ({
        eventId: row.event_id,
        date: normalizeGoogleSheetsDate(row.date),
        time: row.time || undefined,
        status: row.status || undefined,
        location: row.location || 'Taringa, Brisbane',
        theme: undefined,
        description: undefined,
      }));
    
    console.log('Mapped events:', mappedEvents);
    return mappedEvents;
  } catch (error) {
    console.error('Error fetching dinner party events:', error);
    return getMockEvents();
  }
}

/**
 * Fetches public RSVP responses for a specific event
 * Falls back to mock data if RSVP sheet doesn't exist yet
 */
export async function fetchEventRsvpResponses(
  eventId: string
): Promise<RsvpResponse[]> {
  // If RSVP sheet name is placeholder, return mock data
  if (DINNER_PARTY_CONFIG.RSVP_SHEET_NAME === 'rsvp_public') {
    console.warn(
      'RSVP responses: Using mock data (RSVP sheet not configured yet)'
    );
    return getMockRsvpResponses(eventId);
  }

  try {
    const csvUrl = buildGoogleSheetsCsvExportUrl(
      DINNER_PARTY_CONFIG.SHEET_ID,
      DINNER_PARTY_CONFIG.RSVP_SHEET_NAME
    );
    const response = await fetch(csvUrl, { next: { revalidate: 300 } });

    if (!response.ok) {
      console.error('Failed to fetch RSVPs from Google Sheets:', response.status);
      return getMockRsvpResponses(eventId);
    }

    const csvText = await response.text();
    const rawResponses = parseSimpleCsvToObjects<Record<string, string>>(csvText);

    return rawResponses
      .filter(row => row.event_id === eventId && row.invite_id && row.response)
      .map(row => ({
        inviteId: row.invite_id,
        eventId: row.event_id,
        displayName: row.display_name || 'Guest',
        response: (row.response?.toLowerCase() as 'yes' | 'no' | 'maybe') || 'maybe',
        hasPlusOne: row.has_plus_one?.toLowerCase() === 'true',
        plusOneName: row.plus_one_name || undefined,
        dietaryRequirements: row.dietary_requirements || undefined,
        bringing: row.bringing || undefined,
      }))
      .filter(rsvp => rsvp.response === 'yes');
  } catch (error) {
    console.error('Error fetching RSVP responses:', error);
    return getMockRsvpResponses(eventId);
  }
}

/**
 * Mock events for development/demo purposes
 * Used when Google Sheet fetch fails or during local development
 */
function getMockEvents(): DinnerPartyEvent[] {
  return [
    {
      eventId: 'dp-2026-01',
      date: '2026-02-15',
      time: '6:30 PM',
      status: 'upcoming',
      location: 'Taringa, Brisbane',
      theme: 'Winter Warmer',
      description:
        "First dinner of the year. Bringing some warmth to February. Theme is comfort food — think stews, curries, anything that'll make you feel cozy.",
    },
    {
      eventId: 'dp-2026-02',
      date: '2026-03-22',
      time: '6:00 PM',
      status: 'upcoming',
      location: 'Taringa, Brisbane',
      theme: 'International Potluck',
      description:
        "Bring a dish from your heritage, somewhere you've travelled, or just something you like that isn't meat and three veg.",
    },
    {
      eventId: 'dp-2026-03',
      date: '2026-05-10',
      time: '5:30 PM',
      status: 'upcoming',
      location: 'Taringa, Brisbane',
      theme: 'BBQ & Board Games',
      description:
        "Early start because we'll fire up the BBQ while there's still daylight. Bring something to grill and a game to play.",
    },
  ];
}

/**
 * Mock RSVP responses for development/demo purposes
 */
function getMockRsvpResponses(eventId: string): RsvpResponse[] {
  const mockResponses: Record<string, RsvpResponse[]> = {
    'dp-2026-01': [
      {
        inviteId: 'inv-001',
        eventId: 'dp-2026-01',
        displayName: 'Sarah',
        response: 'yes',
        hasPlusOne: true,
        plusOneName: 'Mike',
        bringing: 'Beef stew',
      },
      {
        inviteId: 'inv-002',
        eventId: 'dp-2026-01',
        displayName: 'James',
        response: 'yes',
        hasPlusOne: false,
        bringing: 'Garlic bread',
      },
      {
        inviteId: 'inv-003',
        eventId: 'dp-2026-01',
        displayName: 'Emma',
        response: 'yes',
        hasPlusOne: false,
        dietaryRequirements: 'Vegetarian',
        bringing: 'Veggie lasagna',
      },
    ],
    'dp-2026-02': [
      {
        inviteId: 'inv-004',
        eventId: 'dp-2026-02',
        displayName: 'Chen',
        response: 'yes',
        hasPlusOne: true,
        bringing: 'Dumplings',
      },
    ],
    'dp-2026-03': [],
  };

  return mockResponses[eventId] || [];
}
