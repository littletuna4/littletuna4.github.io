/**
 * Shared site link definitions
 *
 * Functional Requirements:
 * - Define shared link destinations in one typed module
 * - Keep internal paths centralized so consumers avoid hardcoded route strings
 * - Export link card data for homepage and future consumers across the app
 */

export const REQLAN_INTERNAL_PATH = '/reqlan' as const;

export type SharedApplicationLinkDefinition = {
  readonly label: string;
  readonly url: string;
};

export const SHARED_APPLICATION_LINK_DEFINITIONS: readonly SharedApplicationLinkDefinition[] = [
  { label: 'B&T Digital', url: 'https://btdigital.com.au/' },
  { label: 'Technical Professionals Network', url: 'https://tp-net.github.io/' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/anthonycerqui' },
  { label: 'GitHub', url: 'https://github.com/littletuna4' },
  { label: 'Email', url: 'me@tony.is-a.dev' },
  { label: 'Well Tested', url: 'http://welltested.btdigital.com.au/' },
  { label: 'StoryGraph', url: 'https://app.thestorygraph.com/profile/tonycerqui' },
  { label: 'Strava', url: 'https://www.strava.com/athletes/45447932' },
  { label: 'reqlan', url: REQLAN_INTERNAL_PATH },
] as const;
