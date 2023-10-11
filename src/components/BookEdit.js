import { useState } from "react";
import useBookContext from "../hooks/use-book-context";

function BookEdit({ book, onSubmit }) {
    const [ title, setTitle ] = useState(book.title);

    const { editBookById } = useBookContext();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        editBookById(book.id, title);
        onSubmit();
    }

    const handleChange = (event) => {
        const newTitle = event.target.value;

        setTitle(newTitle);
    }

    return (
        <div className="book-edit">
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input
                    className="input"
                    value={title} 
                    onChange={handleChange}
                />
                <button className="button is-primary">Save</button>
            </form>
        </div>
    );
}

export default BookEdit;