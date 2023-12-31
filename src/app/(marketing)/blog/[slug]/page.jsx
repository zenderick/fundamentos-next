import Title from "@/components/PagesComp/Title"
import { POST } from "../page"
import Link from 'next/link'

export function generateMetadata({params}){
  const post = POST.find((post) => post.slug === params.slug)
  return{
    title: post.title,
    description: post.title + "Blog - Generated by create next app"
  }
}


const Slug = ({params}) => {

  const post = POST.find((post) => post.slug === params.slug)


  return (
      <div>
            <Title title={post.title}/>
            <p className="text-center">{post.content}</p>
            <div className="text-center py-3">
                <Link href='/blog' className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-950 transition-all duration-300">Volver</Link>
            </div>
      </div>  
  )
}

export default Slug