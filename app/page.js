import Link from "next/link";
import { AiFillEdit, AiFillForward } from "react-icons/ai";

export default function Home() {

  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-y-auto">
      <div className="flex justify-end gap-4 p-6 ">
        <span className="hover:text-blue-600 cursor-pointer">로그인</span>
        <span className="hover:text-blue-600 cursor-pointer">회원가입</span>
      </div>
      <div className="bg-white py-20 ml-6 mr-6 border-4 rounded-2xl border-blue-200">
        <div className="flex text-8xl font-black pt-40 p-10 gap-4 ml-10 text-blue-700">
          <AiFillEdit />TodoList
        
        </div>
          <div className="text-4xl font-semibold p-10 text-blue-500 ml-12">
            일정을 정리하면서 실행해봐요!
          </div>
          <Link href={'/main'} className="text-4xl flex justify-center bg-blue-600 text-bold text-white p-6 mt-4 w-80 ml-20 rounded-full hover:bg-blue-700 cursor-pointer">
            시작하기 <AiFillForward />
          </Link>
        </div>
        <div className="p-8 bg-gray-100"></div>
    </div>
  
  )
}
