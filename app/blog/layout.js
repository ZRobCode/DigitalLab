import { Suspense } from "react";
// import HeaderBlog from "./_assets/components/HeaderBlog";  // Comment out this line if file is missing
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }) {
  return (
    <div>
      <Suspense>
  {/* Removed HeaderBlog */}
</Suspense>

      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}
