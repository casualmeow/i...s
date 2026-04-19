import type { FlatMockServerConfig } from "mock-config-server";

export default [
  {
    baseUrl: "/",
  },
  {
    configs: [
      {
        path: "/user",
        method: "get",
        routes: [
          {
            data: {
              emoji: "🧊",
              name: "Siberia can code",
            },
          },
        ],
      },
      {
        path: "/developers",
        method: "get",
        routes: [
          {
            data: [
              { id: 1, name: "John Doe", email: "john@example.com", role: "Frontend" },
              { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Backend" },
              { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Designer" },
              { id: 4, name: "Bob Brown", email: "bob@example.com", role: "DevOps" },
              { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Frontend" },
              { id: 6, name: "Diana Evans", email: "diana@example.com", role: "QA" },
              { id: 7, name: "Ethan Wilson", email: "ethan@example.com", role: "Backend" },
              { id: 8, name: "Fiona Clark", email: "fiona@example.com", role: "Product" },
              { id: 9, name: "George Miller", email: "george@example.com", role: "Frontend" },
              { id: 10, name: "Hannah Taylor", email: "hannah@example.com", role: "Designer" },
            ],
          },
        ],
      },
    ],
  },
] satisfies FlatMockServerConfig;
