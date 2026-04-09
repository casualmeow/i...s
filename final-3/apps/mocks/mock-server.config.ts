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
    ],
  },
] satisfies FlatMockServerConfig;
