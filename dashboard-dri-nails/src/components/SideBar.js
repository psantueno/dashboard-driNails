import React from 'react';
import image from '../assets/images/logo-Dri.jpeg';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="Dri Nails"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item2">
                    <div className="nav-link2">
                        {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
                        <span>Dashboard</span></div>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>General</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                {/* <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-boxes"></i>
                        <span>Productos (TBD)</span></a>
                </li> */}

                {/*<!-- Nav Item - Tables -->*/}
                {/* <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-user"></i>
                        <span>Clientes (TBD)</span></a>
                </li> */}
                

                {/* <!-- Divider -->
                <hr className="sidebar-divider d-none d-md-block"/> */}
            </ul>
            
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;