export default function BlogPage() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-muted mt-2">Build logs, ideas, and notes.</p>
      <ul className="mt-6 list-disc pl-6">
        <li><a className="underline" href="/blog/hello-world">Hello World (first post)</a></li>
      </ul>
    </main>
  );
}
