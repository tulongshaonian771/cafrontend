import Headbar from "./Headbar";
import Sidebar from "./Sidebar";
import LandingPage from "./landingPage";
import React from "react";
import DefaultSongList from "./DefaultSongList";

function DefaultPage() {

    return (
        <>

            <div className="main-wrapper">
                <div className="header">
                    <Headbar/>
                </div>
                <div className="sidebar" id="sidebar">
                    <Sidebar/>
                </div>

                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            {/* Page header content */}
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <DefaultSongList/>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        {/* Skills content */}
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        {/* Settings content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <p>design © 2023 By <a href="http://www.google.com/">Group4.</a></p>
                    </footer>
                </div>
            </div>
        </>
    );
}
export default DefaultPage;
