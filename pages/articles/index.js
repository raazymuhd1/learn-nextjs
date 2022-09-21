import React from 'react'
import Link from "next/link"

const articles = ({data}) => {

    return (
        <div>
             { data.map(post => (
                     <Link href={`articles/${post.id}`} passHref > 
                        <div key={post.id}>
                                <h2 > { post.title } </h2>
                                <p> { post.body } </p>
                        </div>
                     </Link>
             )) }
        </div>
    )
}

export default articles

export const getStaticProps = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()


    return {
        props: { data }
    }
} 

