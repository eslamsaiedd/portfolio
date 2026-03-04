import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export default function ThemeContextProvider({children}: {children: React.ReactNode}) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSnowfall, setIsSnowfall] = useState(false);
    
    const toggleDarkAndSnow = () => {
        setIsDarkMode(prev => !prev)
        setIsSnowfall(prev => !prev)
    }
    // const toggleSnow = () => (setIsSnow(prev => !prev))
    return (
        <ThemeContext.Provider value={{isDarkMode, isSnowfall, toggleDarkAndSnow}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)