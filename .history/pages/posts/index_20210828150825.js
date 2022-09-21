import React from 'react'
import Link from "next/link"

const Posts = ({data}) => {
    return (
        <div>
            { data.map(post => (
                <div key={post.id}>
                   <Link href={`/posts/${post.id}`} passHref>
                         <h2> { post.text } </h2>
                   </Link>
                </div>
            )) }
        </div>
    )
}

export const getStaticProps = async(ctx) => {
    const { params } = ctx;
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json();

    console.log(params)

    return {
        props: { data }
    }
}

export default Posts
