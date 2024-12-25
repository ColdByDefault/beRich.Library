'use client';

import { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getMarkdown } from '@utils/getMarkdown';
import 'katex/dist/katex.min.css'; 
import Breadcrumb from '@components/breadcrumb';


function Step({ children }) {
  return <div className="steps-container">{children}</div>;
}

function StepItem({ title, children, number }) {
  return (
    <div className="step-item">
      <div className="step-header">
        <div className="step-number">{number}</div>
        <h4 className="step-title">{title}</h4>
      </div>
      <div className="step-content">{children}</div>
    </div>
  );
}

export default function NodeJsPage() {
  const [mdxContent, setMdxContent] = useState(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const content = await getMarkdown('/docs/mdFiles/nodeJs.mdx');
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
