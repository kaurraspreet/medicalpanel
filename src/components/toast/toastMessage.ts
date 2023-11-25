import { writable } from "svelte/store";

const NOTIFICATION_TIMEOUT = 3000;

export type ToastProps = Partial<{
  id: string;
  open: boolean;
  message: string;
  title: string;
  type: "info" | "success" | "danger" | "";
  timeout: number | boolean;
  action: { text: string; act: () => void };
  position: "start" | "center" | "end";
  onClose: () => void;
  showCloseButton: boolean;
}>;

let toastTimeout: NodeJS.Timeout;

const createNotificationStore = () => {
  const { subscribe, update } = writable<ToastProps>({
    id: "",
    open: false,
    message: "",
    title: "",
    type: "",
    timeout: NOTIFICATION_TIMEOUT,
    position: "end",
    showCloseButton: false,
  });

  const send = (patch?: ToastProps) => {
    update((state) => {
      return {
        ...state,
        open: true,
        id: id(),
        ...(patch || {}),
        action: patch?.action || undefined,
        position: patch?.position || "end",
      };
    });
  };

  subscribe((props) => {
    clearTimeout(toastTimeout);

    if (props.open) {
      toastTimeout = setTimeout(
        () => {
          update((state) => {
            return {
              ...state,
              open:
                props.timeout === true || typeof props.timeout !== "boolean"
                  ? false
                  : true,
            };
          });
        },
        typeof props.timeout === "boolean" || !props.timeout
          ? NOTIFICATION_TIMEOUT
          : props.timeout
      );

      return () => {
        clearTimeout(toastTimeout);
      };
    }
  });

  return {
    subscribe,
    update,
    patch: (props: ToastProps) => update((prev) => ({ ...prev, ...props })),
    error: (message: string, patch?: ToastProps) =>
      send({
        message,
        title: "Error",
        type: "danger",
        showCloseButton: true,
        ...patch,
      }),
    info: (message: string, patch?: ToastProps) =>
      send({
        message,
        title: "Information",
        showCloseButton: true,
        type: "info",
        ...patch,
      }),
    success: (message: string, patch?: ToastProps) =>
      send({
        message,
        title: "Successful",
        showCloseButton: true,
        type: "success",
        ...patch,
      }),
  };
};

function id() {
  return "_" + Math.random().toString(36).slice(2, 9);
}

const toast = createNotificationStore();
export { toast };
export default toast;
