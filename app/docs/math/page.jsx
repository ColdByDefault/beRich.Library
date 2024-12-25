'use client';
import { useState, useEffect } from 'react';
import Breadcrumb from '@components/breadcrumb';
import KatexSpan  from '@utils/LaTexRender';
import { MDXRemote } from 'next-mdx-remote';
import { getMarkdown } from '@utils/getMarkdown';
import '@styles/docs.css';



export default function Math() {
    const [mdxContent, setMdxContent] = useState(null);

    useEffect(() => {
      const loadMdx = async () => {
        try {
          const content = await getMarkdown('/docs/mdFiles/basicMath.mdx');
          setMdxContent(content);
        } catch (error) {
          console.error('Error loading MDX:', error);
        }
      };
  
      loadMdx();
    }, []);

    return (
        <>
        <Breadcrumb/>
        <section className='py-8'>
            <h1 className='text-3xl text-blue-500'>Math with LaTex</h1>
            <KatexSpan text="This is inline math: $E=mc^2$" />
            <KatexSpan text="and this is display math: $\frac{a}{b}$" />
        </section>
        <section className='docs-section relative '>
            <h1 className='text-3xl text-blue-500'>Math with Markdown .mdx</h1>
            <div className=" text-white py-8">
            {mdxContent ? (
            <MDXRemote {...mdxContent} />
            ) : (
            <p>Loading content...</p>
            )}
            </div>
        </section>
        </>
    );
}