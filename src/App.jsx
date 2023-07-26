import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import { Career, Company, Contacts, Funt, Junnat, Layout, Lmerlin, Main, News, Nothing, Objects, Otziv, Technika, Usluga, Uslugi, Vakansiy } from "./pages/Routes/Routes";
import Loader from "./components/Loader/Loader";

const wifi = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader/>}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader/>}>
            <Nothing />
          </Suspense>
        ),
      },
      {
        path: "/objects",
        element: (
          <Suspense fallback={<Loader/>}>
            <Objects />
          </Suspense>
        ),
      },
      {
        path: "/uslugi",
        element: (
          <Suspense fallback={<Loader/>}>
            <Uslugi/>
          </Suspense>
        ),
      },
      {
        path: "/carreer",
        element: (
          <Suspense fallback={<Loader/>}>
            <Career/>
          </Suspense>
        ),
      },
      {
        path: "/company",
        element: (
          <Suspense fallback={<Loader/>}>
            <Company/>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader/>}>
            <Contacts/>
          </Suspense>
        ),
      },
      {
        path: "/news",
        element: (
          <Suspense fallback={<Loader/>}>
            <News/>
          </Suspense>
        ),
      },
      {
        path: "/otziv",
        element: (
          <Suspense fallback={<Loader/>}>
            <Otziv/>
          </Suspense>
        ),
      },
      {
        path: "/tech",
        element: (
          <Suspense fallback={<Loader/>}>
            <Technika/>
          </Suspense>
        ),
      },
      {
        path: "/usluga",
        element: (
          <Suspense fallback={<Loader/>}>
            <Usluga/>
          </Suspense>
        ),
      },
      {
        path: "/junnat",
        element: (
          <Suspense fallback={<Loader/>}>
            <Junnat/>
          </Suspense>
        ),
      },
      {
        path: "/funt",
        element: (
          <Suspense fallback={<Loader/>}>
            <Funt/>
          </Suspense>
        ),
      },
      {
        path: "/lmerlin",
        element: (
          <Suspense fallback={<Loader/>}>
            <Lmerlin/>
          </Suspense>
        ),
      },
      {
        path: "/vakansiy",
        element: (
          <Suspense fallback={<Loader/>}>
            <Vakansiy/>
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={wifi} />
    </>
  );
}

export default App;
