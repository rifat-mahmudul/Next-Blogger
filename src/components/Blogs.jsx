import BlogCard from "./BlogCard";

const Blogs = async () => {

    const blogs = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogData = await blogs.json();

  return (
    <div className="max-w-[90%] xl:max-w-[1200px] mx-auto mt-6 mb-16">

        <h1 className="text-center text-3xl font-bold mb-8">Featured Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.slice(0,15).map(blog => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                >

                </BlogCard>
            ))}
        </div>

    </div>
  )
}

export default Blogs
