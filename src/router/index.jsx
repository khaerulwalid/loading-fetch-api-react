import { createBrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import Upload from "../pages/Upload"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "upload",
                element: <Upload />
            }
        ]
    },
])

export default router