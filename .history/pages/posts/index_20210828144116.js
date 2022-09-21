import React from 'react'

const Posts = () => {
    return (
        <div>
            
        </div>
    )
}

export const getStaticProps = async() => {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json();

    console.log(data)

    return {
        props: { data }
    }
}

export default Posts
