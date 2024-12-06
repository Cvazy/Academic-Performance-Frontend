import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from "app/utils";
import { Header } from "widgets/Header";
import { MobileMenu } from "features";

describe("App test", () => {
  test("render header", () => {
    renderWithReduxAndRouter({
      component: <Header />,
    });

    const linkElement = screen.getByTestId("header");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    renderWithReduxAndRouter({
      component: <MobileMenu visible={false} />,
    });

    const mainPageLink = screen.getByTestId("Home");
    const tablesPageLink = screen.getByTestId("Tables");
    const graphsPageLink = screen.getByTestId("Graphs");
    expect(mainPageLink).toBeInTheDocument();
    expect(tablesPageLink).toBeInTheDocument();
    expect(graphsPageLink).toBeInTheDocument();
  });
});
