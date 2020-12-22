const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "swagger-express-jsdoc", // Title (required)
      version: "1.0.0", // Version (required)
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./src/routes/*.ts"],
};
export default swaggerOptions;
