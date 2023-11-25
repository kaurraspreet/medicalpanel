<script lang="ts">
  /** external deps */
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  /** internal deps */
  import SvgIcon from "$src/components/SvgIcon.svelte";
  import type { SVGIconProps } from "$src/utils";

  /** props */
  export let validValue: HTMLInputElement["value"] = "";
  export let value: HTMLInputElement["value"] = "";
  export let type: HTMLInputElement["type"] = $$restProps.type || "text";
  export let classes: string = "";
  export let placeholder: string = "";
  export let inputClasses: string = "";
  export let errorText = "";
  export let valid = $$restProps.valid;
  export let touched = false;
  export let key: string | undefined = "";
  export let label: string | undefined = undefined;
  export let useNativeErrorMessage: boolean = false;
  export let errorClass = "";
  // export let hideIcon: boolean = false;
  export let reactiveValidityKey: any = ""; // anytime this value changes it will (enforce) validity re-check
  /** You can use native HTML validations instead. E.g. HTML attributes like required, min, max, maxLength, pattern, minLength etc. But if native validations aren't enough then use this */
  export let validator: any = undefined;
  export let onChange: any = undefined;
  export let hidelabel: boolean = false;
  export let inputType: "text" | "textarea" = "text";
  export let textareaRow: number = 2;

  /** vars */
  let iconName: SVGIconProps["name"] | undefined = undefined;
  const maxLength = /^(?=.{1,30}$)/;
  let focused: boolean = false;
  let inputRef: HTMLInputElement | HTMLTextAreaElement;
  let passwordIsVisible: boolean = false;
  const typeIsPassword = type === "password";
  let showEyeIcon: boolean = true;
  

  /*funs **/
  const dispatch = createEventDispatcher();
  const handleFocus = () => (focused = true);
  const handlePasswordToggle = () => {
    passwordIsVisible = !passwordIsVisible;
    (inputRef as HTMLInputElement).type = passwordIsVisible
      ? "text"
      : "password";
  };
  const handleBlur: svelte.JSX.FormEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (_e) => {
    touched = true;
    focused = false;
  };
  const setValidity = () => {
    valid =
      (validator ? validator(value, key) : true) && inputRef?.checkValidity();

    if (useNativeErrorMessage) {
      errorText = inputRef?.validationMessage;
    }
  };
  const handleInput: svelte.JSX.FormEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const target = e.currentTarget;

    // using a try-catch block here as Safari doesn't support the lookahead regex pattern matching
    try {
      // if backspace or something else is input/pressed
      if (!(e as any).data) {
        if (/\s(-|\/)\s$/.test(target.value)) {
          target.value = target.value.slice(0, -3);
        }
        throw null;
      }

      // prevent any other thing (except a number) from being input
      if (
        label &&
        /card number|expiry( date)?/i.test(label) &&
        !/[0-9]/.test((e as any).data)
      ) {
        target.value = target.value.slice(0, -1);
        throw null;
      }

      switch (true) {
        case label && /card number/i.test(label):
          value =
            target.value.length < 25
              ? target!.value.replace(
                  /\d{4,4}(?!\s)/g,
                  (match) => match + " - "
                )
              : target.value;
          break;
        case label && /expiry( date)?/i.test(label):
          value =
            target.value.length < 7
              ? target!.value.replace(
                  /\d{2,2}(?!\s)/g,
                  (match) => match + " / "
                )
              : target.value;
          break;
      }

      switch (true) {
        // case !!(type === 'number' && $$restProps.max):
        //   if (+target.value > +$$restProps.max) {
        //     target.value = $$restProps.max
        //   }
        //   break;
        case $$restProps.maxlength:
          if (target.value.length > $$restProps.maxlength) {
            target.value = target.value.slice(0, -1);
          }
          break;
      }
    } catch (e) {
      value = target.value;
    }

    if (onChange) onChange(key, value);
  };
  const handleKeyup: svelte.JSX.FormEventHandler<HTMLElement> = (e) =>
    dispatch("keyup", e);

  /** react-ibles */
  $: iconName =
    type === "email" ? "mail" : type === "password" ? "eye-off" : undefined;
  $: showError = !valid && touched;
  $: hasMaxLength = maxLength.test(value);
  $: {
    reactiveValidityKey;
    setTimeout(() => {
      if (value && String(value).trim()) touched = true;
      setValidity();
    });
  }
  $: validValue = valid ? value : "";
</script>

<div>
  <div
    class:!border-red={showError}
    class={`border transition-all duration-500 border-secondary-40 flex  gap-2 rounded-lg ${
      focused ? "border-secondary-80 dark:!border-white" : ""
    } ${classes} ${inputType === "textarea" ? "px-0" : "px-4"}`}
  >
    <slot class="mr-4" name="leftContent" />

    {#if !hidelabel}
      <span
        in:fade
        class="absolute text-xs transition-all duration-500 {!value
          ? 'opacity-0'
          : 'opacity-100'} bg-white -mt-2 -ml-2 px-2 capitalize whitespace-nowrap {showError
          ? 'text-red'
          : focused
          ? 'text-secondary'
          : 'text-secondary-60'}"
      >
        {label || placeholder}
      </span>
    {/if}
    {#if inputType === "text"}
      <input
        class={`w-full py-2 outline-0 bg-transparent [outline:none] ${inputClasses}`}
        bind:value
        on:focus={handleFocus}
        on:blur={handleBlur}
        on:input={handleInput}
        on:keyup={handleKeyup}
        bind:this={inputRef}
        id={key || label}
        {...$$restProps}
        {...{ type }}
        {placeholder}
      />
    {:else if inputType === "textarea"}
      <textarea
        class={`w-full mt-2 pb-2 px-4 outline-0 bg-transparent [outline:none] ${inputClasses}`}
        bind:value
        rows={textareaRow}
        on:focus={handleFocus}
        on:blur={handleBlur}
        on:input={handleInput}
        on:keyup={handleKeyup}
        bind:this={inputRef}
        id={key || label}
        {...$$restProps}
        {...{ type }}
        {placeholder}
      />
    {/if}
    <!-- {#if typeIsPassword && showEyeIcon}
      <button
        on:click={handlePasswordToggle}
        class="group grid place-content-center"
      >
        <SvgIcon
          name="eye-off"
          class="relative w-6 h-6 fill-gray "
        />
      </button>
    {:else if !hideIcon && iconName}
      <div class="group grid place-content-center">
        <SvgIcon
          name={iconName}
          class="relative w-6 h-6 fill-gray-20"
        />
      </div>
    {/if}
     -->
  </div>

  {#key errorText}
    <div
      in:fade={{ duration: 200 }}
      class={`text-xs -mt-4 flex transition-all duration-500 ${
        showError ? "opacity-100" : "opacity-0"
      } items-start pt-0 w-full relative top-5 ${errorClass}`}
    >
      <span
        class="inline-block text-red  rounded-lg w-fit pr-1 truncate hover:whitespace-normal"
      >
        {!String(value)?.trim()
          ? "Input is required."
          : errorText ||
            (typeIsPassword
              ? hasMaxLength
                ? "Please enter an acceptable password."
                : "Password should be 30 characters or less"
              : `Please enter a valid ${label || type}.`)}
      </span>
    </div>
  {/key}
</div>
