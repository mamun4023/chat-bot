import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import {reduxStore} from './redux/store'

export default function App() {
    return (
        <Provider store={reduxStore}> 
        <BrowserRouter>
            <ToastContainer />
            <Routes />
        </BrowserRouter>
        </Provider>
    );
}