import { FC, MouseEvent } from 'react';
import {IPost} from "../models/IPost";
import {postAPI} from "../services/PostServices";

interface PostPropsItem {
    post: IPost;
    remove:  (post: IPost) => void;
    update:  (post: IPost) => void;
}

const PostItem: FC<PostPropsItem> = ({post, remove, update}) => {
    const handleRemove = (event: MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }
    const handleUpdate = (event: MouseEvent) => {
        const title = prompt() || ''
        update({...post, title})
    }

    return(
        <div className='post' onClick={handleUpdate}>
            {post.id}
            {post.title}
            <button onClick={handleRemove}>Удалить пост</button>
        </div>
    )
}

export default PostItem;