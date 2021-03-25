import React, { useState, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'

export default ({postId}) => {
    const [comments, setComments] = useState([])

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

        setComments(res.data)
    }

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}