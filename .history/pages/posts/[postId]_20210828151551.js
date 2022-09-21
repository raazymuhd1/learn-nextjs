import React from 'react'

const postId = ({data}) => {
    return (
        <div>
            { data.map(post => (
                <div key={post.id}>
                    <h2>{ post.text }</h2>
                </div>
            )) }
        </div>
    )
}

export const getStaticPaths = async() => {
    return {
        paths: [
            { params: { postId: '1' } },
            { params: { postId: '1' } },
            { params: { postId: '1' } },
        ],
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/posts/${params.postId}`)
    const data = await res.json()

    console.log(data)

    return {
        props: { data }
    }
}

export default postId
