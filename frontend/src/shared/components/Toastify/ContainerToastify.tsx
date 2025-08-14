import { ToastContainer } from "react-toastify";

export function ContainerToast() {
  return (
    <ToastContainer
      position="top-right"
      closeOnClick={true}
      autoClose={6000}
      draggable
      newestOnTop={true}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover={false}
      theme="colored"
    />
  );
}
