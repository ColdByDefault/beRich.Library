import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  
  return (
    <section className='w-full h-screen flex flex-col items-center justify-start gap-8'>
      <div>
        <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-gray-400 sm:text-6xl'>
          <span className='bg-gradient-to-r from-gray-600 to-slate-800 bg-clip-text text-transparent'>
            {name} Profile
          </span>
        </h1>
        <p className='mt-5 text-lg text-gray-300 sm:text-xl max-w-2xl'>
          {desc}
        </p>
      </div>
      <div className='flex flex-col flex-wrap gap-4 p-4
        align-center justify-evenly'>
          <h1 className='text-gray-300'>My Posts</h1>
            {data.map((post) => (
                <PromptCard key={post._id} post={post}
                handleEdit={() => handleEdit && handleEdit(post)} // Pass a function reference
                handleDelete={() => handleDelete && handleDelete(post)}/>
            ))}
      </div>
    </section>
  )
}

export default Profile