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
  class="fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
  aria-label="Sidebar"
>
  <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    <div class="flex flex-col space-y-1 font-medium">
      <!-- {mainRoutes.map(({ name, href, icon }) => ( -->
      {#each mainRoutes as { name, href, icon }}
        <a
          {href}
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
      class="pt-4 mt-4 space-y-1 font-medium border-t border-gray-200 dark:border-gray-700 flex flex-col"
    >
      {#each otherRoutes as { name, href, icon }}
        <a
          {href}
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
