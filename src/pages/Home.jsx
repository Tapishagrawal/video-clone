import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPostData } from "../redux/action";
import { Link, useSearchParams } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
export default function Home() {
  const dispatch = useDispatch();
  const { postsData, isLoading } = useSelector(store => store.postReducer);
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(+searchParams.get("page") || 1);
  useEffect(() => {
    dispatch(getAllPostData(page))
    const params = {
      page: +page
    }
    setSearchParams(params)
  }, [page])
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row w-[90%] m-auto gap-5 place-items-center sm:place-items-stretch mt-28">
        {
          postsData?.map(post => (
            <Link to={`/post/${post.postId}`} key={post.postId} className={`${!isLoading && "group"} relative`}>
              <div className={`rounded-lg cursor-pointer group-hover:scale-[1.13] group-hover:absolute transition-all duration-500 delay-300 z-[1] bg-[#0f0f0f] group-hover:bg-[#17181f] pb-3 group-hover:shadow-[0px_5px_15px_rgba(0,0,0,0.72)]`}>
                <div>
                  {
                    isLoading ?
                      <div className="w-[550px] h-[250px] sm:h-[190px] sm:w-[410px] bg-zinc-800 rounded-xl"></div>
                      :
                      <img src={post.submission.thumbnail} alt={post.creator.name} className="w-[550px] h-[250px] sm:h-[190px] sm:w-[410px] object-cover object-center rounded-xl" />
                  }
                </div>
                <div className="flex gap-2 mt-2 p-3">
                  <div className="sm:w-[40px]">
                    {
                      isLoading ?
                        <div className="w-[40px] h-[40px] rounded-full bg-zinc-800"></div>
                        :
                        <img className="w-[40px] h-[40px] rounded-full object-cover object-center" src={post.submission.thumbnail} alt={post.creator.name} />
                    }
                  </div>
                  <div className="sm:w-[90%]">
                    {
                      isLoading ?
                        <div className="flex flex-col gap-3">
                          <div className="bg-zinc-800 w-[130px] h-3 rounded-md"></div>
                          <div className="bg-zinc-800 w-[100px] h-3 rounded-md"></div>
                        </div>
                        :
                        <>
                          <p className="font-semibold">{post.submission.title}</p>
                          <p className="hidden group-hover:inline-block text-xs text-zinc-400">{post.submission.description}</p>
                          <h4 className="group-hover:hidden text-sm text-zinc-400">{post.creator.name}</h4>
                        </>
                    }
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
      <div className="mb-5 mx-14 mt-20 flex justify-end items-center gap-2">
        <button disabled={page <= 1} onClick={() => setPage(pre => pre - 1)} className={`${page <= 1 ? "bg-[#222222]/10" : "bg-[#222222] hover:bg-[#333]"} p-2 transition-all`}><i className={`text-2xl ${page <= 1 ? "text-zinc-500" : "text-white"}`}><RiArrowLeftSLine /></i></button>
        <p className="w-[20px] text-center">{page}</p>
        <button disabled={page >= 11} onClick={() => setPage(pre => pre + 1)} className={`${page >= 11 ? "bg-[#222222]/10" : "bg-[#222222] hover:bg-[#333]"} p-2 transition-all`}><i className={`text-2xl ${page >= 11 ? "text-zinc-500" : "text-white"}`}><RiArrowRightSLine /></i></button>
      </div>
    </div>
  )
}
