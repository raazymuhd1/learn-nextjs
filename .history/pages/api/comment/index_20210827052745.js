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
         res.status(200).json( { text } )
     }
}

export default commentsRoute