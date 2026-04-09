import { useEffect, useState } from "react";
import "./App.css";

const mockData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Frontend" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Backend" },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Designer",
  },
  { id: 4, name: "Bob Brown", email: "bob@example.com", role: "DevOps" },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "Frontend",
  },
  { id: 6, name: "Diana Evans", email: "diana@example.com", role: "QA" },
  { id: 7, name: "Ethan Wilson", email: "ethan@example.com", role: "Backend" },
  { id: 8, name: "Fiona Clark", email: "fiona@example.com", role: "Product" },
  {
    id: 9,
    name: "George Miller",
    email: "george@example.com",
    role: "Frontend",
  },
  {
    id: 10,
    name: "Hannah Taylor",
    email: "hannah@example.com",
    role: "Designer",
  },
];

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = mockData.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.email.toLowerCase().includes(query.toLowerCase()) ||
      item.role.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {}, [query]);

  return (
    <div className="app">
      <label>
        Search
        <input
          name="search"
          value={query}
          defaultValue=""
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      {filtered.map((item) => (
        <li key={item.id}>
          {item.name} — {item.role}
        </li>
      ))}
    </div>
  );
}
