import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import {
  RssIcon,
  BookIcon,
  ServerIcon
} from 'lucide-react';

export const linkItems: LinkItemType[] = [
  {
    icon: <BookIcon />,
    text: 'Documentation',
    url: '/docs/introduction',
    active: 'url',
  },
  {
    icon: <RssIcon />,
    text: 'Blog',
    url: '/blog',
    active: 'nested-url',
  },
  {
    icon: <ServerIcon />,
    text: 'OpenAPI',
    url: 'https://api.theirstack.com',
    external: true,
  },
];

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <img className="h-6 w-auto" src="https://theirstack.com/static/images/theirstack-logo-name-transparent.png" alt="TheirStack Logo" />
    ),
  }
};
