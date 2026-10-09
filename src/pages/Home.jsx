import { Link } from "react-router-dom";
import Posts from "./Post";
function Home(){
    return (
        <div className="text-center">
        
           <h1 className="text-3xl text-blue-500 p-5">Website Title</h1> 
           <p className="p-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim soluta libero molestiae reiciendis magnam! Illo qui porro natus, veritatis aliquam ipsam inventore ab. Vel accusamus velit nisi, harum dolore incidunt.
           </p>

          <Link to="/p" >
           <button type="button" className="p-2 border-1 bg-blue-300 roudled-lg"  >View Post</button>
           </Link>
        </div>
    )
}
export default Home;