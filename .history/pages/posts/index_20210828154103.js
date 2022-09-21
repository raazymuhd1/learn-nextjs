import React from 'react'
import Link from "next/link"

const Posts = ({data}) => {
    return (
        <div>
            { data.map(post => (
                   <Link href={`/posts/${post.id}`} passHref >
                        <div key={post.id}>
                                <h2> { post.text } </h2>
                        </div>
                   </Link>
            )) }
        </div>
    )
}

export const getStaticProps = async() => {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json();

    return {
        props: { data }
    }
}

export default Posts
