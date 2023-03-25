import Image from 'next/image'
import styles from './page.module.css'
import Posts from '@/components/posts/Posts'
import Post from '@/components/posts/Post'
// const getPosts = async () => {
//   const res = await fetch("")
//   if (!res.ok) { throw new Error("failed to get data") }
//   return res.json()
// }


export default async function Home() {
  // const posts = await getPosts()
  return (
    <div className={styles.homepage}>
      <div className={styles.newsfeed}>
        <Posts />
      </div>
    </div>
  )
}
