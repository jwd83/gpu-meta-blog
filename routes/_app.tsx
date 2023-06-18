// https://fresh.deno.dev/docs/concepts/app-wrapper

import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Footer from "$app/components/Footer.tsx";
import Header from "$app/components/Header.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>GPU Meta</title>
        <meta
          name="description"
          content="Discover the best GPU for your needs with the GPU Meta report. Our spreadsheet combines market snapshots, benchmarks, and manufacturer specifications to provide relative performance and value scores for each GPU. Use our knowledge base to find the perfect GPU for your next project"
        />
      </Head>
      <body class="bg-gradient-to-l from-green-800 via-red-800 to-blue-900 p-4 text-gray-200">
        <div class="max-w-[1000px] mx-auto block bg-gray-900">
          <Header active="" />
          <Component />
          <Footer children="{}" />
        </div>
      </body>
    </>
  );
}
