import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TripContext, TripContextProvider } from "./useContext/TripContext";

import App from "./App";

export { TripContext };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <TripContextProvider>
        <App />
      </TripContextProvider>
    </BrowserRouter>
  </StrictMode>
);
