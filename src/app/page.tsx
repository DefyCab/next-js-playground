import Link from "next/link";

type Repo = {
  id: number;
  name: string;
  full_name: string;
};

type Time = {
  dateTime: string;
};

export default async function Home() {
  // waits until both promises are fullfilled and stores value in variable data and time"
  const [data, time] = await Promise.all([getRepo(), getTime()]);
  async function getTime(): Promise<Time> {
    const result = await fetch(
      "https://timeapi.io/api/time/current/zone?timeZone=Europe%2FStockholm",
      {
        // revalidates after 5 seconds
        next: {
          revalidate: 5,
        },
      }
    );
    return result.json();
  }

  async function getRepo(): Promise<Repo> {
    const result = await fetch("https://api.github.com/repos/vercel/next.js");
    return result.json();
  }

  return (
    <>
      <h1 className="text-bold text-4xl">{data.full_name}</h1>
      <h1 className="text-bold text-4xl">{time.dateTime}</h1>
      <br />
      <br />
      <Link href="/posts">Posts</Link>
      <br />
      <br />
      <Link href="/posts/1">First Post</Link>
    </>
  );
}
