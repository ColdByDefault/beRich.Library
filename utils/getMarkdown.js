import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export async function getMarkdown(filePath) {
  const response = await fetch(filePath); // Path to your .mdx file in /public
  if (!response.ok) {
    throw new Error(`Failed to fetch Markdown file: ${response.statusText}`);
  }

  const rawContent = await response.text();

  const mdxSource = await serialize(rawContent, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  });

  return mdxSource;
}