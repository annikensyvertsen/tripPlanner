import React from "react";

import { AuthenticatedUserProvider } from "./AuthenticatedUserProvider";
import RootNavigator from "./RootNavigator";

/**
 * Wrap all providers here
 */

export default function Routes() {
  console.log("Hallo");
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
