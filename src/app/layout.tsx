import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Chat from "@/components/common/gemini-ai";
import AutoScrollBanner from "@/components/common/auto-scroll";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* React Query Developer tools */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <AutoScrollBanner />
        <Chat />
        <Footer />
      </>
    </QueryClientProvider>
  );
}
