import './OurBlogs.css';
import ourBlogs from "../../../ourBlogs.js"
import BlogCard from "./BlogCard.jsx";

function OurBlogs() {
    return (
        <div className="Home-Sub-Container Our-Blogs">
            <h2 >
                <span className = "Light-Blue">Our</span> Blogs
            </h2>
            <div className="Blogs-Container">
                {
                    ourBlogs.map((blog)=>{
                        return <BlogCard key={blog.id} blog={blog}/>
                    })
                }
            </div> 
            <a className="View-All" href="/">View all +</a>           
        </div>
    );
}

export default OurBlogs;
