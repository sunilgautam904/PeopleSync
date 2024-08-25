import UserProfile from "@/features/profile/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page | PeopleSync",
  description: "This is Next.js Profile Page",
};

/**
 * This component renders the profile page for the PeopleSync application, displaying user profile information.
 * The metadata is configured to provide a title and description for the page,
 * enhancing SEO and user experience. The page includes the `UserProfile` component which handles the display of user details.
 * @returns {JSX.Element} The profile page containing the `UserProfile` component.
 */
export default function Profile(): JSX.Element {
  return <UserProfile />;
}
