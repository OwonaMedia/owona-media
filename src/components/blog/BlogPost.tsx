import Image from 'next/image'
import Link from 'next/link'

interface BlogPostProps {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  slug: string
}

export default function BlogPost({ title, date, excerpt, imageUrl, slug }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          href={`/blog/${slug}`}
          className="inline-block text-black border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
        >
          Weiterlesen
        </Link>
      </div>
    </article>
  )
} 