import Link from 'next/link';
import { blog } from '@/lib/source';
import { BlogPostCard } from './blog-post-card';

export default function Page(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );

  return (
    <main className="container max-sm:px-0 md:py-12">
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">From the blog</h2>
            <p className="text-xl text-gray-600">The latests from TheirStack, best practices, case studies and more...</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.url} href={post.url} >
                <BlogPostCard title={post.data.title} thumbnailUrl={post.data.thumbnail} date={post.data.date} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}