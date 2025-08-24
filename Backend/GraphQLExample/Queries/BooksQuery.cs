namespace GraphQLExample
{

    // The Query type defining the GraphQL queries
    public class Query
    {
        private static List<Book> books = new List<Book>
        {
            new Book(1, "The Great Gatsby", "F. Scott Fitzgerald"),
            new Book(2, "To Kill a Mockingbird", "Harper Lee"),
            new Book(3, "1984", "George Orwell"),
        };

        // This method returns a list of books as sample data
        public IEnumerable<Book> GetBooks() => books;

        // Example: get a book by its ID
        public Book? GetBook(int id) => books.Find(book => book.Id == id);
    }

}
