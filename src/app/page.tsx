import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Link href="/posts">Posts</Link>
      <br />
      <br />
      <Link href="/posts/1">First Post</Link>
    </>
  );
}
