import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
// Создайте страницы блогов, где в зависимости от того зарегестрировались
// вы или нет вы будете видеть те или иные блоги ( для зарегестрированных юзеров больше блогов и больше описание)
// Страница должна
