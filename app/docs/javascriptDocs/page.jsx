'use client';

import { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getMarkdown } from '@utils/getMarkdown';
import 'katex/dist/katex.min.css'; // KaTeX styles for LaTeX rendering
import Breadcrumb from '@components/breadcrumb';
import { Step, StepItem } from '@components/Steps'; // Import custom components

export default function NodeJsPage() {
  const [mdxContent, setMdxContent] = useState(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const content = await getMarkdown('/docs/mdfiles/nodeJs.mdx');
        setMdxContent(content);
      } catch (error) {
        console.error('Error loading MDX:', error);
      }
    };

    loadMarkdown();
  }, []);

  return (
    <>
      <Breadcrumb />
      <section className="docs-section relative">
        {mdxContent ? (
          <MDXRemote
            {...mdxContent}
            components={{
              Step,
              StepItem,
            }}
          />
        ) : (
          <p>Loading content...</p>
        )}
      </section>
    </>
  );
}
