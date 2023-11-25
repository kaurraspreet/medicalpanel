<script lang="ts">
  import type { RoutesList } from "$src/utils";
  import SvgIcon from "$src/components/SvgIcon.svelte";

  const mainRoutes: RoutesList[] = [
    {
      name: "Dashboard",
      href: "/",
      icon: "dashboard",
    },
    {
      name: "Appointments",
      href: "/appointments",
      icon: "appointments",
    },
    {
      name: "Customers",
      href: "/customers",
      icon: "users",
    },
    {
      name: "Payments",
      href: "/payments",
      icon: "payments",
    },
  ];

  const otherRoutes: RoutesList[] = [
    {
      name: "Blogs",
      href: "/blogs",
      icon: "blog",
    },
    {
      name: "Comments",
      href: "/comments",
      icon: "comments",
    },
    {
      name: "Profile",
      href: "/profile",
      icon: "profile",
    },
    {
      name: "Logout",
      href: "/logout",
      icon: "logout",
    },
  ];
</script>

<aside
  id="separator-sidebar"
  class=""
  aria-label="Sidebar"
>
<div class=" px-3 py-3 lg:px-5 lg:pl-5 pt-6 flex items-center justify-start rtl:justify-end gap-4">
    <span
      class="flex flex-shrink-0 justify-center items-center w-10 h-10 text-lg font-bold uppercase text-gray-800 bg-white rounded-full"
    >
      C
    </span>
    <span
      class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white"
    >
      Clousor
    </span>
  </div>
  <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
    <div class="flex flex-col space-y-1 font-medium">
      <!-- {mainRoutes.map(({ name, href, icon }) => ( -->
      {#each mainRoutes as { name, href, icon }}
        <a
          {href}
          class="flex items-center p-2 text-white rounded-lg hover:bg-white/25  group"
        >
          <SvgIcon
            name={icon}
            class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white"
          />
          <span class="ms-3">{name}</span>
        </a>
      {/each}
    </div>
    <div
      class="pt-4 mt-4 space-y-1 font-medium border-t border-white/25  flex flex-col"
    >
      {#each otherRoutes as { name, href, icon }}
        <a
          {href}
          class="flex items-center p-2 text-white rounded-lg hover:bg-white/25 group"
        >
          <SvgIcon
            name={icon}
            class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white"
          />
          <span class="ms-3">{name}</span>
        </a>
      {/each}
    </div>
  </div>
</aside>
