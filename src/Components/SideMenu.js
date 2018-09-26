import React, {Component} from 'react';


export default class SideMenu extends Component {
    render() {
        return (
          

                <div className="col-lg-2">
                    <div className="container d-flex first align-items-center justify-content-center">
                        <div className="logo d-flex align-items-center justify-content-center">LS</div>
                        <div className="heading">LEADSENSE</div>
                    </div>
                    <div className="border container"></div>
                    <div className=" mt-3 d-flex align-items-center justify-content-center">
                    <ul className="navbar-nav list ">
                        <li className="fa fa-dashboard py-2 px-2"><span className="menu">DASHBOARD</span></li>
                        <li className="fa fa-line-chart py-2 px-2"><span className="menu">ANALYTICS</span></li>
                        <li className="fa fa-money py-2 px-2"><span className="menu">PAID MARKETING</span></li>
                        <li className="fa fa-search py-2 px-2"><span className="menu">SEO</span></li>
                        <li className="fa fa-file-text py-2 px-2"><span className="menu">CONTENT</span></li>
                        <li className="fa fa-grav py-2 px-2"><span className="menu">LEAD NINJA</span></li>
                    </ul>
                </div>


                </div>
             
             

        )
    }
}