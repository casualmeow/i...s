// import { useEffect, useState } from "react";

// export default function UseDebouncePage() {
//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState({});

//   useEffect(() => {
//     setLoading(true);
//     const fn = async () => {
//       const response = await fetch("/api/developers");
//       const data = response.json;
//       setData(data);
//       setLoading(false);
//     };

//     fn();
//   }, []);

//   useEffect(() => {}, [query]);

//   const filtered = mockData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(query.toLowerCase()) ||
//       item.email.toLowerCase().includes(query.toLowerCase()) ||
//       item.role.toLowerCase().includes(query.toLowerCase()),
//   );
// }
