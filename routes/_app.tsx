// https://fresh.deno.dev/docs/concepts/app-wrapper

import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

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
      <body class="bg-black text-gray-200">
        <div class="max-w-[1000px] mx-auto block bg-gray-900">
          <h1 class="text-center text-7xl font-black">
            <a href="/">GPU Meta</a>
          </h1>
          <nav>
            <ul class="flex justify-center text-2xl text-gray-400">
              <li class="px-6 py-4 hover:text-white transition-colors">
                <a href="/#meta">Meta Analysis</a>
              </li>
              <li class="px-6 py-4 hover:text-white transition-colors">
                <a href="/#posts">Blog</a>
              </li>
              <li class="px-6 py-4 hover:text-white transition-colors">
                <a href="mailto:contact@gpumeta.blog">Email</a>
              </li>
            </ul>
          </nav>

          <Component />
        </div>
      </body>
    </>
  );
}
