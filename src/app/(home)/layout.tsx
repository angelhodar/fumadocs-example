import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { baseOptions, linkItems } from '@/app/layout.config';
import { source } from "@/lib/source";

const options: BaseLayoutProps = {
  ...baseOptions,
  links: linkItems.slice(1, linkItems.length)
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...options}
    >
      {children}
    </DocsLayout>
  );
}
