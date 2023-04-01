import './globals.css'
import Navbar from '../components/navbar/Navbar'
import MessageTab from '@/components/messageTab/MessageTab'
export const metadata = {
  title: 'Linkedin Clone',
  description: 'Linked in UI clone built with React and NextJS created by Nathan Flores',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <MessageTab />
        </body>
      </html>
    </>

  )
}
