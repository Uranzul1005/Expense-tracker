import "@/styles/globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
