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
          <div class="bg-gray-800 p-4 rounded-xl">
            <h1 class="text-6xl font-bold text-center mb-8">
              Blog
            </h1>
            <article class="my-6 text-xl bg-gray-700 p-4 rounded-xl">
              <h1 class="text-4xl font-bold">
                New GPUs Page
              </h1>
              <h2>
                <em>2023-06-18</em>
              </h2>
              <p class="my-6">
                We have just added the{" "}
                <a href="/gpu" class="text-blue-100">/gpu</a>{" "}
                page. It lists every GPU we currently index in the meta report
                and any specifications we have documented for them.
              </p>
            </article>
            <article class="my-6 text-xl bg-gray-700 p-4 rounded-xl">
              <h1 class="text-4xl font-bold">
                Our First GPU Meta Analysis
              </h1>
              <h2>
                <em>2023-05-23</em>
              </h2>
              <p class="my-6">
                The GPU Meta report is a spreadsheet that combines a snapshots
                of market conditions with benchmarks alongside the manufacturer
                specifications to give a relative performance score and value
                scores for each GPU as well as serve as a knowledge base for GPU
                information.
              </p>

              <h3 class="my-3 text-2xl font-bold">
                Baseline GPU
              </h3>
              <p class="my-6">
                The Baseline GPU is used to establish a root of comparison. The
                Baseline GPU is the NVIDIA RTX 3060. The RTX 3060 is a good
                baseline GPU because it is a modern GPU that is widely available
                and is one of the more popular GPUs on the market of a recent,
                if not current generation.
              </p>
              <p class="my-6">
                The Baseline GPU always has a relative performance and relative
                value score of 100. If a GPU has a relative performance of 200,
                it is roughly twice as fast as the Baseline GPU. If it has a
                relative value score of 200 it is roughly twice as good of a
                value as the Baseline GPU in terms of approximate performance
                per dollar.
              </p>

              <h3 class="my-3 text-2xl font-bold">
                Relative Performance (RP)
              </h3>
              <p class="my-6">
                The Relative Performance score goes from 0 to ♾️ and gives you a
                sense of how good of a performer a GPU is. A score of 100 means
                that the GPU is exactly as good as the Baseline GPU. A score of
                200 means
              </p>

              <h3 class="my-3 text-2xl font-bold">
                Relative Value (RV)
              </h3>
              <p class="my-6">
                The Relative Value similarly score goes from 0 to ♾️ and gives
                you a sense of how good of a value a GPU is. A score of 100
                means that the GPU is exactly as good of a value as the Baseline
                GPU. A score of 200 means that the GPU is twice as good of a
                value as the Baseline GPU.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
