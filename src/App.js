import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./contexts/books";

function App() {
    const { stableFetchBooks } = useContext(BookContext);

    useEffect(
        () => {
            stableFetchBooks();
        }, [stableFetchBooks]
    );

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate />
            <BookList />
        </div>
    );
}

export default App;