import React from 'react'
import Link from "next/link"

const Posts = ({data}) => {
    return (
        <div>
            { data.map(post => (
                <div key={post.id}>
                   <Link href={`/posts/${post.id}`} passHref >
                         <h2> { post.title} </h2>
                   </Link>
                         <h2> { post.body} </h2>
                </div>
            )) }
        </div>
    )
}

export const getStaticProps = async() => {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    // console.log(data)

    return {
        props: { data }
    }
}

export default Posts
