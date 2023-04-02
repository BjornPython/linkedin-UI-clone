import './globals.css'
import Navbar from '../components/navbar/Navbar'
import MessageTab from '@/components/messageTab/MessageTab'
import { Suspense } from 'react'
import Loading from './loading'
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
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <MessageTab ENDPOINT={process.env.API_ENDPOINT} />
        </body>
      </html>
    </>

  )
}
