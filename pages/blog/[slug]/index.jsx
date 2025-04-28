'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { blogPosts } from '../blogPosts';
import ReactMarkdown from 'react-markdown';

export default function Page() {
  const params = useParams();
  const slug = params?.slug;
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fullPath = `/blog/${slug}`;
    const foundPost = blogPosts.find((post) => post.href === fullPath);

    if (foundPost) {
      setPost(foundPost);
    } else {
      setNotFound(true);
    }
  }, [slug]);

  if (notFound) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-600">
        <p className="text-xl font-semibold">🚫 Blog post not found.</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-400">
        <p className="text-lg animate-pulse">Loading blog post...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Meta Info */}
      <div className="text-sm text-center text-gray-500 mb-3">
        <span className="font-medium text-indigo-700">{post.author}</span> on{' '}
        <span>{post.date}</span>
      </div>

      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
        {post.title}
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
      {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mb-6">
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-full uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Main Image */}
      <div className="mb-10">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg prose-indigo max-w-none text-gray-800">
        {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
        
      </article>

      {/* Author Info */}
      <div className="mt-16 bg-gray-50 p-6 rounded-xl shadow-md flex items-center space-x-6">
        
        <div>
          <h3 className="text-lg font-semibold">{post.author}</h3>
          <p className="text-sm text-gray-500">
            {post.authorBio || 'Thoughtful insights and reflections on life, culture, and personal growth.'}
          </p>
          <p className="text-sm text-gray-400 mt-1">{post.location || 'Jaipur, India'}</p>
        </div>
      </div>
    </div>
  );
}
