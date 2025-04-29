import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="" element={<LandingPage />} />
        </Route>
    )
)

export default router