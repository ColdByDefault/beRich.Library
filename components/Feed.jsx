import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard'



const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='flex flex-wrap gap-4 p-4
        align-center justify-evenly'>
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
        <section className='flex flex-col gap-4 pt-4 relative'>
             <form>
                <div className='text-center'>
                    <input type="text"
                    placeholder="Search for a tag or username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='input shadow-lg border-red-300 px-5 
                    py-3 rounded-xl w-64 transition-all outline-none'/>
                </div>
            </form>
            <div className=''>
                <PromptCardList data={posts}
                handleTagClick={() => {}}/>
            </div>
        </section>
    )
}

export default Feed