import { useState, useEffect } from "react";

export default function EffectTest() {
  const [test, setTest] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setTest((test) => test + 1);
    }, 1000);
  }, []);

  return <div>{test}</div>;
}
