import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Asif Sayyed | Full Stack Developer & UI/UX Designer',
  description: 'Full Stack Developer and UI/UX Designer specializing in MERN stack, Next.js, and Figma. Building modern web experiences with clean code and thoughtful design.',
  keywords: ['Full Stack Developer', 'UI/UX Designer', 'MERN Stack', 'React', 'Next.js', 'Figma', 'Web Development'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
