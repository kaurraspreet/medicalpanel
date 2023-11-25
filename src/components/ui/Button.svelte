<script lang="ts">
  /** internal deps */
  import SvgIcon from "../SvgIcon.svelte";
  import type { SVGIconProps } from "$src/utils";
  /** props */
  export let text: string;
  export let variant: "primary" | "secondary" | "tertiary" | "plain" =
    "primary";
  export let iconProps: SVGIconProps | undefined = undefined;
  export let size: "lg" | "md" | "sm" = "md";
  export let isRounded: boolean = false;
  export let disabled: boolean = false;
  export let isLoading: boolean = false;
  export let classes: string =
    "h-fit inline-block rounded-lg bg-blue px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base opacity-90 transition-all duration-500 hover:opacity-100 disabled:opacity-60";
</script>

<button
  class="{variant} {size} {$$restProps.class} {classes}"
  class:!rounded-full={isRounded}
  disabled={isLoading || disabled}
  class:opacity-60={isLoading || disabled}
  on:click
>
  {#if isLoading}
    <SvgIcon name="loader" class="h-6 fill-white" />
  {:else}
    {text}
  {/if}

  {#if iconProps}
    <SvgIcon {...iconProps} />
  {/if}
</button>



