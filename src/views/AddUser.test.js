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
      fireEvent.change(screen.getByTestId("Fakultät:"), { target: { value: "55%" } });
      fireEvent.change(screen.getByTestId("Semester:"), { target: { value: "4.5" } });
      fireEvent.click(screen.getByTestId("Zustimmung:"));
      fireEvent.click(screen.getByText("Add"));
      screen.getByText("Robin");
   });
});
//
it("Prevents adding new user if the consent is not checked", () => {
   renderWithProviders(
      <>
         <AddUser />
         <Dashboard />
      </>
   );
   fireEvent.change(screen.getByTestId("Nachname:"), { target: { value: "Robin" } });
   fireEvent.change(screen.getByTestId("Fakultät:"), { target: { value: "55%" } });
   fireEvent.change(screen.getByTestId("Semester:"), { target: { value: "4.5" } });
   fireEvent.click(screen.getByTestId("Zustimmung:"));
   const newUser = screen.queryByText("Robin");
   expect(newUser).not.toBeInTheDocument();
});
