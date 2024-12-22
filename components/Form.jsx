import React from 'react'
import Link from 'next/link'



const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) => {
  return (
    <section className='relative flex w-full max-w-full flex-col
    justify-center items-center gap-4 mt-12'>
        <h1 className='text-2xl font-bold text-blue-700'>
          <span>{type} Post</span>
        </h1>
        <form onSubmit={handleSubmit} 
        className='flex flex-col gap-4 mt-10 w-full max-w-2xl
        rounded-xl border border-gray-200 bg-white
        shadow-[inset_10px_-50px_94px_0_rgba(54, 82, 240, 0.2)] 
        backdrop-blur p-5'>
          <label>
            <span className='text-lg font-semibold text-blue-700'>
              Prompt
            </span>
            <textarea value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Enter your prompt here' required
            className='w-full flex rounded-lg h-[200px] mt-2 
            p-3 text-sm text-gray-500'/>
          </label>
          <label>
            <span className='text-lg font-semibold text-blue-700'>
              Tag{' '} 
              <span className='font-medium text-sm text-gray-500'>
                &#10098;#webdevelopment, #idea, productivity&#10099;
                </span>
            </span>
            <input value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag' required
            className='w-full flex rounded-lg mt-2 p-3 text-sm 
            text-gray-500'/>
          </label>
        </form>
    </section>
  )
}

export default Form