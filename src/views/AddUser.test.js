import React from "react";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { renderWithProviders } from "helpers/renderWithThemeProvider";

describe("Form Field", () => {
   it("Renders the component", () => {
      renderWithProviders(
         <>
            <AddUser />
            <Dashboard />
         </>
      );
      fireEvent.change(screen.getByTestId("Nachname:"), { target: { value: "Robin" } });
      fireEvent.change(screen.getByTestId("Teilnahmefrequenz:"), { target: { value: "55%" } });
      fireEvent.change(screen.getByTestId("Durchschnitt:"), { target: { value: "4.5" } });
      fireEvent.click(screen.getByText("Add"));
      screen.getByText("Robin");
   });
});
