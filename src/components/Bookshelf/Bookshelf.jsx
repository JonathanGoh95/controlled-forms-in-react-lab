import { useState } from 'react';

export default function Bookshelf() {
    const [books,setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
])
    const [newBook,setNewBook] = useState({})

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({...newBook,[name]: value}); // Updates newBook state object
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])           // Adds the data from the newBook over to the books array
        setNewBook({ title: '', author: '' });  // Clears both input fields after form submission
    }

    return(
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input id='title' name='title' value = {newBook.title} onChange={handleInputChange}/>
                <label>Author: </label>
                <input id='author' name='author' value = {newBook.author} onChange={handleInputChange}/>
                <button type='submit'>Add Book</button>
            </form>
        </div>
        {/* Map through the books array and display each book accordingly */}
        <div className="bookCardsDiv">{books.map((book,index)=>(
            <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
            </div>
        ))}
        </div>
    </div>    
    )
}
