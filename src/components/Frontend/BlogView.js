"use client"
import { fetchOneBlog } from './common/Apis'
import React from 'react'

const BlogView = () => {
    const [post, setPost] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    const fetchData = async () => {
        try {
            const slug = window.location.pathname.split('/').pop()
            const data = await fetchOneBlog(slug)
            setPost(data.data)
        } catch (error) {
            console.error('Error fetching blog post:', error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {post ? (
                        <div className="container mx-auto py-8">
                            <div className="max-w-7xl mx-auto rounded-lg shadow-md overflow-hidden">
                                <div className="px-4 py-2">
                                    <h1 className="text-2xl font-bold">{post.name}</h1>
                                    <p className="text-sm">Published on {new Date(post.created_at).toLocaleDateString()}</p>
                                </div>
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-2/3 px-4 py-6">
                                        <img
                                            src={process.env.REACT_APP_ASSET_URL + post.image || "https://via.placeholder.com/700x400"}
                                            alt="Blog"
                                            className="mb-4 rounded-lg"
                                            style={{ width: '700px', height: '400px' }}
                                        />
                                        <div className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: post.description }} />
                                    </div>
                                    <div className="px-2 py-6">
                                        <h2 className="text-xl font-bold mb-4">Recommended Blogs</h2>
                                        {post.recommendedBlogs && post.recommendedBlogs.length > 0 ? (
                                            post.recommendedBlogs.map((recBlog, index) => (
                                                <div key={index} className="mb-4 border rounded p-4 cursor-pointer" onClick={() => window.location.href = `/blog/${recBlog.slug}`}>
                                                    <h3 className="text-lg font-semibold">{recBlog.name}</h3>
                                                    <p>{recBlog.content}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No recommended blogs available.</p>
                                        )}
                                    </div>
                                </div>
                                <div className="px-4 py-2 flex justify-between">
                                    <div>
                                        <span className="text-sm">Author: {post.author || "Mukul Sharma"}</span>
                                    </div>
                                    <div>
                                        <a href="/blog" className="text-blue-600 hover:underline">
                                            Back to Blog
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='text-center py-8'>
                            <h2 className='text-3xl font-bold mb-4'>No Blog Found</h2>
                            <p className='text-lg mb-4'>Sorry, the blog post you're looking for does not exist.</p>
                            <a href="/blog" className='text-blue-600 hover:underline'>Back to Blog</a>
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default BlogView
