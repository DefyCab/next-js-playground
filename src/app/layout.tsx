import "./globals.css";

export const metadata = {
  title: "next-js 15 playground",
  description: "Trying out next-js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
