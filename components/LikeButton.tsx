import React, { useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import useAuthStore  from '../store/authStore';


interface Iprops {
   handleLike: () => void,
   handleDisLike: () => void,
   Likes:  any[]
}

const LikeButton = ( { Likes, handleLike, handleDisLike } : Iprops) => {

    const [alreadyLiked, setAlreadyLiked] = useState(false);
    const { userProfile }: any = useAuthStore();
    const filterLikes =  Likes?.filter( (item) => item._ref === userProfile?._id);

    useEffect(() => {
        if(filterLikes?.length > 0) {
            setAlreadyLiked(true);
        } else {
            setAlreadyLiked(false);
        }
    }, [filterLikes, Likes])


  return (
    <div className='flex gap-6'>
        <div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
            {alreadyLiked ? (
                <div className='bg-primary rounded-full p-2 md:p-4 text-[#F51997]' onClick={handleDisLike}>
                    <MdFavorite className='text-lg md:text-2xl' />
                </div>
            ) : (
                <div className='bg-primary rounded-full p-2 md:p-4' onClick={handleLike}>
                    <MdFavorite className='text-lg md:text-2xl' />
                </div>
            )}
            <p className='text-md font-semibold'> {Likes?.length || 0}</p>
        </div>
    </div>
  )
}

export default LikeButton