import React from 'react'

const postId = () => {
    return (
        <div>
            
        </div>
    )
}

export const getStaticPaths = async() => {
    return {
        
    }
}

export const getStaticProps = async(ctx) => {
    const { params } = ctx;
    const res = await fetch(`http://localhost:3000/api/post/1`)
    const data = await res.json()

    console.log(params)

    return {
        props: { data }
    }
}

export default postId
