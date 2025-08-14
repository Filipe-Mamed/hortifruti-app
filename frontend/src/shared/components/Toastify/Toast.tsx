import { toast, Slide } from "react-toastify";
import type { ToastPosition, ToastTransition } from "react-toastify";

type ToastType = "success" | "error" | "warn" | "info";

interface ShowToastifyProps {
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme?: string;
  transition?: ToastTransition;
}

export function Toast({
  message,
  type = "info",
  position = "top-right",
  autoClose = 6000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = false,
  draggable = true,
  progress = undefined,
  theme = "colored",
  transition = Slide,
}: ShowToastifyProps) {
  toast[type](message, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    theme,
    transition,
  });
}
