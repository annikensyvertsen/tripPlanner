import React, { createContext, useState } from "react";

export const AuthenticatedUserContext: any = createContext({});

interface Props {
  children: JSX.Element[] | JSX.Element;
}
export const AuthenticatedUserProvider = (props: Props) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {React.Children.map(props.children, (child, index) => {
        return child;
      })}
    </AuthenticatedUserContext.Provider>
  );
};
