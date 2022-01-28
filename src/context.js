import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fnSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };
    const fnModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <AppContext.Provider
            value={{ isSideBarOpen, isModalOpen, fnSidebar, fnModal }}
        >
            {children}
        </AppContext.Provider>
    );
};
// custom hooks
export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider };
