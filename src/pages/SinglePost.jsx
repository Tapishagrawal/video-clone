import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllPostData } from '../redux/action';
import ReactPlayer from 'react-player';
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";


export default function SinglePost() {
    const { id } = useParams();
    const { postsData } = useSelector(store => store.postReducer);
    const [post, setPost] = useState({});
    const dispatch = useDispatch();
    const [state, setState] = useState(false);

    const handleUpdateLike = async (postId, vote, count) => {
        try {
            if (!vote) {
                count++
                localStorage.setItem(postId, JSON.stringify({ vote: !vote, count }))
                setState(!state)
            } else {
                setState(!state)
                count--
                localStorage.setItem(postId, JSON.stringify({ vote: !vote, count }))
            }
        } catch (error) {
            console.log(first)
        }
    }
    useEffect(() => {
        if (!postsData.length) {
            dispatch(getAllPostData());
        } else {
            const singlePost = postsData.find(post => post.postId === id);
            setPost(singlePost);
        }
    }, [id, postsData]);
    return (
        <div className='mt-20'>
            <ReactPlayer controls={true} playing url={post?.submission?.mediaUrl} width={"100%"} />
            <div className='flex justify-between pl-10 gap-5'>
                <div className='w-[60%]'>
                    <h2 className='my-2'>{post?.submission?.title}</h2>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <img className="w-[40px] h-[40px] rounded-full object-cover object-center" src={post?.submission?.thumbnail} alt={post?.creator?.name} />
                            <div>
                                <h4>{post?.creator?.name}</h4>
                                <p className='text-sm text-zinc-400'>{post?.creator?.handle}</p>
                            </div>
                        </div>
                        <div className='mt-2 flex items-center gap-3'>
                            <button className='bg-[#222222] min-w-[90px] px-4 py-2 rounded-full flex items-center gap-2'>{post?.reaction?.count === 0 ? 16 : post?.reaction?.count}k <span>views</span></button>
                            <button onClick={() => handleUpdateLike(post?.postId, JSON.parse(localStorage.getItem(post?.postId))?.vote || post?.reaction?.voted, JSON.parse(localStorage.getItem(post?.postId))?.count || post?.comment?.count)} className='bg-[#222222] min-w-[70px] px-4 py-2 rounded-full flex items-center gap-2'>{JSON.parse(localStorage.getItem(post?.postId))?.vote ? <i className='text-xl'><RiThumbUpFill /></i> : <i className='text-xl'><RiThumbUpLine /></i>}{JSON.parse(localStorage.getItem(post?.postId))?.count || post?.comment?.count}</button>
                        </div>
                    </div>
                    <p className='mt-3 bg-[#272727] p-3 rounded-md'>{post?.submission?.description}</p>
                </div>
                <div className='mt-2 w-[40%] flex flex-col gap-4'>
                    {
                        postsData?.map(post => (
                            <Link to={`/post/${post.postId}`} key={post.postId} className='flex gap-3'>
                                <img src={post.submission.thumbnail} alt="" className='w-[180px] h-[80px] rounded-lg object-cover object-center' />
                                <div>
                                    <h2>{post.submission.title}</h2>
                                    <div>
                                        <h4 className='text-zinc-400'>{post.creator.name}</h4>
                                        <p className='text-sm text-zinc-400'>{post.creator.handle}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
