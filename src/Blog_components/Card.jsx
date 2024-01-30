import React from "react";
import MyLottieAnimation from "./ani";

const Blog = ({ data }) => (
  <>
    <h1 className="mt-10 text-center text-2xl font-serif font-bold p-1 my-blog">
      My Blogs
    </h1>

    <div className="blog-area px-12 py- mx-auto ">
      <div className="flex flex-wrap m-4">
        
        {data.map((blog) => (
          <div className="p-4 md:w-1/2 lg:w-1/3">
            <div
              key={blog.id}
              className="blog-entry shadow-sm h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              <img
                className="h-60 lg:h-96 md:h-64 w-full object-cover object-center hover:transition-transform hover:scale-105"
                src={blog.imagePath}
                alt="{blog.title}"
                width=""
                height=""
              />

              <div className="p-6 bg-slate-50 h-full">
                <h2 className="font-medium mb-1 text-xs tracking-widest capitalize">
                  {blog.category}
                </h2>
                <h1 className=" text-lg font-medium text-gray-900 mb-3 capitalize">
                  {blog.title}
                </h1>
                <p className="leading-relaxed mb-3">{blog.content}</p>
                <div className="flex items-center flex-wrap">
                  <button className="read-more py-3 text-blue-500 hover:bg-blue-200 px-2  inline-flex items-center md:mb-2 lg:mb-0">
                    Read More <i class="fa-solid fa-arrow-right ml-2"></i>
                  </button>

                  {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
           <circle cx="12" cy="12" r="3"></circle>
             </svg>1.2K
               </span>

          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
           <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
               </svg>6
                   </span>           */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <MyLottieAnimation />
  </>
);

export default Blog;
