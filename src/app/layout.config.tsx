import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <img className="h-6 w-auto" src="https://theirstack.com/static/images/theirstack-logo-name-transparent.png" alt="TheirStack Logo" />
    ),
  }
};
