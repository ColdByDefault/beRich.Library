'use client';
import React, {useState} from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
    const [copied, setCopied] = useState("");
    const { data: session } = useSession();
    const pathName = usePathname();

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(""), 3000);
    }
    return (
        <div className="w-72 bg-black/40 text-white border border-slate-800 
        justify-center p-4 gap-4 rounded-lg shadow-md">
            <div className='flex flex-col justify-between h-full'>
                <div className='flex justify-between items-center pb-2'>
                    <Image src={post.creator.image || '/default-image.png'}
                    alt="user_image"
                    width={40}
                    height={40}
                    className='rounded-full'></Image>
                    <h3>{post.creator.username}</h3>
                </div>
                <div className='flex flex-col h-full justify-between'>
                    <p>{post.prompt}</p>
                    <p className='text-gray-500 cursor-pointer'
                    onClick={() => handleTagClick && handleTagClick(post.tag)}
                    >{post.tag}</p>
                </div>
                {/* submitt-btn submitt-btn2 */}
                <div className='flex gap-2 pt-2 cursor-pointer'
                onClick={handleCopy}>
                    <span>Copy</span>
                    <Image
                    src={copied === post.prompt ?
                        '/assets/icons/tick.svg' :
                        '/assets/icons/copy.svg'
                    }
                    width={20}
                    height={20}
                    alt='copy'></Image>
                </div>
                {session?.user.id === post.creator._id && pathName === '/profile' && (
                <div className='flex gap-4 pt-2'>
                    <p className='cursor-pointer submitt-btn submitt-btn2'
                    onClick={handleEdit}>
                        Edit
                    </p>
                    <p className='cursor-pointer submitt-btn submitt-btn2 cancel-btn'
                    onClick={handleDelete}>
                        Delete
                    </p>
                </div>
                )}
            </div>
        </div>
    )
}

export default PromptCard