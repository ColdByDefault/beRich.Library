import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard'



const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3'>
            {data.map((post) => (
                <PromptCard key={post._id} post={post}
                handleTagClick={handleTagClick}/>
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([])

    const handleSearchChange = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("/api/prompt")
            const data = await res.json()
            setPosts(data)
        }
        fetchPosts()
    }, []);

    return (
        <section className='flex flex-col gap-4'>
            <form>
                <div>
                    <input type="text"
                    placeholder="Search for a tag or username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='input shadow-lg border-gray-300 px-5 
                    py-3 rounded-xl w-64 transition-all outline-none'/>
                    <svg
                    className="size-6 absolute top-3 right-3 text-gray-500"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    ></path>
                    </svg>
                </div>
            </form>
            <div>
                <PromptCardList data={posts}
                handleTagClick={() => {}}/>
            </div>
        </section>
    )
}

export default Feed