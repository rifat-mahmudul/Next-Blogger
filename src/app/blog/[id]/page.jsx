
const page = async ({params}) => {

    const blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const blogData = await blog.json();

    const {title, body, id} = blogData;

  return (
    <div className="max-w-[90%] xl:max-w-[600px] mx-auto mt-6 mb-16 shadow-xl shadow-green-200 p-4 rounded-lg border border-gray-400 text-center">
        <h1><span className="font-bold text-lg">Blog ID</span> : {id}</h1>
        <h1 className="font-bold mt-2 mb-2 text-lg">{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default page
