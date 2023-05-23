export default function Hero() {
  return (
    <div
      id="meta"
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white my-8"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/hero-bg.webp');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">Spring 2023 GPU Meta Analysis</h1>
        <p class="text-xl max-w-lg text-blue-100">
          Performance scores relative to the RTX 3060, new pricing from PCPartPicker and eBay.
        </p>
      </div>

      <div>
        <a
          href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8eUfDHhRemU05YdBC1gDAkAYJAAdfZBJgJneyVq8zfjUifhKcQ-dgym3ZPq9hFu8PKeSlYz92SasM/pubhtml"
          class="block mt-4 text-blue-500 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          See The List
        </a>
      </div>
    </div>
  );
}
