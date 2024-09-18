import React, { Suspense } from "react";
import AppRouter from "app/providers/Routers/ui/AppRouter";
import { Loader } from "shared/ui";
import "./index.css";
import { Header } from "widgets";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div
        className={
          "flex flex-col items-center bg-white min-h-dvh w-full h-max relative"
        }
      >
        <Header />

        <main className={"flex items-center flex-grow w-full"}>
          <div className={"flex justify-center w-full h-full"}>
            <div className={"max-w-[1440px] px-4 w-full h-full md:px-7"}>
              <AppRouter />
            </div>
          </div>
        </main>
      </div>
    </Suspense>
  );
}

export default App;
