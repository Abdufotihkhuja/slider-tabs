import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
    const { fnSidebar, fnModal } = useGlobalContext();
    return (
        <main>
            <button className="sidebar-toggle" onClick={fnSidebar}>
                <FaBars />
            </button>
            <button className="btn" onClick={fnModal}>
                Show modal
            </button>
        </main>
    );
};

export default Home;
