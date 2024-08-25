import Dashboard from "@/common/components/Dashboard";
import DefaultLayout from "@/common/components/layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | PeopleSync",
  description: "This is the Dashboard page.",
};

export default async function DashboardPage() {
  return (
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  );
}
