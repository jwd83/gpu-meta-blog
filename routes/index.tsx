// Fresh imports
import type { Handlers, PageProps } from "$fresh/server.ts";

// Third party imports
// import { html, tokens } from "https://deno.land/x/rusty_markdown/mod.ts";

// Local imports
import { Post } from "$app/utils/types.ts";
import { getCurrentDate } from "$app/utils/functions.ts";
import Hero from "$app/components/Hero.tsx";

const post: Post = {
  date: getCurrentDate(),
  title: "First Analysis of the Data",
  body: "",
};

export default function Home({ data }: PageProps<Post>) {
  return (
    <>
      <div class="p-4 mx-auto max-w-screen-md">
        <Hero />
        <div id="posts">
          <h1 class="text-4xl font-bold">
            First Analysis of the Data
          </h1>
          <h2>
            <em>2023-05-23</em>
          </h2>
          <article class="my-6 text-2xl">
            The GPUMeta spreadsheet records snapshots of market and benchmark
            conditions. This combines GPU benchmark scores and market condition
            data to produce a 'value score' for each graphics card. Benchmark data
            provides performance metrics, while market data considers the GPU's
            current price and availability. The resultant value score is intended
            to help readers determine a balance between performance and
            cost-effectiveness. Please note that this tool serves as a guide and
            does not replace a comprehensive evaluation based on individual
            use-cases and budgets.
          </article>
        </div>
      </div>
    </>
  );
}
