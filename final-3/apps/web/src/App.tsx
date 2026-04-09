import { Activity, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { formatPrice } from "@final-3/utils";

function App() {
  const [count, setCount] = useState(0);
  const [mockData, setMockData] = useState<Record<string, string> | null>(null);
  const [loadingMocks, setLoadingMocks] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formattedSize, setFormattedSize] = useState("");

  const handleTestMockApi = async () => {
    setLoadingMocks(true);

    try {
      const res = await fetch("http://localhost:31299/user");
      const data = await res.json();
      setLoadingMocks(false);
      setMockData(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoadingMocks(false);
    }
  };

  const handleClick = () => {
    setCount((count) => count + 1);
    setFormattedSize(formatPrice(count));
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button className="counter" onClick={handleClick}>
          Count is {count}
        </button>
        <button className="counter" onClick={handleTestMockApi}>
          call api
        </button>
        <Activity mode={loadingMocks ? "visible" : "hidden"}>Loading</Activity>
        {mockData ? (
          Object.entries(mockData).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))
        ) : (
          <div>{String(error)}</div>
        )}
        {formattedSize !== "" ? (
          <div>Formatted price is: {formattedSize}</div>
        ) : (
          <div>No formatted size</div>
        )}
      </section>
    </>
  );
}

export default App;
