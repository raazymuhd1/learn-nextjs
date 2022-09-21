import React from 'react'

const postDetails = ({posts}) => {
    return (
        <div>
            { posts.map(post => (
                <div key={post.id}>
                    <h2>{ post.title }</h2>
                    <h2>{ post.body }</h2>
                </div>
            )) }

            {/* <h2> { posts } </h2> */}
        </div>
    )
}

// export const getStaticPaths = async(context) => {
//       const { params } = context
//       const res = await fetch(`http://localhost:3000/api/posts`)
//       const data = await res.text()

//     //   console.log(data)

//     return {
//         paths: [
//             { params: { postId: '1' } },
//         ],
//         fallback: false
//     }
// }

// export const getStaticProps = async(context) => {
//     const { params } = context;
//     const res = await fetch(`http://localhost:3000/api/posts/${params.postId}`)
//     const data = await res.text()

//     console.log(data)

//     return {
//         props: { data }
//     }
// }

export const getServerSideProps = async(context) => {
    const { params } = context;
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.text()

    console.log(data)

    return {
        props: { posts: data }
    }
} 

export default postDetails
