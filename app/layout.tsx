import './globals.css'

export const metadata = {
  title: 'QA Report Application',
  description: 'Track and manage QA activities efficiently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={styles.header}>
          <img src="/logo.png" alt="Logo" style={styles.logo} />
        </header>
        <main style={styles.main}>{children}</main>
      </body>
    </html>
  )
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    height: '40px',
  },
  main: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '800px',
  },
}
