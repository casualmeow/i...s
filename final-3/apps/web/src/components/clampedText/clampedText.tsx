import { useLayoutEffect, useRef, useState } from "react";

type ClampedTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function ClampedText({ children, className = "" }: ClampedTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLParagraphElement>(null);
  const [lines, setLines] = useState(1);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const measure = measureRef.current;
    if (!wrapper || !measure) return;

    let frame = 0;

    const recalc = () => {
      const styles = window.getComputedStyle(measure);

      let lineHeight = parseFloat(styles.lineHeight);
      if (Number.isNaN(lineHeight)) {
        lineHeight = parseFloat(styles.fontSize) * 1.2;
      }

      const availableHeight = wrapper.clientHeight;
      const fullTextHeight = measure.scrollHeight;

      const fitLines = Math.max(1, Math.floor((availableHeight + 0.5) / lineHeight));

      const neededLines = Math.max(1, Math.ceil(fullTextHeight / lineHeight));

      setLines(Math.min(fitLines, neededLines));
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(recalc);
    };

    schedule();

    const ro = new ResizeObserver(schedule);
    ro.observe(wrapper);
    ro.observe(measure);

    if (document.fonts?.ready) {
      document.fonts.ready.then(schedule);
    }

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [children]);

  return (
    <div ref={wrapperRef} className="relative h-full w-full overflow-hidden">
      <p
        className={className}
        style={{
          margin: 0,
          width: "100%",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: lines,
          whiteSpace: "normal",
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        }}
      >
        {children}
      </p>

      <p
        ref={measureRef}
        aria-hidden="true"
        className={className}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          margin: 0,
          visibility: "hidden",
          pointerEvents: "none",
          whiteSpace: "normal",
          overflowWrap: "anywhere",
          wordBreak: "break-word",
          zIndex: -1,
        }}
      >
        {children}
      </p>
    </div>
  );
}
