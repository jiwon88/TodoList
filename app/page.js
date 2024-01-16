import { AiFillEdit } from "react-icons/ai";
import Navbar from "./navbar/page";
import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";

export default async function Home() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()
  console.log(result)
  return (
    <div className="flex flex-col h-screen bg-gray-200 overflow-y-auto">
       
      <div className='flex gap-5 text-4xl font-black p-4 ml-8 pt-10 text-blue-600 text-shadow-xl'>
          
        <AiFillEdit />ToDoList
      </div>
      <Navbar />
      

    </div>
  )
}
