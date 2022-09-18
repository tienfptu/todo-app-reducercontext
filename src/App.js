import { useRoutes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

export function App() {

  return useRoutes([
    {
      path: '/',
      element: <TodoPage />
    },
    { path: "login", element: <LoginPage /> },
  ]);
}