'use client';
import React, {useState} from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
    
  return (
        <div className="w-72 bg-black/40 
        text-white border border-slate-800
        justify-center p-4 gap-4 rounded-lg shadow-md">
            <div>
                <Image src={post.creator.image || '/default-image.png'}
                alt="user_image"
                width={40}
                height={40}
                className='rounded-full'></Image>
            </div>
            <div>
                <h3>{post.creator.username}</h3>
                <h3>{post.creator.email}</h3>
            </div>
            <div className="col-span-2 rounded-md text-gray-500">
                <button className='text-red-400'>Read More... btn</button>

            </div>
        </div>
  )
}

export default PromptCard