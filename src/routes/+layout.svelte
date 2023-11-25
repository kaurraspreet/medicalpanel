<script lang="ts">
  import { browser } from "$app/environment";
  import Navbar from "$src/components/Navbar.svelte";
  import Sidebar from "$src/components/Sidebar.svelte";
  import "../app.css";

</script>

<svelte:head>
  <title>Medical Panel</title>
</svelte:head>
<Navbar />
<Sidebar />
<slot />
{#if browser}
  <!-- <Toast /> -->
{/if}
