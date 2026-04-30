import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

type Developer = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function UseDebouncePage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Developer[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/developers");

        if (!response.ok) {
          throw new Error("Failed to fetch developers");
        }

        const developers: Developer[] = await response.json();

        setData(developers);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  const filteredDevelopers = useMemo(() => {
    const normalizedQuery = (debouncedQuery ?? "").toLowerCase().trim();

    if (!normalizedQuery) {
      return data;
    }

    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.email.toLowerCase().includes(normalizedQuery) ||
        item.role.toLowerCase().includes(normalizedQuery),
    );
  }, [data, debouncedQuery]);

  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Developers</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Search developers by name, email or role.
        </p>
      </div>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search developers..."
        className="mb-6 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
      />

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && filteredDevelopers.length === 0 && <p>No developers found.</p>}

      {!loading && !error && filteredDevelopers.length > 0 && (
        <ul className="space-y-3">
          {filteredDevelopers.map((developer) => (
            <li key={developer.id} className="rounded-lg border p-4 shadow-sm">
              <h2 className="font-medium">{developer.name}</h2>
              <p className="text-sm text-muted-foreground">{developer.email}</p>
              <span className="mt-2 inline-block rounded-full bg-muted px-2 py-1 text-xs">
                {developer.role}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
