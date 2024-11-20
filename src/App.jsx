import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTicket from './Components/CreateTicket/CreateTicket';
const routes = createBrowserRouter([
  {path:'' , element:<Layout/> , children: [
    {path:'' , element:<Home/>},
    {path:'home' , element:<Home/>},
    {path:'contact' , element:<Contact/>},
    {path:'createTicket' , element:<CreateTicket/>},
  ]}
])

function App() {
  return <>
    <RouterProvider router={routes}/>
    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <Contact/> */}
  </>
}

export default App;
