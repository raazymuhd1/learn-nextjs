import React, { useState, useEffect } from 'react'

const Comment = () => {

    const Url = `/api/comment`
    const [ comments, setComments ] = useState([])
    const [ text, setText ] = useState('')

    // get data comments
    useEffect(() => {
        const fetchData = async() => {

            const res = await fetch(Url)
            const data = await res.json()

            console.log(data[0])
        }

        fetchData()

    }, [comments])

    // post data
    const updateComments = async() => {
         const res = await fetch(Url, {
             method: 'POST', 
             body: JSON.stringify({ text }),
             headers: {
                  'Content-Type': 'application/json',
             }
         })

         const data = await res.json();

        setComments(data)

         setText('')
    }

    return (
        <div>
              <input type='text' placeholder='type something' value={text} onChange={e => setText(e.target.value)} />
              <button onClick={updateComments}> New Comment </button>

            { comments.map(comment => (
                <div key={comment.id}>
                    <h2> { comment.text } </h2>
                </div>
            )) }
        </div>
    )
}

export default Comment
