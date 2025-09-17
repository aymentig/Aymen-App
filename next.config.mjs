import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/, // let Next handle .md and .mdx
});

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
});
