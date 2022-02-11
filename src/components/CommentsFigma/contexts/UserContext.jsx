import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [name, setName] = useState("Been");
  const [avatarUrl, setAvatarUrl] = useState(
    "https://avatar-endpoint.herokuapp.com/api/"
  );
  const [at, setAt] = useState("@uidesign");

  function onChangeName(value) {
    setName(value);
  }

  function onChangeAt(value) {
    setAt(value);
  }

  function onChangeUrl(value) {
    setAvatarUrl(value);
  }

  return (
    <UserContext.Provider
      value={{
        name,
        at,
        avatarUrl,
        onChangeName,
        onChangeAt,
        onChangeUrl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
