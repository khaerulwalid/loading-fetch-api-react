import { Link, Outlet } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../state";

export default function Navbar() {
    const {loading} = useContext(ThemeContext);
    return (
        <>
            <nav className=" bg-indigo-800">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="p-3">
                            <Link to="/" className="text-white hover:text-slate-300 text-3xl font-bold mr-2">Home</Link>
                            <Link to="/upload" className="text-white hover:text-slate-300 text-3xl font-bold mr-2">Upload</Link>
                        </div>
                        <div className="p-3">
                            {loading && <p className="text-white text-3xl font-bold mr-2">Loading...</p>}
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}