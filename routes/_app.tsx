// https://fresh.deno.dev/docs/concepts/app-wrapper

import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>GPUMeta.Blog</title>
      </Head>
      <body class="bg-black text-gray-200">
        <div class="max-w-[1000px] mx-auto block bg-gray-900">
          <h1 class="text-center text-7xl font-bold">
            <a href="">GPU Meta</a>
          </h1>
          <nav>
            <ul class="flex justify-center text-2xl text-gray-400">
              <li class="px-4 py-2">
                <a href="/#meta">Meta Analysis</a>
              </li>
              <li class="px-4 py-2">
                <a href="/#posts">Posts</a>
              </li>
              <li class="px-4 py-2">
                <a href="mailto:contact@gpumeta.blog">Contact</a>
              </li>
            </ul>
          </nav>
          
            <Component />
          
        </div>
      </body>
    </>
  );
}
