import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export default function MyState({children}) {
    const [loading, setLoading] = useState(false)
    return (
        <ThemeContext.Provider value={{loading, setLoading}}>
            {children}
        </ThemeContext.Provider>
    )
}