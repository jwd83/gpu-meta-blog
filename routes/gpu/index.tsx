// import the gpu data from /data/gpu_list.js
import { gpu_list } from "$app/data/gpu_list.js";

export default function GPUsPage() {
  return (
    <>
      <h1 class="text-center text-4xl my-4">GPUs</h1>
      <table class="table-auto mx-auto">
        <thead>
          <tr>
            <th>Model</th>
            <th>Architecture</th>
            <th>Launch MSRP</th>
          </tr>
        </thead>
        <tbody>
          {gpu_list.map((gpu) => (
            <tr>
              <td>
                <a href={`/gpu/${gpu.Model.replaceAll(" ", "_")}`}>
                  {gpu.Model}
                </a>
              </td>
              <td class="text-center">{gpu.Architecture}</td>
              <td class="text-right">{gpu["Launch MSRP"]}</td>
              <td class="text-right">{gpu["Launch MSRP"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
