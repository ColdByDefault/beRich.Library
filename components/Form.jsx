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
    <section className='relative flex w-full max-w-full flex-col mb-12
    justify-center items-center gap-4 '>
        <h1 className='text-2xl font-bold text-blue-500 pt-4
        border-b-2'>
          <span>{type} Post</span>
        </h1>
        <form onSubmit={handleSubmit} 
        className='flex flex-col gap-4 mt-4 w-full max-w-2xl rounded-xl border border-gray-700 bg-black  
        backdrop-blur-lg p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl 
        hover:border-gray-600 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50'>
          <label>
            <span className='text-lg font-semibold text-blue-700'>
              Prompt
            </span>
            <textarea value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Enter your prompt here' required
            className='w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 
            rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent'/>
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
            className='w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-700 
            rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent'/>
          </label>
          <div className='flex justify-end mx-3 mb-5 hap-4'>
            <Link href="/"
            className='submitt-btn cancel-btn'>
              Abbrechen
            </Link>
            <button type='submit' disabled={submitting}
            className='submitt-btn px-2 mx-4'>
              {submitting ? `{type}...` : type}
            </button>
          </div>
        </form>
    </section>
  )
}

export default Form