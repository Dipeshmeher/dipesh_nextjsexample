import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Navbar from "../Common/Navbar";
const Layout = (props) => {
    const { children, footerstatus } = props
    return (
        <div className="container-fluid">
            {true ? (
                <div>
                    <Header />
                    {<Navbar />}
                    {children}
                    {!footerstatus && <Footer />}

                </div>
            ) : (
                <div>
                    <Header />
                    {<Navbar />}
                    {children}
                    {!footerstatus && <Footer />}
                </div>
            )}
        </div>


    )
}
export default Layout