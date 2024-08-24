import UserSettings from "@/features/settings/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setting Page | PeopleSync",
  description: "This is Next.js Profile Page",
};

/**
 * This component renders the settings page for the PeopleSync application, showcasing user settings options.
 * The metadata is set to provide a title and description for the page, enhancing SEO and user experience.
 * The page includes the `UserSettings` component, which allows users to configure their preferences and settings.
 * @returns {JSX.Element} The settings page containing the `UserSettings` component.
 */
const Settings = () => {
  return <UserSettings />;
};

export default Settings;
