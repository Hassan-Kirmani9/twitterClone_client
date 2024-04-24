import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import {GoogleOAuthProvider} from "@react-oauth/google"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient
export default function App({ Component, pageProps }: AppProps) {
  return (  
    <QueryClientProvider client={queryClient}>
   <GoogleOAuthProvider clientId="718432197118-r5b5vj8565or6aru17o1300vrsg6beug.apps.googleusercontent.com">
     <Component {...pageProps} />
     <Toaster/>
     <ReactQueryDevtools/>
     </GoogleOAuthProvider>;
     </QueryClientProvider>
)}
