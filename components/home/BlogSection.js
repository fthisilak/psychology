'use client'
import Image from 'next/image'
import { useState } from 'react'
import { blogPosts } from '@/data/blog-posts'
import { X } from 'lucide-react'

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null)

  const openModal = (post) => {
    setSelectedPost(post)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedPost(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="blog" className="py-16 bg-gradient-to-b from-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog</h2>
          <p className="text-gray-600">
            Psikoloji dünyasından güncel yazılar ve makaleler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-[200px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-blue-600">{post.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <button 
                  onClick={() => openModal(post)}
                  className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors"
                >
                  Devamını Oku →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-semibold text-gray-800">{selectedPost.title}</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm text-gray-500">{selectedPost.date}</span>
                  <span className="text-sm text-blue-600">{selectedPost.category}</span>
                  <span className="text-sm text-gray-500">Yazar: {selectedPost.author}</span>
                </div>

                <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4">{selectedPost.excerpt}</p>
                  <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogSection