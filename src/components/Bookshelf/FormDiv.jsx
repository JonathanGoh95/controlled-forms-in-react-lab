export default function FormDiv({newBook, handleInputChange, handleSubmit}) {
    return (
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
    )
};