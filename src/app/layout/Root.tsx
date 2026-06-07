import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* This component fixes the scrolling issue instantly */}
      <ScrollRestoration />
      
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}