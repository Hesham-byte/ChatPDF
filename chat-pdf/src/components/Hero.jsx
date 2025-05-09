import React from 'react';
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <>
            <section
                className="background-cover bg-dark min-vh-100 pb-5 pt-5 text-center text-white"
                style={{
                    backgroundSize :"cover",
                    backgroundImage: "url('https://images.unsplash.com/photo-1623276527153-fa38c1616b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDJ8fHBkZnxlbnwwfHx8fDE3NDY2MDc4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080')"
                }}
            >
                <div className="container pb-5 pt-5">
                    <div className="pb-5 pt-5 row">
                        <div className="col-lg-9 col-xl-8 ms-auto me-auto pb-5 pt-5">
                            <h1 className="display-4 fw-bold mb-3">Chat With Your PDF Now</h1>
                            <Link to="upload" className="btn btn-primary pe-3 ps-3">
                                Get It Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;