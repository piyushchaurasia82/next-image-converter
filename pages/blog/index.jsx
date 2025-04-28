"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../blogPosts";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

 

  const filteredPosts = blogPosts.filter((post) =>
    (post.title + post.author + post.category)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 py-8 bg-gray-50">
      {/* Blog Posts */}
      <div className="w-full lg:w-3/4 space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:grid grid-cols-3"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-56 md:h-full object-cover"
              />
              <div className="p-5 col-span-2 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-semibold text-gray-800 hover:text-purple-600 transition-colors">
                    <Link href={post.href}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {post.date} · {post.author}
                  </p>
                  <p className="text-gray-700 mt-3 text-sm">{post.excerpt}</p>
                </div>
                <Link
                  href={post.href}
                  className="mt-4 inline-block text-purple-600 hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blog posts found.</p>
        )}
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-1/4 space-y-6 lg:sticky lg:top-24 self-start">
        {/* Search Box */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition">
            Search
          </button>
        </div>

        {/* Categories */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
          <ul className="space-y-2 text-sm text-purple-600">
            {[...new Set(blogPosts.map((post) => post.category))].map((category, i) => (
              <li key={i} className="hover:underline cursor-pointer">
                » {category}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-2xl text-center shadow-md">
          <h4 className="font-bold text-lg mb-2">Got a Brilliant App Idea?</h4>
          <p className="text-sm mb-4">
            Let’s collaborate to turn your vision into a digital success.
          </p>
          <button className="bg-white text-purple-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
