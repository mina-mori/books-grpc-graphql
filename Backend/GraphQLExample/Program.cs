using GraphQLExample;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Register GraphQL services
builder.Services
    .AddGraphQLServer()
    //.AddQueryType<Query>()
    //.AddMutationType<Mutation>(); 
    .AddQueryType<Query>(descriptor =>
    {
        descriptor.Name("Query");
        descriptor
            .Field(q => q.GetBooks())
            .Name("GetBooks"); // Map method GetBooks to field GetBooks
        descriptor
            .Field(q => q.GetBook(default!))
            .Name("GetBook"); // Map method GetBook to field GetBook
    })
    .AddMutationType<Mutation>(descriptor =>
    {
        descriptor.Name("Mutation");
        descriptor
            .Field(m => m.AddBook(default!, default!))
            .Name("AddBook");
    });

// Register Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "GraphQL API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "GraphQL API V1");
    c.RoutePrefix = string.Empty; // Set Swagger UI at the app's root
});

app.UseRouting();
//app.UseAuthorization();
app.MapGraphQL(); // Map GraphQL endpoint
app.Run();

