import React, { useState, useEffect } from 'react'

const Comment = () => {
    const [ comments, setComments ] = useState([])
    const [ text, setText ] = useState('')

    // get data comments
    useEffect(() => {
        const fetchData = async() => {
            const Url = `/api/comment`

            const res = await fetch(Url)
            const data = await res.json()

            setComments(data)
        }

        fetchData()
    })

    const updateComments = () => {

    }

    return (
        <div>
              <input type='text' placeholder='type something' />

            { comments.map(comment => (
                <div key={comment.id}>
                    <h2> { comment.text } </h2>
                </div>
            )) }
        </div>
    )
}

export default Comment
