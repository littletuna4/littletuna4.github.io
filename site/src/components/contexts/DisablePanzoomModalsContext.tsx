'use client';

/**
 * FUNCTIONAL REQUIREMENTS:
 * - When true, MDX image and code block wrappers render without opening pan/zoom modals
 * - Allows a page or section to opt out by wrapping content in the provider
 */

import { createContext, useContext, ReactNode } from 'react';

const DisablePanzoomModalsContext = createContext<boolean>(false);

export function useDisablePanzoomModals(): boolean {
  return useContext(DisablePanzoomModalsContext);
}

export interface DisablePanzoomModalsForChildrenProviderProps {
  children: ReactNode;
  disable?: boolean;
}

export function DisablePanzoomModalsForChildrenProvider({
  children,
  disable = true,
}: DisablePanzoomModalsForChildrenProviderProps) {
  return (
    <DisablePanzoomModalsContext.Provider value={disable}>
      {children}
    </DisablePanzoomModalsContext.Provider>
  );
}
