import connectDb from "../../../dbConnect"

const postData = [
    { id: 1, text: "lorem ipsum dolor"},
    { id: 2, text: "lorem ipsum dolor"},
    { id: 3, text: "lorem ipsum dolor"},
]

dbConnect()

const posts = (req, res) => {
     res.status(200).json(postData)
}

export default posts;