import { createContext } from "react";

export interface ISearchContext {
	requestRepo: string;
	setRequest: (currentRequest: string) => void;
}

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

export default SearchContext;
