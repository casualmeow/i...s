import { useToggle } from "@/hooks/useToggle";

export default function ZalupaPage() {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div>
      <button onClick={toggleVisible}>{isVisible ? "Hide" : "Show"} Content</button>
      {isVisible && <p>This content can be toggled!</p>}
    </div>
  );
}
