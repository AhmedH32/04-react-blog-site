import { useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    
    const {data : blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
    

    return (
        <div className="home">
            {error && <div><h2><span style={{color: 'red',fontSize : '1.2em'}}>ERROR:</span>{error} </h2></div>}
            {isPending && <div ><h2 style={{color: '#f1235d'}}>Fetching data please wait...</h2></div>}
            {blogs && <BlogList blogs={blogs}  title={"All blogs"}></BlogList>}
        </div>
    );
}

export default Home;
