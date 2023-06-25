import Sidebar from "@/collections/Sidebar/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={`${inter.className}`}>
        <Sidebar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
