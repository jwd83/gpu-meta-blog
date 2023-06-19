// import the gpu data from /data/gpu_list.js
import { gpu_list } from "$app/data/gpu_list.js";

export default function GPUsPage() {
  return (
    <>
      <h1 class="text-center text-4xl my-4">GPUs</h1>
      <table class="table-auto mx-auto">
        <thead>
          <tr>
            <th class="p-4">Model</th>
            <th class="p-4">Architecture</th>
            <th class="p-4">Launch MSRP</th>
            <th class="p-4">Recent New</th>
            <th class="p-4">Recent Used</th>
          </tr>
        </thead>
        <tbody>
          {gpu_list.map((gpu) => (
            <tr class="odd:bg-gray-800 hover:bg-gray-600">
              <td>
                <a href={`/gpu/${gpu.Model.replaceAll(" ", "_")}`}>
                  {gpu.Model}
                </a>
              </td>
              <td class="text-center">{gpu.Architecture}</td>
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
