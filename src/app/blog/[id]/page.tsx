import BlogPost from '@/components/blog/BlogPost'
import { blogPosts } from '@/data/blogPosts'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.id === params.id)
  
  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
} 