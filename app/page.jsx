import styles from './page.module.css'
import Posts from '@/components/posts/Posts'

const getPosts = async () => {
  const res = await fetch(`http://localhost:8000/posts`, { cache: "no-cache" })
  if (!res.ok) { throw new Error("failed to get data") }
  return res.json()
}


export default async function Home() {
  const posts = await getPosts()
  const { postIds } = posts


  return (
    <div className={styles.homepage}>
      <div className={styles.newsfeed}>
        <Posts postIds={postIds} />
      </div>
    </div>
  )
}
