import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/footer";
import Chat from "@/components/common/gemini-ai";
import AutoScrollBanner from "@/components/common/auto-scroll";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/context";

export default function RootLayout() {
  return (
    <>
      {/* Providers */}
      <Providers>
        {/* Main content */}
        <main className="">

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