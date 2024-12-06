import React, { Suspense, useEffect } from "react";
import AppRouter from "app/providers/Routers/ui/AppRouter";
import { Loader } from "shared/ui";
import "./index.scss";
import { Header } from "widgets";
import { RelevantTimeBlock } from "features";
import { useMatch } from "react-router-dom";
import { useNavigate } from "react-router";

function App() {
  const isAuthPage = useMatch("/login");
  const isRegisterPage = useMatch("/register");

  const navigate = useNavigate();
  const isAuth = localStorage.getItem("user");

  useEffect(() => {
    if (!isAuth && !isRegisterPage) {
      navigate("/login");
    }
  }, [isAuth, isRegisterPage, navigate]);

  return (
    <Suspense fallback={<Loader />}>
      <div
        className={
          "flex flex-col items-center bg-[#d3d3d369] min-h-dvh w-full h-max relative"
        }
      >
        <Header />

        <main className={"flex flex-grow w-full"} data-testid={"main"}>
          <div className={"flex justify-center w-full h-auto"}>
            <div className={"max-w-[1440px] px-4 w-full h-full md:px-7"}>
              <div className={"flex flex-col gap-12 w-full h-full"}>
                <div
                  className={`flex flex-col gap-7 w-full h-full ${!isAuthPage && !isRegisterPage ? "py-14" : ""}`}
                >
                  {!isAuthPage && !isRegisterPage && (
                    <div
                      className={"flex items-center justify-end gap-5 w-full"}
                    >
                      <RelevantTimeBlock />
                    </div>
                  )}

                  <AppRouter />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
