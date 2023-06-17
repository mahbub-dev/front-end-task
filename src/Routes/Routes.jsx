import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateHero from "../pages/CreateHero";
import Interview from "../pages/Interview";
import Chart from "../pages/Chart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <CreateHero />
            }, {
                path: 'interview',
                element: <Interview />
            }, {
                path: "chart",
                element: <Chart />
            }
        ]
    }
])

export default router