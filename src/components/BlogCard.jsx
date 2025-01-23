import Link from "next/link";

const BlogCard = ({blog}) => {

    const {title, body, id} = blog;

  return (
    <div className="border border-green-500 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300">
      <h1 className="font-bold my-2 text-lg">{title}</h1>
      <h1>{body.slice(0, 50)}....</h1>
      <Link href={`/blog/${id}`}>
        <button className="py-2 px-5 bg-green-500 transition hover:bg-green-600 rounded-lg mt-3 font-semibold text-white">See Details</button>
      </Link>
    </div>
  )
}

export default BlogCard
