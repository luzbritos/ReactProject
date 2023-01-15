import React, { useState, useContext } from 'react'

const Appcontext = React.createContext()

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return(
        <Appcontext.Provider value={{
            isModalOpen,isSidebarOpen,openModal,openSidebar,closeModal,closeSidebar
        }} >{children}</Appcontext.Provider>
    )
}
//custom hooks
export const useGlobalContext = () => {
    return(
        useContext(Appcontext)
    )
}


export {AppProvider,Appcontext}
