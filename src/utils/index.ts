import type { ComponentProps } from "svelte";
import type SvgIcon from "$src/components/SvgIcon.svelte";

export type SVGIconProps = ComponentProps<SvgIcon>;

export interface RoutesList {
    name:string;
    icon:string;
    href:string;
  }