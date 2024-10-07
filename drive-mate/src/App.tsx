import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <GlobalStyles />
          <Routes>
            <Route index element={<AppLayout />}></Route>
          </Routes>
        </Router>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            style: {
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
              fontSize: "18px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
            error: {
              duration: 5000,
            },
            success: {
              duration: 3000,
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
