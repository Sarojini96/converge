// src/components/bootstrap-carousel.component.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Home';
import BootstrapNavbar from './Components/Navbar';
import SearchPage from './Components/SearchBar';
import FooterPage from './Components/footer'
import { MDBContainer } from
"mdbreact";
import 'mdbreact/dist/css/mdb.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    render() {
        return (
            <div> <HomePage/>
            <FooterPage/></div>
           
        )
    };
}

export default App;
