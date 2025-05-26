import { useState } from 'react';
import BookCards from './BookCards';
import FormDiv from './FormDiv';

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
        <FormDiv newBook={newBook} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
        <BookCards books={books}/>
    </div>    
    )
}
