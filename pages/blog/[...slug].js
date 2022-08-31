import { useRouter } from 'next/router';

export default function BlogPostsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>BlogPostsPage</h1>
    </div>
  );
}
