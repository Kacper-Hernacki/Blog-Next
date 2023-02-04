import "../../styles/globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
    <head ><title>Kacper's Blog</title></head>
    <body>{children}</body>
    </html>
  )
}
