import React from 'react'

const postId = ({posts}) => {
    return (
        <div>
            {/* { posts.map(post => (
                <div key={post.id}>
                    <h2>{ post.text }</h2>
                </div>
            )) } */}

            {/* <h2> { posts } </h2> */}
        </div>
    )
}

// export const getStaticPaths = async(context) => {
//       const { params } = context
//       const res = await fetch(`http://localhost:3000/api/posts/${params.postId}`)
//       const data = await res.json()

//     return {
//         paths: [
//             { params: { postId: params.postId} },
//         ],
//         fallback: false
//     }
// }

// export const getStaticProps = async(context) => {
//     const { params } = context;
//     const res = await fetch(`http://localhost:3000/api/posts/${params.postId}`)
//     const data = await res.json()

//     console.log(data)

//     return {
//         props: { data }
//     }
// }

export const getServerSideProps = async(context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/posts/${params.postId}`)
    const data = await res.text()

    console.log(data)

    return {
        props: { posts: data }
    }
} 

export default postId
