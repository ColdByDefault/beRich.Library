'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'


const MyProfile = () => {
    const { data: session } = useSession();
    const router = useRouter([]); 
    const [myPosts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await res.json()
            setPosts(data)
        };

        if(session?.user.id) fetchPosts();
    }, []);
    /* something is trigging the btns */
    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };
  


    
    
    
    return (
        <Profile className='text-white'
        name='My'
        desc='Welcome to your personalized profile page'
        data={myPosts}
        //pass handleEdit and handleDelete as props
        />
    )
}

export default MyProfile