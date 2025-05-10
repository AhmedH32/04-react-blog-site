import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem impsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem impsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem impsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter((blog)=>{return blog.id !== id})
        setBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log('use effect ran')
        console.log(blogs)
    })

    return (
        <div className="home">
            <BlogList blogs={blogs}  title={"All blogs"} handleDelete={handleDelete}></BlogList>

        </div>
    );
}

export default Home;
