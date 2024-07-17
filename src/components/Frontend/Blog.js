"use client"
import React from 'react'
import Card from './common/Cards'
import {fetchBlog} from './common/Apis'
const Blog = () => {
    const [posts, setPosts] = React.useState([])
    const [filteredPosts, setFilteredPosts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [page, setPage] = React.useState(1)
    const [hasMore, setHasMore] = React.useState(true)
    const postsPerPage = 4

    const fetchData = async (page) => {
        try {
            const data = await fetchBlog(page, postsPerPage)
            if (data.data.length < postsPerPage) {
                setHasMore(false) // No more posts if less than postsPerPage are returned
            }
            setPosts((prevPosts) => [...prevPosts, ...data.data])
            setFilteredPosts((prevPosts) => [...prevPosts, ...data.data])
            setLoading(false)
        } catch (error) {
            console.error('Error fetching blog posts:', error)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        fetchData(page)
    }, [page])

    const loadMore = () => {
        setLoading(true); // Immediately set loading to true
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1); // Increment the page number
            setLoading(false); // Reset loading state after the delay
        }, 1000);
    };

    const filterPosts = (event) => {
        const searchInput = event.target.value
        if (searchInput === "") {
            setFilteredPosts(posts)
        } else {
            const filtered = posts.filter((post) =>
                post.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            setFilteredPosts(filtered)
        }
    }

    // Calculate the posts to display for the current page
    const indexOfLastPost = page * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Blog Section</h1>
            <div className="mb-8">
                <input
                    onChange={filterPosts}
                    type="text"
                    id="searchInput"
                    placeholder="Search posts..."
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
                />
            </div>
            <div id="blogPosts">
         
                {currentPosts.length === 0 && <p className='text-center text-red-500 flex flex-col min-h-screen mt-5'>No Blog found.</p>}
                {currentPosts.map((post) => (
                    <Card data={post} key={post.id} />
                ))}
            </div>
            
            {!loading && currentPosts.length > 0 && hasMore && (
                <div className='text-center mt-4'>
                    <button onClick={loadMore} className='px-4 py-2 bg-custom-primary text-white rounded'>
                        Load More
                    </button>
                </div>
            )}
            
        </div>
    )
}

export default Blog
