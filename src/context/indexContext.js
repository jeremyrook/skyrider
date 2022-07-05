import {createContext} from "react"

export const theme = {
    
    default: {
        layout: '#4cacbc',
        separator: '#6cc4a1',
        block: '#a0d995'
    },
    dark: {
        layout: '#2e0249',
        separator: '#a91079',
        block: '#570a57'
    }
}

export const ThemeContext = createContext(theme.default)
