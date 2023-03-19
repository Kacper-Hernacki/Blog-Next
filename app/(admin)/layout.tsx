import "../../styles/globals.css"
import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
    <Head >
      <script async src="https://www.instagram.com/embed.js"></script>
      <title>Kacper's Blog</title></Head>
    <body>{children}</body>
    </html>
  )
}
