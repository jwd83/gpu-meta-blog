// import the gpu data from /data/gpu_list.js
import { gpu_list } from "$app/data/gpu_list.js";

const max_width = 100;

function get_max_gpu_relative_performance(): number {
  // find the maximum relative performance in the gpu_list
  let max_gpu_perf = 0;

  for (let i = 0; i < gpu_list.length; i++) {
    const gpu_perf = parseInt(gpu_list[i]["Relative Performance"]);

    if (gpu_perf > max_gpu_perf) {
      max_gpu_perf = gpu_perf;
    }
  }

  return max_gpu_perf;
}

export default function GPUsPage() {
  const max_gpu_perf = get_max_gpu_relative_performance();

  return (
    <>
      <h1 class="text-center text-4xl my-4">GPUs</h1>
      <table class="table-auto mx-auto">
        <thead>
          <tr>
            <th class="p-4 text-6xl">Model</th>
            <th class="p-4">
              Relative Performance<br />% vs. RTX 3060
            </th>
            <th class="p-4 text-2xl">
              Launch<br />MSRP
            </th>
            <th class="p-4 text-2xl">
              Recent<br />New
            </th>
            <th class="p-4 text-2xl">
              Recent<br />Used
            </th>
          </tr>
        </thead>
        <tbody>
          {gpu_list.map((gpu) => (
            <tr class="odd:bg-gray-800 hover:bg-gray-600 transition-colors">
              <td>
                <a href={`/gpu/${gpu.Model.replaceAll(" ", "_")}`}>
                  {gpu.Model}
                </a>
              </td>
              {/* <td class="text-center">{gpu.Architecture}</td> */}
              {/* <td class="text-center"></td> */}
              <td class="text-left">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAJ/ElAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  height="10"
                  width={Math.round(
                    parseInt(gpu["Relative Performance"]) / max_gpu_perf *
                      max_width,
                  )}
                  style="height: 10px;"
                  class="inline-block"
                />{" "}
                {gpu["Relative Performance"]}
              </td>
              <td class="text-right">{gpu["Launch MSRP"]}</td>
              <td class="text-right">{gpu["Recent New Pricing"]}</td>
              <td class="text-right">{gpu["Recent Used Pricing"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
