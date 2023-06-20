// import the gpu data from /data/gpu_list.js
import { gpu_list } from "$app/data/gpu_list.js";

const max_width = 100;

function get_field_max(field: string): number {
  let max = 0;

  for (let i = 0; i < gpu_list.length; i++) {
    const val = parseInt(gpu_list[i][field]);

    if (val > max) {
      max = val;
    }
  }

  return max;
}

function price_new(msrp: string, recent_new: string): string {
  if (recent_new === "") {
    return msrp;
  }

  if (msrp === "") {
    return recent_new;
  }

  return recent_new;
}

export default function GPUsPage() {
  const max_gpu_perf = get_field_max("Relative Performance");
  const max_new_rv = get_field_max("Relative Value New");
  const max_tdp = get_field_max("TDP (W)");
  const max_efficiency = get_field_max("Efficiency");

  return (
    <>
      <h1 class="text-center text-4xl my-4">GPUs</h1>
      <h2 class="text-center text-2xl my-4">Efficiency Chart</h2>
      <div class="text-center">
        View Our Other Charts<br></br>
        <a href="/gpu" class="text-blue-500">Performance &amp; Value</a>
        {" | "}
        <a href="/gpu/efficiency" class="text-blue-500">Efficiency</a>
      </div>

      <table class="table-auto mx-auto pt-4">
        <thead>
          <tr>
            <th class="p-4 text-6xl">Model</th>
            <th class="p-4">
              Performance %<br />
              Relative to 3060
            </th>
            <th class="p-4">
              TDP (W)
            </th>
            <th class="p-4">
              Relative Performance<br />% per Watt vs 3060
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
              <td class="text-left">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAJ/ElAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  height="17"
                  width={Math.round(
                    parseInt(gpu["Relative Performance"]) / max_gpu_perf *
                      max_width,
                  )}
                  style="height: 17px;"
                  class="inline-block"
                />{" "}
                {gpu["Relative Performance"]}
              </td>
              <td class="text-left">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAJ/ElAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  height="17"
                  width={Math.round(
                    parseInt(gpu["TDP (W)"]) / max_tdp *
                      max_width,
                  )}
                  style="height: 17px;"
                  class="inline-block"
                />{" "}
                {gpu["TDP (W)"]}
              </td>
              <td>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAJ/ElAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                  height="17"
                  width={Math.round(
                    parseInt(gpu["Efficiency"]) / max_efficiency *
                      max_width,
                  )}
                  style="height: 17px;"
                  class="inline-block ml-2"
                />{" "}
                {gpu["Efficiency"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
