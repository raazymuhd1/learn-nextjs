import React, { useEffect } from 'react'

const Comment = () => {

    useEffect(() => {
        const fetchData = async() => {
            const Url = `/api/comment`
            const res = await fetch(Url)
            const data = await res.json()

            console.log(data)
        }

        fetchData()
    })

    return (
        <div>
            
        </div>
    )
}

export default Comment
