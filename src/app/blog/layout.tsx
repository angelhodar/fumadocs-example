import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { baseOptions, linkItems } from '@/app/layout.config';

const options: BaseLayoutProps = {
    ...baseOptions,
    links: linkItems
}

export default function Layout({ children }: { children: ReactNode }) {
    return <HomeLayout {...options}>{children}</HomeLayout>;
}
