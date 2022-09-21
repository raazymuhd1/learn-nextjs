const articles = [
    { id: 1, text: "lorem ipsum dolor"},
    { id: 1, text: "lorem ipsum dolor"},
    { id: 1, text: "lorem ipsum dolor"},
    { id: 1, text: "lorem ipsum dolor"}
]

const Articles = (req, res) => {
     res.status(200).json(articles)
}

export default Articles;