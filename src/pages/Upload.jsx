import { useState } from "react"
import { mockApiCall } from "../api"
import { useContext } from "react";
import { ThemeContext } from "../state";

export default function Upload() {
    // const [loading, setLoading] = useState(false)
    const {loading, setLoading} = useContext(ThemeContext);

    const onUploadClick = async () => {
        try {
            setLoading(true)
            await mockApiCall()
        } catch (err) {
            console.log(err);   
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-8 flex flex-col items-center justify-center gap-6">
            <h1>Upload Page</h1>
            <button onClick={onUploadClick} disabled={loading} className="p-2 bg-cyan-700 text-white font-semibold rounded-md disabled:opacity-50">Start Upload</button>
        </div>
    )
}