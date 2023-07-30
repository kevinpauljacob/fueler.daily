import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
  return (
    <Link href={blog.link} target='_blank' className=''>
      <div className='w-full'>
        <Image alt={blog.title} unoptimized={true} src={blog.img} width={50} height={50} className='w-full h-auto object-cover' />
      </div>
      <h4>{blog.title}</h4>
      <p>{blog.topic}</p>
      <div>
        <span>{blog.published}</span>
        <span>{blog.readTime}</span>
      </div>
    </Link>
  )
}

export default BlogCard