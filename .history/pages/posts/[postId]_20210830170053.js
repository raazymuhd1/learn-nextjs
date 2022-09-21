import React from 'react'

const postDetails = ({data}) => {
    return (
        <div>
            { data.map(post => (
                <div key={post.id}>
                    <h2>{ post.title }</h2>
                    <h2>{ post.body }</h2>
                </div>
            )) }

            {/* <h2> { posts } </h2> */}
        </div>
    )
}

export const getStaticPaths = async() => {
      const res = await fetch(`http://jsonplaceholder.typicode.com/posts`)
      const data = await res.json()

       const paths = data.map(post => {
           return {
               params: { 
                   postId: `${post.id}`
                }
           }
       })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const { params } = context;
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()

    return {
        props: { data }
    }
}

// export const getServerSideProps = async(context) => {
//     const { params } = context;
//     const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`)
//     const data = await res.json()

//     console.log(data)

//     return {
//         props: { posts: data }
//     }
// } 

export default postDetails
