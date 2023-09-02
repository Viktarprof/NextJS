import '@/styles/globals.scss'
import type { AppProps } from 'next/app';
// import { Titillium_Web } from "next/font/google";

// // Вызываем загрузку шрифта и сохраняем результат в константе
// const titillium = Titillium_Web({
//     weight: ['200', '300', '400', '600', '700', '900'],
//     subsets: ['latin'],
//     variable: '--titillium'
    
// });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
