import { AiFillEdit } from "react-icons/ai";
import { connectDB } from "@/util/database";
import Navbar from "../navbar/page";

export default async function Main() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()
  return (
    <div className="flex flex-col h-screen bg-gray-200 overflow-y-auto">
       
      <div className='flex gap-5 text-4xl font-black p-4 ml-8 pt-10 text-blue-600 text-shadow-xl'>
          
        <AiFillEdit />ToDoList
      </div>
      <Navbar />
      

    </div>
  )
}
