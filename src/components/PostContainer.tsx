import {FC, useEffect, useState} from 'react';
import {postAPI} from "../services/PostServices";
import PostItem from "./PostItem";
import {create} from "domain";
import {IPost} from "../models/IPost";

const PostContainer: FC = () => {
    const [limit, setLimit] = useState<number>(100);
    const { data: posts, isLoading, error, refetch } = postAPI.useFetchAllPostsQuery(limit);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();


    const handledCreate = async () => {
       const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post);
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return(
        <div className='post__list'>
            <button onClick={()=>refetch()}>REFETCH</button>
            <button onClick={handledCreate}>Add POST</button>
            {isLoading && <h1>Идет загрузка постов...</h1> }
            {error && <h1>произошла ошибка</h1> }
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
            )}
        </div>
    )
}

export default PostContainer;