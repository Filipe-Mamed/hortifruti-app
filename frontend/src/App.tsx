import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "./Global.styled";
import { ContainerToast } from "./shared/components/Toastify";
import { AuthProvider } from "./shared/contexts/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ContainerToast />
        <AppRoutes />
        <GlobalStyle />
      </AuthProvider>
    </>
  );
}

export default App;
