'use client';
import React, {useState} from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {

  return (
        <div className="w-72 bg-gradient-to-l from-slate-300 to-slate-100 
        text-slate-600 border border-slate-300 
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
            <div className="col-span-2 rounded-md text-black">
                <p>{post.prompt}</p>
            </div>
        </div>
  )
}

export default PromptCard