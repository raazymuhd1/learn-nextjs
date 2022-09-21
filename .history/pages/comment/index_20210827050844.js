import React, { useState, useEffect } from 'react'

const Comment = () => {
    const [ comments, setComments ] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const Url = `/api/comment`
            const res = await fetch(Url)
            const data = await res.json()

            setComments(data)
        }

        fetchData()
    })

    return (
        <div>
            { comments.map(comment => (
                <div key={comment.id}>
                    <h2> { comment.text } </h2>
                </div>
            )) }
        </div>
    )
}

export default Comment
