function AddPost(){
    return(
        <div>
            <h1 className="text-center text-2xl text-blue-600">
        ADD POST            </h1>

        <form action="
        " className="border-2 m-3 px-3 py-1 w-100 m-auto mt-10">
            <input type="text"
            placeholder="title" 
            className="border-2 text-center w-75 m-7 "
            /> <br />
            <input type="text"
            placeholder="body" 
            className=" m-7 mt-3 border-2 text-center w-75"/> <br />
            <button type="submit" className="px-5 bg-green-500  border-2 mt-3 m-5 mx-10" >Submit</button>
        </form>
        </div>
    )
}
export default AddPost;