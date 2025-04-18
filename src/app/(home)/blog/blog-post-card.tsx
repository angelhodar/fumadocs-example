import Image from "next/image";

interface BlogPostCardProps {
  title: string;
  thumbnailUrl?: string;
  date?: string | Date;
}

export function BlogPostCard({ date, title, thumbnailUrl }: BlogPostCardProps) {
  return (
    <div className="rounded-xl bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-44 flex items-center justify-center p-6">
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt={title || "Article cover"}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <p className="text-gray-500 text-sm mb-2">{typeof date === "string" ? date : date?.toDateString() || ""}</p>
        <h3 className="font-medium text-gray-800 text-lg">{title}</h3>
      </div>
    </div>
  );
}
