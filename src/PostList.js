import React, {useState, useEffect} from 'react'
import axios from 'axios'

import CommentCreate from './CommentCreate'

export default () => {
    const [posts, setPosts] = useState({})

    const fecthPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts')

        setPosts(res.data)
    }

    const renderedPosts = Object.values(posts).map(posts => {
        return (
            <div 
                className="card"
                style={{width: '30%', marginBottom: '20px'}}
                key={posts.id}
            >
                <div className="card-body">
                    <h3>{posts.title}</h3>

                    <CommentCreate postId={posts.id} />
                </div>
            </div>
        )
    })

    useEffect(() => {
        fecthPosts()
    }, [])
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    )
}