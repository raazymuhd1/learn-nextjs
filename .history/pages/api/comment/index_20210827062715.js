const comments = [
    { id: 1, text: "lorem ipsum dolor" },
    { id: 2, text: "lorem ipsum dolor" },
    { id: 3, text: "lorem ipsum dolor" },
    { id: 4, text: "lorem ipsum dolor" }
]

const commentsRoute = ( req, res ) => {
     const { method, body: { text } } = req;

     if( method === "GET" ) {
         res.status(200).json(comments)

     } else if( method === 'POST' ) {
         const newComment =  { id: Date.now(), text }
         comments.push(newComment)

         res.status(200).json( newComment )
     }
}

export default commentsRoute