import { useState } from "react";
import useBookContext from "../hooks/use-book-context";


function BookCreate() {
    const [ title, setTitle ] = useState("");

    const { createBook } = useBookContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBook(title);
    }

    return (
        <div className="book-create">
            <h3>Add a new Book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;