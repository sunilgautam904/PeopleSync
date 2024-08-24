"use client";
import Header from "@/common/components/header";
import Sidebar from "@/common/components/sidebar";
import React, { useState } from "react";

/**
 * The DefaultLayout component serves as the main layout structure for the application, incorporating a sidebar and a header.
 * It manages the state of the sidebar's visibility, allowing it to toggle open and closed, which is particularly useful for responsive design.
 * The layout is built using Tailwind CSS, ensuring a flexible and visually consistent layout across different screen sizes.
 * The `children` prop represents the main content area that is dynamically rendered within the layout, wrapped by the header and sidebar.
 * This component enhances the overall application by providing a cohesive structure for navigation and content presentation.
 * @param {React.ReactNode} children - The content to be displayed within the layout.
 * @returns {JSX.Element} The main layout component with a sidebar, header, and content area.
 */
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col lg:ml-72.5">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
