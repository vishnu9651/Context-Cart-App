import { Route, Routes } from "react-router-dom";
import {Cart} from "./Cart";

import {Home} from "./Home";
import {PageNotFound} from "./PageNotFound";
import {Products} from "./Products";
import {AboutUsPage} from "./AboutUsPage";
import {FAQ} from "./FAQ";
import {Login} from "./Login";
import {Cloths} from "./Cloths";
import {Electronics} from "./Electronics";
import {Jewellery} from "./Jewellery";
// import {PrivateRoute} from "../PrivateRoute/PrivateRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
function AllRoutes(){


    return (
        <div>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutus" element={<AboutUsPage />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/products" element={<Products />}></Route>
    <Route path="*" element={<PageNotFound />} />
    <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
    <Route path="/login" element={<Login />}/>
    <Route path="/electronics" element={<Electronics />} />
    <Route path="/cloths" element={<Cloths />} />
    <Route path="/jewellery" element={<Jewellery />} />
</Routes>

        </div>
    )
}
export default AllRoutes