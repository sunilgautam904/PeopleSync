import Link from "next/link";
import { IBreadcrumbProps } from "./types";

/**
 * This component renders a breadcrumb navigation bar for the application, helping users understand their current location within the site hierarchy.
 * It displays the current page name as well as a link to the Dashboard, with styling adjustments for both light and dark modes.
 * The breadcrumb trail is displayed in a responsive layout, adapting between vertical and horizontal arrangements based on screen size.
 * @param {IBreadcrumbProps} props - The properties for the breadcrumb, including the `pageName` to be displayed.
 * @returns {JSX.Element} The breadcrumb navigation containing links and the current page name.
 */
const Breadcrumb = (props: IBreadcrumbProps) => {
  const { pageName } = props;

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
