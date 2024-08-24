import SignUPForm from "@/features/auth/components/sign-up-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignUp Page | PeopleSync",
  description: "This is Next.js SignUp Page",
};

/**
 * This component renders the sign-up page for the registration.
 * The metadata is set to provide a title and description for the page,
 * improving SEO and accessibility. The sign-in form is styled using Tailwind CSS.
 * @returns {JSX.Element} The sign-in page containing the `SignInForm` component.
 */
export default function SignUp() {
  return <SignUPForm />;
}
