import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from "app/utils";
import { AuthPage } from "pages";
import { RegisterForm } from "features/Registration";
import { LoginForm } from "features/AuthByLogin";

describe("App test", () => {
  test("renders login page without authorization", async () => {
    renderWithReduxAndRouter({
      component: <AuthPage />,
    });

    const authTitle = await screen.findByTestId("auth-title");
    expect(authTitle).toBeInTheDocument();
  });

  test("check login button render", async () => {
    renderWithReduxAndRouter({
      component: <LoginForm />,
    });

    const loginButton = await screen.findByTestId("loginButton");
    expect(loginButton).toBeInTheDocument();
  });

  test("check login button disabled", async () => {
    renderWithReduxAndRouter({
      component: <LoginForm />,
    });

    const loginButton = await screen.findByTestId("loginButton");
    expect(loginButton).toHaveAttribute("disabled");
  });

  test("check register button render", async () => {
    renderWithReduxAndRouter({
      component: <LoginForm />,
    });

    const loginButton = await screen.findByTestId("loginButton");
    expect(loginButton).toBeInTheDocument();
  });

  test("check register button disabled", async () => {
    renderWithReduxAndRouter({
      component: <RegisterForm />,
    });

    const registerButton = await screen.findByTestId("registerButton");
    expect(registerButton).toHaveAttribute("disabled");
  });
});
