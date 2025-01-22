import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Activities from "../page/Activities";
import CypherAI from "../page/CypherAI";
import Incidents from "../page/Incidents";
import MyDocuments from "../page/MyDocuments";
import Locations from "../page/Locations";

const   router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/incidents",
                element:<Incidents></Incidents>
            },
            {
                path:"/locations",
                element:<Locations></Locations>

            },
            {
                path:"/activites",
                element:<Activities></Activities>
            },
            {
                path:"/document",
                element:<MyDocuments></MyDocuments>

            },
            {
                path:"/cypher",
                element:<CypherAI></CypherAI>

            }
        ]
    }
])
export default router