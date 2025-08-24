namespace GraphQLExample
{
    

    // The Mutation type defining the GraphQL mutations
    public class Mutation
    {
        private static List<Book> books = new List<Book>
        {
            new Book(1, "The Great Gatsby", "F. Scott Fitzgerald"),
            new Book(2, "To Kill a Mockingbird", "Harper Lee"),
            new Book(3, "1984", "George Orwell"),
        };

        // Method to add a new book
        public Book AddBook(string title, string author)
        {
            var newBook = new Book(books.Count + 1, title, author);
            books.Add(newBook);
            return newBook;
        }
    }
}
