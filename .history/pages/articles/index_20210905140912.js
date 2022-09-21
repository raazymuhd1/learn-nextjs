import React from 'react'

const articles = ({data}) => {
    return (
        <div>
            <h2> articles page </h2>
            { data.map(article => (
                <h2> { article.text } </h2>
            )) }
        </div>
    )
}

export const getStaticProps = async() => {
    const res = await fetch(`http://localhost:3000/api/articles`)
    const data = await res.json()

    console.log(data)

    return {
        props: { data }
    }
} 

export default articles
