<script lang="ts">
  import { browser } from "$app/environment";
  import Navbar from "$src/components/Navbar.svelte";
  import Sidebar from "$src/components/Sidebar.svelte";
  import "$src/app.css";
  import Toast from "$src/components/toast/Toast.svelte";
</script>

<svelte:head>
  <title>Medical Panel</title>
</svelte:head>

<main class="flex">
  <div
    class="w-64 sticky left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-blue"
  >
    <Sidebar />
  </div>

  <div class="flex-1">
    <Navbar />
    <section class="p-4">
      <slot />
      {#if browser}
        <Toast />
      {/if}
    </section>
  </div>
</main>
