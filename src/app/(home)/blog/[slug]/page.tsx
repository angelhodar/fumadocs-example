import { notFound } from "next/navigation";
import Image from "next/image"
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { blog } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  const { body: Mdx, toc } = await page.data;

  return (
    <div className="container max-w-5xl p-4">
      <h1 className="mt-6 text-center text-3xl font-bold">
        {page.data.title}
      </h1>
      <article className="flex flex-col py-6">
        <div className="flex mx-auto py-6">
          <Image
            src={page.data.thumbnail || "/placeholder.svg"}
            alt={page.data.title || "Article cover"}
            width={800}
            height={600}
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose min-w-0 flex-1">
          <InlineTOC items={toc} />
          <Mdx components={getMDXComponents()} />
        </div>
      </article>
    </div>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
