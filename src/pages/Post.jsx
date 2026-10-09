 import { useState,useEffect } from "react";
 import axios from "axios";
   const Api="https://jsonplaceholder.typicode.com/posts"
 function Posts(){
   
    const[posts,setPost]=useState([])
    const[search,setSearch]=useState([])
    const[form,setForm]=useState({
        title:"",
        body:""
    })
    const[loading,setLoading]=useState(false);
    const [success,setSuccess]=useState();
    const[error,setError]=useState();


   

    const getPost=async()=>{
            try{
                  setLoading(true);
                  setError("")
                const response=await axios.get(Api)
                console.log(response.data);
                
            setPost(response.data)
            }catch(error){
                setError("failed")
                console.log(error);
                  
            }
            finally{
                setLoading(false)
    }

}

const handleDelete= async (id)=>{
    try{
        setError("")
        setSuccess("")
        await deletePost(id);
        setPost((prev)=>
        prev.filter((post)=>post.id !==id)
    );
    setSuccess("post deleted")
    }catch(error){
        setError("failed to delete")
    }
}
const  filterPost=posts.filter((post)=>
post.title.toLowerCase().includes(search.toLowerCase))


   useEffect(()=>{
    getPost()
   },[search])


    return (
                 <div>
                    <input type="text"
            value={search} 
            placeholder="search items"
            onChange={(e)=>setSearch(e.target.value)}
            className="px-50 mx-20 mt-10 border-2 "/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
           {loading && <p>Loading posts</p>}
           {success && <p>{success}</p> }
           {error && <p>{error}</p>}
            {posts.map((post)=>(
                <div key={post.id} >
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <button className="bg-red-500 border-1 px-4 p-1 m-3"
                    onClick={()=>handleDelete (post.id)} 
                    >delete</button>
                    <button className="bg-yellow-500 border-1 px-4 p-1 m-3">favorite</button>
                    <button className="bg-green-500 border-1 px-4 p-1 m-3" >view</button>
                </div>)
            )}
        </div>
        </div>
    )
}
export default Posts;