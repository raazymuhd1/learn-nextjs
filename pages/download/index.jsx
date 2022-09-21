import {  DownloadContainer } from "./styles.js"

import { useSelector, useDispatch } from "react-redux"

const Download = () => {
   const download = useSelector(state => state.download )
   const dispatch = useDispatch();

   const downloadSuccess = () => {
        dispatch({ type: "download", download: true })
   }

    return (
        <DownloadContainer>
             <h2> this is a download page </h2>
             <button onClick={downloadSuccess} > Download Now </button>
        </DownloadContainer>
    )
}

export default Download
