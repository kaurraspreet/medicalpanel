<script lang="ts">
  import TextInput from "$src/components/ui/TextInput.svelte";
  import Button from "$src/components/ui/Button.svelte";
  import toast from "$src/components/toast/toastMessage";

  /** props */
  export let disabled: boolean = true;

  /** vars */
  let formData = {
    name: "",
    password: "",
  };

  /** funcs */
  /** lifecycles */
  const onSubmit = async () => {
    toast.success("Logged In successfully !!.");

    // try {
    //   const response = await axios.post("/api/contact", formData);
    //   console.log("response", response);
    //   if (response.status) {
    //     console.log("status success");
    //     toast.success(
    //       "Thank you for reaching out! Your message has been successfully submitted."
    //     );
    //   } else {
    //     toast.error("Oops! Something went wrong. Please try again later.");
    //   }
    // } catch {
    //   toast.error("An unexpected error occurred. Please try again later.");
    // }
    formData = {
      name: "",
      password: "",
    };
  };

  /** react-ibles */
  $: disabled = !(!!formData?.password && !!formData?.name);
</script>

<section class="bg-white">
  <div
    class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  >
    <a
      href="/"
      class="flex items-center mb-6 text-2xl font-semibold text-gray-900 gap-3"
    >
      <span
        class="flex flex-shrink-0 justify-center items-center w-10 h-10 text-lg font-bold uppercase text-white bg-blue rounded-full"
      >
        C
      </span>
      Clousor
    </a>
    <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">
      <div class="px-8 py-12 space-y-6">
        <h1 class="text-4xl font-bold leading-tight tracking-tight text-gray">
          Sign in to your account
        </h1>

        <form on:submit|preventDefault={onSubmit} class="space-y-6">
          <TextInput
            bind:value={formData.name}
            placeholder="Username"
            lg
            classes="bg-gray-20 border-none !rounded"
          />

          <TextInput
            type="password"
            showEyeIcon={false}
            bind:value={formData.password}
            placeholder="password"
            lg
            classes="bg-gray-20 border-none !rounded"
          />

          <div class="flex items-center justify-between">
            <a href="/" class="text-sm font-medium text-blue hover:underline"
              >Forgot password?</a
            >
          </div>

          <div class="flex justify-center w-full">
            <Button
              text="Submit"
              type="submit"
              class="w-fit"
              variant="plain"
              {disabled}
            />
          </div>
          <p class="text-sm font-light text-gray">
            Don’t have an account yet? <a
              href="/"
              class="font-medium text-blue hover:underline">Contact Us</a
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
