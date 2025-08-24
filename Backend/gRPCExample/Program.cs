using gRPCExample;
using Grpc.AspNetCore.Web;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddGrpc();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.AllowAnyOrigin()  // Allow any origin
                   .AllowAnyHeader() // Allow any header
                   .AllowAnyMethod(); // Allow any method
        });
});

var app = builder.Build();
app.UseCors("AllowAll");
// Configure the HTTP request pipeline.
//app.MapGrpcService<BooksGRPCService>() ;
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");


app.UseRouting();
app.UseGrpcWeb();
app.UseEndpoints(endpoints =>
{
    endpoints.MapGrpcService<BooksGRPCService>().EnableGrpcWeb(); 
});

app.Run();
