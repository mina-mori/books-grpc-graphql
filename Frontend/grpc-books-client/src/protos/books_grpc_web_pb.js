// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

var grpc = {};
grpc.web = require('grpc-web');

var jspb = require('google-protobuf');

var proto = {};
proto.books = require('./books_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.books.BooksGRPCClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client instance
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used for requests
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Additional options
   */
  this.options_ = options;
};


/**
 * @param {!proto.books.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.books.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.books.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.books.BooksGRPCClient.prototype.createBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/books.BooksGRPC/CreateBook',
      request,
      metadata || {},
      methodDescriptor_BooksGRPC_CreateBook,
      callback);
};


/**
 * @param {!proto.books.Book} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.books.Book>}
 *     Promise that resolves to the response
 */
proto.books.BooksGRPCClient.prototype.createBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/books.BooksGRPC/CreateBook',
      request,
      metadata || {},
      methodDescriptor_BooksGRPC_CreateBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.books.Book,
 *   !proto.books.Book>}
 */
var methodDescriptor_BooksGRPC_CreateBook = new grpc.web.MethodDescriptor(
  '/books.BooksGRPC/CreateBook',
  grpc.web.MethodType.UNARY,
  proto.books.Book,
  proto.books.Book,
  /**
   * @param {!proto.books.Book} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.books.Book.deserializeBinary
);


/**
 * @param {!proto.books.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.books.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.books.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.books.BooksGRPCClient.prototype.getBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/books.BooksGRPC/GetBook',
      request,
      metadata || {},
      methodDescriptor_BooksGRPC_GetBook,
      callback);
};


/**
 * @param {!proto.books.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.books.Book>}
 *     Promise that resolves to the response
 */
proto.books.BooksGRPCClient.prototype.getBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/books.BooksGRPC/GetBook',
      request,
      metadata || {},
      methodDescriptor_BooksGRPC_GetBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.books.GetBookRequest,
 *   !proto.books.Book>}
 */
var methodDescriptor_BooksGRPC_GetBook = new grpc.web.MethodDescriptor(
  '/books.BooksGRPC/GetBook',
  grpc.web.MethodType.UNARY,
  proto.books.GetBookRequest,
  proto.books.Book,
  /**
   * @param {!proto.books.GetBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.books.Book.deserializeBinary
);


/**
 * @param {!proto.books.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.books.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.books.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.books.BooksGRPCClient.prototype.updateBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/books.BooksGRPC/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_BooksGRPC_UpdateBook,
      callback);
};


/**
 * @param {!proto.books.Book} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.books.Book>}
 *     Promise that resolves to the response
 */
proto.books.BooksGRPCClient.prototype.updateBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/books.BooksGRPC/UpdateBook',
      request,
      metadata || {},
      methodDescriptor_BooksGRPC_UpdateBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.books.Book,
 *   !proto.books.Book>}
 */
var methodDescriptor_BooksGRPC_UpdateBook = new grpc.web.MethodDescriptor(
  '/books.BooksGRPC/UpdateBook',
  grpc.web.MethodType.UNARY,
  proto.books.Book,
  proto.books.Book,
  /**
   * @param {!proto.books.Book} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.books.Book.deserializeBinary
);


/**
 * @param {!proto.books.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.books.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.books.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.books.BooksGRPCClient.prototype.deleteBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/books.BooksGRPC/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_BooksGRPC_DeleteBook,
      callback);
};


/**
 * @param {!proto.books.DeleteBookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.books.Book>}
 *     Promise that resolves to the response
 */
proto.books.BooksGRPCClient.prototype.deleteBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/books.BooksGRPC/DeleteBook',
      request,
      metadata || {},
      methodDescriptor_BooksGRPC_DeleteBook);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.books.DeleteBookRequest,
 *   !proto.books.Book>}
 */
var methodDescriptor_BooksGRPC_DeleteBook = new grpc.web.MethodDescriptor(
  '/books.BooksGRPC/DeleteBook',
  grpc.web.MethodType.UNARY,
  proto.books.DeleteBookRequest,
  proto.books.Book,
  /**
   * @param {!proto.books.DeleteBookRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.books.Book.deserializeBinary
);


module.exports = proto.books;

