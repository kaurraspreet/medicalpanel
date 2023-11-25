<script lang="ts">
  import SvgIcon from "$src/components/SvgIcon.svelte";
  const profileMenu = [
    {
      name: "Dashboard",
      href: "/",
      icon: "dashboard",
    },
  ];
</script>

<nav class=" bg-white shadow">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-end">
      <SvgIcon
        name="notification"
        class="flex-shrink-0 w-6 h-6 transition duration-75"
      />
    </div>
  </div>
</nav>
