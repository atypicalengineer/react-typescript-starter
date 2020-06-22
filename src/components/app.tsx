import * as React from "react";

export interface AppProps {
  name: string;
}

export const App: React.FunctionComponent<AppProps> = ({
  name,
}): React.ReactElement | null => {
  return (
    <div>
      <h1>Hello {name}! This is a test.</h1>
    </div>
  );
};
