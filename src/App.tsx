import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
// import Homepage from "./components/main/Homepage.tsx";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={"hello"} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
