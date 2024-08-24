/**
 * The Loader component displays a centered, full-screen spinner to indicate loading states.
 * The spinner features a circular animation and adapts to light or dark mode based on the active theme.
 * @returns {JSX.Element} The loading spinner component.
 */
export default function Loader(): JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
}
