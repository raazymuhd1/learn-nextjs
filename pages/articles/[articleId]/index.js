import React from 'react'

const articleId = ({data}) => {
    return (
        <div>
            { data.map(post => (
                <div key={post.id}> 
                    <h2> { post.title } </h2>
                    <p> { post.body } </p>
                </div>
            )) }
        </div>
    )
}

export const getStaticPaths = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json();

    // const ids = data.map(post => post.id )
    const paths = data.map(({ id })  =>  ( {  params: { id: id.toString() }} ))
    
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async(context)  => {
    const  params  = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.articleId}`)
    const data = await res.json()
    
    
    return {
        props: { 
            data 
        }
    }
}

export default articleId