// import the gpu data from /data/gpu_list.js
import { gpu_list } from "$app/data/gpu_list.js";

export default function GPUsPage() {
  return (
    <>
      <h1 class="text-center text-4xl my-4">GPUs</h1>
      <ul class="text-center">
        {gpu_list.map((gpu) => (
          <li>
            <a href={`/gpu/${gpu.Model.replaceAll(" ", "_")}`}>{gpu.Model}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
