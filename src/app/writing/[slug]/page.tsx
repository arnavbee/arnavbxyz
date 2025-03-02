import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/formatDate'

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1084px] px-4 sm:px-6 pt-6 sm:pt-[54px]">
        {/* Navigation and Date */}
        <div className="w-full pb-8 sm:pb-[96px]">
          <div className="grid grid-cols-3 gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600"
            >
              <ChevronLeft className="h-4 w-4" />
              Writing
            </Link>
            <time className="text-left sm:text-center text-sm text-gray-400">
              {formatDate(post.date)}
            </time>
            <div />
          </div>
        </div>

        {/* Article Content */}
        <article className="mx-auto w-full max-w-2xl pb-16 sm:pb-32">
          {/* Category */}
          <div className="mb-1 text-sm text-gray-400">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="mb-3 text-[28px] font-semibold tracking-[-0.02em] text-gray-900">
            {post.title}
          </h1>

          {/* Author and Share */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/yb.jpg"
                alt="Yash Bhardwaj"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-gray-600">by Yash Bhardwaj</span>
            </div>
            <button className="rounded-full border border-gray-200 px-4 py-1 text-sm text-gray-400 hover:border-gray-400 hover:text-gray-600">
              Share
            </button>
          </div>

          {/* Divider */}
          <div className="mb-8 h-px w-full bg-gray-200" />

          {/* Content */}
          <div className="prose prose-gray w-full overflow-x-auto space-y-6 text-gray-600
            prose-p:text-[16px] prose-p:leading-[28px]
            prose-headings:text-gray-900
            prose-ol:pl-0 prose-ol:my-6 prose-ol:list-decimal
            prose-ol:text-[16px] prose-ol:leading-[28px]
            [&_ol]:list-decimal 
            [&_ol>li]:pl-2 [&_ol>li]:ml-4 [&_ol>li]:mb-2
            [&_ol>li::marker]:text-gray-600
            prose-strong:font-medium prose-strong:text-gray-900
            prose-pre:overflow-x-auto prose-pre:max-w-full
            prose-img:max-w-full
            prose-table:overflow-x-auto prose-table:max-w-full
            prose-code:break-words"
          >
            {post.content}
          </div>
        </article>
      </div>
    </div>
  )
} 