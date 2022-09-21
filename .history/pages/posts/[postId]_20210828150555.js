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
            { params: { postId: '1' } }
        ],
        fallback: false
    }
}

export const getStaticProps = async(ctx) => {
    const { params } = ctx;
    const res = await fetch(`http://localhost:3000/api/post/${params.postId}`)
    const data = await res.json()

    console.log(params)

    return {
        props: { data }
    }
}

export default postId
