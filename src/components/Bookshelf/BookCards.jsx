export default function BookCards({books}) {
    return (
        // Map through the books array and display each book accordingly
        <div className="bookCardsDiv">{books.map((book,index)=>(
            <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
            </div>
        ))}
        </div>
    );
}