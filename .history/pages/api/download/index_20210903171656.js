const download = (req, res) => {
       const method = req.method;

       if(method === "GET") {
           res.status(200).download("./index.js")
       }
}

export default download;