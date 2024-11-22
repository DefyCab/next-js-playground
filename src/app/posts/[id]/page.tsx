// dynamic route [id]

import { H1 } from "@/app/h1";

// in next js 15 params is asynchronous
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <H1>{id}</H1>;
}
