import { useContext } from "react";
import { createContext, ReactNode, useState } from "react";

type NavigateProviderProps = {
    children: ReactNode;
}

interface NavigateContextProps {
    activeLink: string,
    setActiveLinkProps: (value: string) => void
}

export const NavigateContext = createContext({} as NavigateContextProps);

export const NavigateProvider = ({children}: NavigateProviderProps) => {
    const [activeLink, setActiveLink] = useState("home");

    function setActiveLinkProps(value: string){
        setActiveLink(value);
    }

    return (
        <NavigateContext.Provider value={{
            activeLink,
            setActiveLinkProps
        }}>
            {children}
        </NavigateContext.Provider>
    )
}

export const useNavigate = () => useContext(NavigateContext);