import { GlobalStyles } from "./styles/GlobalStyles";
import { UserContextProvider } from "./contexts/UserContext";
import { App } from "./App";

export function CommentsFigma() {
  return (
    <UserContextProvider>
      <GlobalStyles />
      <App />
    </UserContextProvider>
  );
}
