import { Toaster } from "sonner";
import Header from "./components/Header/Header";
import RoutesComponent from "./router/Routes";

function App() {
  return (
    <>
      <Header />
      <RoutesComponent />
      <Toaster
        position="top-right"
        closeButton
        toastOptions={{
          style: {
            background: "var(--dark-accent)",
            border: "var(--dark-accent)",
            color: "var(--secondary)",
          },
          classNames: {
            closeButton: "closeButton",
          },
        }}
      />
    </>
  );
}

export default App;
