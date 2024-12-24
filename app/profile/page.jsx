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
  
    const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

    
    
    
    return (
        <Profile className='text-white'
        name='My'
        desc='Welcome to your personalized profile page'
        data={myPosts}
        //pass handleEdit and handleDelete as props
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        />
    )
}

export default MyProfile