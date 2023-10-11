import { useContext } from "react";
import BookContext from "../contexts/books";


function useBookContext() {
    return useContext(BookContext);
}

export default useBookContext;