import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-dark fixed-bottom position-fixed pt-5 text-white" data-pg-collapsed>
                <div className="container">
                    <div className="pb-3 pt-3 text-center">
                        <hr className="border-secondary mt-0"/>
                        <p className="mb-0">Copyright &copy; 2025 ChatPDF</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;