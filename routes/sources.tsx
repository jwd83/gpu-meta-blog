const sources = [
  "https://www.pcpartpicker.com/",
  "https://www.techspot.com/article/2667-gpu-pricing-update/",
  "https://www.techpowerup.com/gpu-specs/geforce-rtx-3060-12-gb.c3682",
  "https://www.ebay.com/",
  "https://averagefinder.com/averageFinder.php",
  "https://reddit.com/r/hardwareswap",
  "https://en.wikipedia.org/wiki/GeForce_30_series",
  "https://en.wikipedia.org/wiki/GeForce_20_series",
  "https://en.wikipedia.org/wiki/GeForce_16_series",
  "https://en.wikipedia.org/wiki/GeForce_10_series",
  "https://en.wikipedia.org/wiki/Radeon_RX_6000_series",
];

export default function Sources() {
  return (
    <div class="text-center">
      <h1 class="text-4xl my-4">Sources</h1>
      <ul>
        {sources.map((source) => (
          <li>
            <a href="{source}">{source}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
