import Title from "@/components/PagesComp/Title"
import Link from "next/link";

const Home = () => {
  return (
        <div>
            <Title title='Home'/>
            <Link href='/blog' >Blog</Link>
        </div>

  )
}

export default Home