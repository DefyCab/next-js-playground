// dynamic route [id]

// in next js 15 params is asynchronous
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <h1>{id}</h1>;
}
