import React, { useRef, useEffect } from "react";

interface IClickOutsideProps {
  children: React.ReactNode;
  exceptionRef?: React.RefObject<HTMLElement>;
  onClick: () => void;
  className?: string;
}

/**
 * The ClickOutside component detects clicks outside of its wrapped element and triggers a callback function when such clicks occur.
 * It optionally allows specifying exceptions (elements that should not trigger the callback when clicked) via the `exceptionRef` prop.
 * The component uses a ref to track the element and listens for `mousedown` events on the document to determine clicks outside.
 * @param props - props of the component.
 * @returns {JSX.Element} The wrapper component that handles click detection.
 */
export default function ClickOutside(props: IClickOutsideProps): JSX.Element {
  const { children, exceptionRef, onClick, className } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickListener = (event: MouseEvent) => {
      let clickedInside: null | boolean = false;
      if (exceptionRef) {
        clickedInside =
          (wrapperRef.current &&
            wrapperRef.current.contains(event.target as Node)) ||
          (exceptionRef.current && exceptionRef.current === event.target) ||
          (exceptionRef.current &&
            exceptionRef.current.contains(event.target as Node));
      } else {
        clickedInside =
          wrapperRef.current &&
          wrapperRef.current.contains(event.target as Node);
      }

      if (!clickedInside) onClick();
    };

    document.addEventListener("mousedown", handleClickListener);

    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={`${className || ""}`}>
      {children}
    </div>
  );
}
