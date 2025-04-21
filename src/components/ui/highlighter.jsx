"use client";
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export default function Highlighter({
  children,
  action = "highlight",

  // Default pink color
  color = "#ffd1dc",
}) {
  const elementRef = useRef(null);
  const annotationRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const annotation = annotate(elementRef.current, {
        type: action === "circle" ? "circle" : "highlight",
        color: color,
        multiline: true,
        padding: action === "circle" ? 8 : 2,
        iterations: 2, // More iterations for a natural effect
        animationDuration: 500,
      });

      annotationRef.current = annotation;
      annotation.show();
    }

    return () => {
      annotationRef.current?.remove();
    };
  }, [action, color, elementRef.current]); // Added elementRef.current dependency

  return (
    <span ref={elementRef} className="inline-block relative bg-transparent">
      {children}
    </span>
  );
}
