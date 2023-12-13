import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            <div className='relative'>
                <img className='w-full' src="https://t4.ftcdn.net/jpg/02/33/19/85/360_F_233198529_ELadkbQsXH09k7rtSNk6myxO1LECj24o.jpg" alt="" />
                <h2 className='absolute top-1/3 text-3xl md:text-5xl text-teal-800 font-bold ms-10'>Read Our Blog</h2>
            </div>
            <div className='w-10/12 mx-auto mt-10'>
                {
                    blogs.map(blog =>
                        <div key={blog.id} className="hero bg-base-200">
                            <div className="hero-content ">
                                <div>
                                    <h1 className="text-4xl text-teal-500 font-bold">{blog.title}</h1>
                                    <p className="py-6 text-teal-800">{blog.blog}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Blog;