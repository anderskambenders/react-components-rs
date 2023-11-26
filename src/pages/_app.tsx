import '@/styles/globals.css';
import '../components/search/search.css';
import '../components/pagination/pagination.css';
import '../components/list-result/search-result.css';
import '../components/card-detail/card.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
