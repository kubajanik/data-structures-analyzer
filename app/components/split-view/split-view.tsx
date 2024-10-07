import React, { useState, useRef, useEffect } from "react"

interface SplitViewProps {
  leftComponent: React.ReactNode
  rightComponent: React.ReactNode
}

export const SplitView = ({
  leftComponent,
  rightComponent,
}: SplitViewProps) => {
  const [dividerPosition, setDividerPosition] = useState(50);
  const isResizing = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
  }

  const handleMouseUp = () => {
    isResizing.current = false;
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current && isResizing.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newDividerPosition =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setDividerPosition(newDividerPosition);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    };
  }, []);

  return (
    <div ref={containerRef} className="flex w-full h-full">
      <div style={{ width: `${dividerPosition}%` }}>{leftComponent}</div>
      <div
        onMouseDown={handleMouseDown}
        className="w-1 cursor-col-resize bg-neutral-100"
      />
      <div style={{ width: `${100 - dividerPosition}%` }}>{rightComponent}</div>
    </div>
  )
}
