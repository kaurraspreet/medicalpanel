<script lang="ts">
  import { browser } from "$app/environment";
  import "$src/app.css";
  import Toast from "$src/components/toast/Toast.svelte";
</script>

<svelte:head>
  <title>Medical Panel</title>
</svelte:head>

<main>
  <slot />
  {#if browser}
    <Toast />
  {/if}
</main>
