import { createContext, useState, useCallback } from "react";
import axios from "axios";


const BookContext = createContext();

function Provider({ children }) {
    const [ books, setBooks ] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        console.log("Fetching");
        
        setBooks(response.data);
    };

    const stableFetchBooks = useCallback(
        fetchBooks,
        []
    );

    const editBookById = async (id, title) => {
        const response = await axios.put(
            `http://localhost:3001/books/${id}`,
            {
                title
            }
        );

        const updatedBooks = books.map(
            (book) => {
                if (book.id === id) {
                    return { ...book, ...response.data };
                }
                return book;
            }
        );

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        
        const updatedBooks = books.filter(
            (book) => {
                return book.id !== id;
            }
        );

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", 
            {
                title,
            }
        );

        const updatedBooks = [
            ...books, 
            response.data
        ];

        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        createBook,
        editBookById,
        fetchBooks,
        stableFetchBooks,
        deleteBookById,
    };

    return (
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    );
}

export { Provider };
export default BookContext;