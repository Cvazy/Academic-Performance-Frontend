import { RouteProps } from "react-router-dom";
import {
  AuthPage,
  GraphsPage,
  MainPage,
  NotFoundPage,
  TablesPage,
  StudentPage,
} from "pages";

export enum AppRoutes {
  MAIN = "main",
  GRAPHS = "graphs",
  TABLES = "tables",
  STUDENT = "student",
  LOGIN = "login",
  REGISTER = "register",
  NOT_FOUND = "not_found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.GRAPHS]: "/graphs",
  [AppRoutes.TABLES]: "/tables",
  [AppRoutes.STUDENT]: "/student",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.REGISTER]: "/register",
  [AppRoutes.NOT_FOUND]: "*",
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },

  [AppRoutes.GRAPHS]: {
    path: RoutePaths.graphs,
    element: <GraphsPage />,
  },

  [AppRoutes.TABLES]: {
    path: RoutePaths.tables,
    element: <TablesPage />,
  },

  [AppRoutes.STUDENT]: {
    path: RoutePaths.student,
    element: <StudentPage />,
  },

  [AppRoutes.LOGIN]: {
    path: RoutePaths.login,
    element: <AuthPage />,
  },

  [AppRoutes.REGISTER]: {
    path: RoutePaths.register,
    element: <AuthPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
