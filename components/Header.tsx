import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import Cpu from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/cpu.tsx";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "GPUs", href: "/gpu/" },
    { name: "Meta Analysis", href: "/#meta" },
    { name: "Blog", href: "/#posts" },
    { name: "Email", href: "mailto:contact@gpumeta.blog" },
  ];

  return (
    <div class="bg-gray-900 w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <Cpu />
        <div class="text-2xl  ml-1 font-bold">
          GPUMeta.blog
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-300 hover:text-white py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}