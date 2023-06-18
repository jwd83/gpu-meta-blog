import { PageProps } from "$fresh/server.ts";
import { gpu_list } from "$app/data/gpu_list.js";

function showGpuSpecs(gpu_name: string) {
  // load the object from gpu_list that matches the gpu_name
  const gpu = gpu_list.find((gpu) => gpu.Model === gpu_name);

  if (gpu === undefined) {
    return <p>GPU not found</p>;
  }

  return (
    <>
      <h1 class="text-center text-4xl my-4">
        {gpu.Model} Specifications
      </h1>

      <table class="mx-auto my-8">
        <tbody>
          {/* loop through each property of gpu and display it */}
          {Object.entries(gpu).map(([key, value]) => {
            // check that the value is not an empty string
            if (value !== "") {
              return (
                <tr>
                  <td>{key}</td>
                  <td class="text-right">{value}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}

export default function GPUSpecsPage(props: PageProps) {
  let { gpu_name } = props.params;
  gpu_name = gpu_name.replace(/_/g, " ");

  // check if the gpu_name is in the gpu_list Model field
  // if not, return a 404 style page
  if (!gpu_list.some((gpu) => gpu.Model === gpu_name)) {
    return (
      <div class="my-8">
        <h1 class="text-center text-8xl">404</h1>
        <p class="text-center text-3xl">GPU not found</p>
      </div>
    );
  }

  return showGpuSpecs(gpu_name);
}
