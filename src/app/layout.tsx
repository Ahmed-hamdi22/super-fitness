import { Outlet } from "react-router-dom";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Chat from "@/components/common/gemini-ai";
import AutoScrollBanner from "@/components/common/auto-scroll";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/context";

export default function RootLayout() {
  return (
    <>
      {/* Providers */}
      <Providers>
        {/* Header */}
        <main className="bg-white">
        <Header />

        {/* Main content */}
          {/* Outlet */}
          <Outlet />

        {/* Toaster */}
        <Toaster position="top-center" />

        {/* Scroll banner */}
        <AutoScrollBanner />

        {/* Chatbot */}
        <Chat />

        {/* Footer */}
        <Footer />
        </main>
      </Providers>
    </>
  );
}
