import { render, RenderResult } from "@testing-library/react";
import { ReactNode } from "react";
import { createReduxStore } from "app/providers";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

interface RenderWithRouterProps {
  component: ReactNode;
  initialEntries?: string[];
}

export const renderWithReduxAndRouter = ({
  component,
  initialEntries,
}: RenderWithRouterProps): RenderResult => {
  const store = createReduxStore();

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries || ["/"]}>
        {component}
      </MemoryRouter>
    </Provider>,
  );
};
