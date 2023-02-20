import {createContext, ReactNode, useState} from "react";

interface ContextProps {
	value: string;
}

export const Context = createContext<ContextProps>({
	value: ''
})

interface ProviderProps {
	children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
	const [value, setValue] = useState('123')
	
	return <Context.Provider value={{value}}> {children} </Context.Provider>
}
