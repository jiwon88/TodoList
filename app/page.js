import Link from "next/link";
import { AiFillEdit, AiFillForward } from "react-icons/ai";

export default function Home() {

  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-y-auto">
      <div className="flex justify-end gap-4 p-6">
        <span>로그인</span>
        <span>회원가입</span>
      </div>
      <div className=" flex text-8xl font-black pt-40 p-10  text-blue-700">
        <AiFillEdit />TodoList
       
      </div>
        <div className="text-5xl font-semibold p-10 text-blue-500 ml-4">
          일정을 정리하면서 실행해봐요!
        </div>
        <Link href={'/main'} className="text-4xl flex justify-center bg-blue-800 text-bold text-white p-6 w-80 ml-10 rounded-full">
          시작하기 <AiFillForward />
        </Link>
      
    </div>
  
  )
}
