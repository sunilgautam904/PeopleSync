import SignInForm from "@/features/auth/components/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignIn Page | PeopleSync",
  description: "This is Next.js Signin Page",
};

/**
 * This component renders the sign-in page for the application which handles the authentication process by collecting user credentials.
 * The metadata is set to provide a title and description for the page,
 * improving SEO and accessibility. The sign-in form is styled using Tailwind CSS.
 * @returns {JSX.Element} The sign-in page containing the `SignInForm` component.
 */
export default function SignIn() {
  return <SignInForm />;
}
