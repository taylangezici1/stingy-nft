import Sidebar from "@/collections/Sidebar/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles";

const font = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <main style={{ display: "flex" }} className={`${font.className}`}>
          <Sidebar />
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}
