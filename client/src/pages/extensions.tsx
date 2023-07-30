import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import {useEffect, useState} from 'react';
import axios from 'axios';
import BlogCard from '@/components/BlogCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [currentPage, setCurrentPage] = useState<string>('blogs')
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [discover, setDiscover] = useState<DiscoverPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await axios.get('https://fueler-daily.onrender.com/api/content/blog');
        setBlogs(data.data.data.blogs as BlogPost[])
      } catch (e) {}
    }
    if(!blogs.length) fetchBlogPosts();
  }, [blogs]);

  useEffect(() => {
    const fetchDiscoverPosts = async () => {
      try {
        const data = await axios.get('https://fueler-daily.onrender.com/api/content/discover');
        setDiscover(data.data.data.discover as DiscoverPost[])
      } catch (e) {}
    }
    if(!discover.length) fetchDiscoverPosts();
  }, [discover]);

  return (
    <main
      className={`bg-white text-black w-full ${inter.className}`}
    >
      <Navbar />
        <section className="relative flex w-full">
            <div className="w-[250px]">
            </div>
            <Sidebar setCurrentPage={setCurrentPage}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-10 w-[86%]">
                {currentPage === 'blogs' ? <>
                  {blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog.title} />
                  ))}
                </> : <></>}
            </div>
        </section>
    </main>
  )
}
