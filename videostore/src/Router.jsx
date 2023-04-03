import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage, {inventoryLoader} from "./components/HomePage";
import DetailsPanel, {videoLoader} from "./components/DetailsPanel";
import Error from "./components/Error";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                loader: inventoryLoader
            },
            {
                path: 'video/:videoId',
                element: <DetailsPanel/>,
                loader: videoLoader
            },
            {
                path: 'video/undefined',
                element: <h1>video id is undefined</h1>
            }
        ]
    }
])

export default router;