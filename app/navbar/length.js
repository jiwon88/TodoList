import { AiFillPlusCircle, AiOutlineSearch, AiFillProfile, AiFillSchedule } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa6";

export default function Length(){
    return(
        <div className="bg-gray-50 m-20 mt-10 w-1/5 h-full rounded-xl border-2 border-blue-200">
            <div className="p-6 pt-14">
                <div className="flex flex-cols gap-2 text-xl text-blue-600 font-semibold">
                    <span className="p-0.5"><AiFillPlusCircle /></span>작업추가
                </div>
            </div>
            <div className="border border-dashed m-4"></div>
                <div className="ml-6 pt-2">

                    <div className="flex flex-cols pt-2.5 text-gray-600 font-semibold ml-4"><AiOutlineSearch />
                        <span className="ml-2">검색</span>
                    </div>
                    <div className="flex flex-cols pt-2.5 text-gray-600 font-semibold ml-4"><AiFillProfile />
                        <span className="ml-2">오늘</span>
                    </div>
                    <div className="flex flex-cols pt-2.5 text-gray-600 font-semibold ml-4"><AiFillSchedule />
                        <span className="ml-2">내일</span>
                    </div>
                
                
            </div>
            <div className="border border-dashed m-4"></div>
            <div className="ml-8 pt-4">
                <div className="flex flex-cols gap-2 text-xl text-blue-600 font-semibold">
                    <span className="p-0.5"><MdWork /></span>Project
                </div>
                <div className="flex flex-cols pt-2.5 text-orange-500 font-semibold ml-4">#
                    <span className="ml-2 text-gray-600">브랜드</span>
                </div>
                <div className="flex flex-cols pt-2.5 text-rose-500 font-semibold ml-4">#
                    <span className="ml-2 text-gray-600">미팅 안건</span>
                </div>
                <div className="flex flex-cols pt-2.5 text-indigo-500 font-semibold ml-4">#
                    <span className="ml-2 text-gray-600">미팅</span>
                </div>
            </div>

            <div className="border border-dashed m-4"></div>

            <div className="ml-8 pt-4">
                <div className="flex flex-cols gap-2 text-xl text-rose-500 font-semibold">
                    <span className="p-0.5"><FaDumbbell /></span>자기계발
                </div>
                <div className="flex flex-cols pt-2.5 text-yellow-500 font-semibold ml-4">#
                    <span className="ml-2 text-gray-600">운동</span>
                </div>
                <div className="flex flex-cols pt-2.5 text-green-500 font-semibold ml-4">#
                    <span className="ml-2 text-gray-600">식품</span>
                </div>
                <div className="flex flex-cols pt-2.5 text-purple-500 font-semibold ml-4">#
                    <span className="ml-2 text-gray-600">약속</span>
                </div>
            </div>
           
        </div>
    )
}