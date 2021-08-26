import Link from 'next/link'
import { server } from '../config';

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div >
      <h1>Home</h1>
      {posts?.map(post => (
        <div key={post.id}>
          <Link href='/post/[id]' as={`/post/${post.id}`}>{post.title}</Link>
        </div>
      )
      )}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  };
};
