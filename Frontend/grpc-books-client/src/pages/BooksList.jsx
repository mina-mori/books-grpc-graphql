import { useEffect, useState } from 'react';
import { BooksGRPCClient } from '../protos/books_grpc_web_pb'; // Adjust the path
import { GetBookRequest } from '../protos/books_pb'; // Adjust the path

const client = new BooksGRPCClient('https://localhost:7001'); // Adjust the server address and port

const BooksList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                debugger;
                // const request = new GetBookRequest(); // Adjust if you need to set any parameters
                // const response = await client.getBook(request, {});
                // setBooks(response.getBooksList()); // Adjust based on your response structure

                const request = new GetBookRequest();
                request.setId(1); // Set the ID of the book you want to fetch
                const response = await client.getBook(request, {});
                setBooks([response]); // Adjust based on your response structure
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Books List</h1>
            <ul style={{textAlign:'left'}}>
                {books.map((book) => (
                    <li key={book.getId()}>
                        {book.getTitle()} by {book.getAuthor()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksList;
