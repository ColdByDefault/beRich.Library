'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'


const MyProfile = () => {
    const { data: session } = useSession();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${session.user.id}/posts`)
            const data = await res.json()
            setPosts(data)
        };

        if(session?.user.id) fetchPosts();
    }, []);
    const handleEdit = () => {}


    const handleDelete = () => {}




    return (
        <Profile className='text-white'
        name='My'
        desc='Welcome to your personalized profile page'
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}>

        </Profile>
    )
}

export default MyProfile