using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace GraphQLExample
{
    public class GraphQLOperationFilter : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            if (context.ApiDescription.RelativePath.Contains("graphql"))
            {
                operation.Summary = "GraphQL API endpoint";
                operation.Description = "Use this endpoint to execute GraphQL queries and mutations.";
                operation.Parameters.Clear(); // Clear default parameters if necessary
            }
        }
    }

}
