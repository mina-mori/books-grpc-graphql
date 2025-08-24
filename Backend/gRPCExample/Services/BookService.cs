using Grpc.Core;

namespace gRPCExample
{
    public class BooksGRPCService : BooksGRPC.BooksGRPCBase
    {
        private readonly List<Book> _books = new List<Book>() { 
            new Book { 
                Id = 1, Title= "Book1", Author="Auther1"
            },
            new Book {
                Id = 2, Title= "Book2", Author="Auther2"
            },
            new Book {
                Id = 3, Title= "Book3", Author="Auther3"
            }
        };

        public override Task<Book> CreateBook(Book request, ServerCallContext context)
        {
            _books.Add(request);
            return Task.FromResult(request);
        }

        public override Task<BookList> GetAllBooks(Empty request, ServerCallContext context)
        {
            var bookList = new BookList();
            bookList.Books.AddRange(_books);
            return Task.FromResult(bookList);
        }

        public override Task<Book> GetBook(GetBookRequest request, ServerCallContext context)
        {
            var book = _books.FirstOrDefault(b => b.Id == request.Id);
            return Task.FromResult(book);
        }

        public override Task<Book> UpdateBook(Book request, ServerCallContext context)
        {
            var book = _books.FirstOrDefault(b => b.Id == request.Id);
            if (book != null)
            {
                book.Title = request.Title;
                book.Author = request.Author;
            }
            return Task.FromResult(book);
        }

        public override Task<Book> DeleteBook(DeleteBookRequest request, ServerCallContext context)
        {
            var book = _books.FirstOrDefault(b => b.Id == request.Id);
            if (book != null)
            {
                _books.Remove(book);
            }
            return Task.FromResult(book);
        }
    }
}
