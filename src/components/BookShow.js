import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-book-context";

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const { deleteBookById } = useBookContext();

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }


    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return (
        <div className="book-show">
            <img alt="random" src={`https://picsum.photos/seed/${book.id}300/200`} />
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Show Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;