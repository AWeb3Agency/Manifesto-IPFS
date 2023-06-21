module.exports = {
  components: {},
  info: {
    title: "Manifesto API",
    version: "0.0.1",
    description: "Manifesto API Documentation",
  },
  host: "localhost:3000",
  basePath: "/api",
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "Bearer <JWT-TOKEN>",
    },
  },
  security: [{ apiKeyAuth: [] }],
  apis: ["src/pages/api/**/*.ts"],
};
