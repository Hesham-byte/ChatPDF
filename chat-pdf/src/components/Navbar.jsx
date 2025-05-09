import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="bg-white navbar navbar-expand-lg navbar-light py-lg-1" data-pg-collapsed>
                <div className="container"><Link className="fw-bold navbar-brand text-primary text-uppercase"
                                              to="home">chatpdf</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;