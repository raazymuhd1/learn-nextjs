import React from 'react'
import Link from "next/link"

const Posts = ({data}) => {
    return (
        <div>
            { data.map(post => (
                <div key={post.id}>
                   <Link href={`/posts/${post.id}`}>
                         <h2> { post.text } </h2>
                   </Link>
                </div>
            )) }
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
