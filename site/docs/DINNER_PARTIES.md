# Dinner Parties System

A system for hosting and managing small potluck dinners as part of a 2026 social experiment.

## Overview

The dinner parties feature provides:
- A landing page explaining the concept (`/events`)
- Individual event pages with RSVP integration (`/events/[eventId]`)
- Google Sheets integration for event and RSVP data
- Static site generation for all pages

## Architecture

```
site/src/
├── app/events/
│   ├── page.tsx                    # Landing page with event list
│   ├── not-found.tsx               # 404 page for events
│   └── [eventId]/
│       └── page.tsx                # Individual event page
└── lib/dinner-parties/
    └── google-sheets-client.ts     # Data fetching and types
```

## Data Sources

### Google Sheets Setup

The system reads from a public Google Sheet:
- **Sheet URL**: https://docs.google.com/spreadsheets/d/1ATkk_MkQKw3bhUKAsDQ-UYEM6xoesbU1mXcBRn-EMUo/

#### Events Sheet ("master") Columns

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `Event ID` | string | Yes | Unique event identifier (e.g., `dp-2026-01`) |
| `Date` | string | Yes | Event date in `YYYY-MM-DD` format |
| `Time` | string | No | Event time (e.g., `6:30 PM`) |
| `Status` | string | No | Event status (e.g., `upcoming`, `confirmed`, `cancelled`) |
| `Location` | string | No | Event location (defaults to "Taringa, Brisbane") |

#### RSVP Public Sheet Columns

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `invite_id` | string | Yes | Unique invite identifier |
| `event_id` | string | Yes | Associated event ID |
| `display_name` | string | Yes | Guest's public display name |
| `response` | string | Yes | `yes`, `no`, or `maybe` |
| `has_plus_one` | boolean | No | Whether guest is bringing +1 |
| `plus_one_name` | string | No | +1's display name |
| `dietary_requirements` | string | No | Dietary needs |
| `bringing` | string | No | What dish they're bringing |

### Configuration

Edit `site/src/lib/dinner-parties/google-sheets-client.ts`:

```typescript
export const DINNER_PARTY_CONFIG = {
  // Already configured:
  SHEET_ID: '1ATkk_MkQKw3bhUKAsDQ-UYEM6xoesbU1mXcBRn-EMUo',
  EVENTS_SHEET_NAME: 'master',
  
  // Update these when you create the sheets/forms:
  RSVP_SHEET_NAME: 'rsvp_public',
  RSVP_FORM_BASE_URL: 'https://forms.gle/your-form-id',
  EOI_FORM_URL: 'https://forms.gle/your-eoi-form-id',
} as const;
```

### Mock Data

When Sheet IDs are not configured (default), the system uses mock data defined in `getMockEvents()` and `getMockRsvpResponses()`. This allows local development without setting up Google Sheets.

## Pages

### Landing Page (`/events`)

- Concept explanation with informal, self-aware tone
- Lists upcoming events (sorted by date)
- Shows past events (dimmed)
- Expression of interest link

### Event Page (`/events/[eventId]`)

- Event details (date, time, theme, description)
- Guest list showing confirmed attendees
- RSVP form link (with event ID pre-filled)
- Past event indicator

## n8n Integration

The Google Sheets data should be populated/managed by n8n automations:

1. **RSVP acknowledgement flow** - Process form submissions
2. **Data validation** - Clean invalid entries
3. **Public sheet sync** - Copy public data from private RSVP sheet

## Design Principles

From the original spec:
- Small beats scalable
- Awkwardness acknowledged, not hidden
- Automation supports humans
- Repeatable, not optimised
- Social depth over attendance maximisation

## Tone Guidelines

The copy throughout should be:
- Informal
- Self-aware
- Human
- Low pressure
- Honest about potential awkwardness

Avoid:
- Corporate speak
- Over-promising
- Pressure tactics
- Pretending it's more polished than it is
