import { Link } from "react-router-dom"

function Navbar() {

    return (
    <>
   <nav  className="text-white-500 text-xl bg-blue-500  text-white flex gap-260   p-5" >
    <div  className=" gap-30  text-black text-3xl hover:text-white ">
      <h1 >Blog website</h1>
       </div>
      <div className="text-right   flex gap-10 ">
     <Link to="/h" className=" hover:text-black">Home</Link>
    <Link to="/p"className=" hover:text-black" >Posts</Link>
    <Link to="/a" className=" hover:text-black">AddPost</Link>
    </div>
   </nav>
    </>
           
    )
}
export default Navbar;