import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
  return (
    <Link href={blog.link} target='_blank' className='m-5'>
      <div className='w-full'>
        <Image alt={blog.title} unoptimized={true} src={blog.img} width={50} height={50} className='rounded-lg w-full min-h-[200px] min-w-[300px] object-cover' />
      </div>
      <h4 className='text-xl font-semibold py-2'>{blog.title}</h4>
      <div className='flex justify-between'>
        <span>{blog.published}</span>
        <span>{blog.readTime}</span>
      </div>
      <p className='text-lg font-medium bg-cyan-300 rounded-md w-max px-2 mt-2'>{blog.topic}</p>
    </Link>
  )
}

export default BlogCard