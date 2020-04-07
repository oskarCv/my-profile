import React from 'react'
import styled from 'styled-components';
function Footer() {
    return (
        <FooterContainer className="main-footer mt-5">
            <div className="footer-middle">
            <div className ="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>About</h4>
                        <p>
                            This page is the easy way for me to share my profile.<br/>
                            you may feel free to reach me by any of the channels I've provided in the contact section.
                        </p>
                    </div>
                </div>
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} Oscar Manuel Chavez Villalvazo - Profile app - All Rights Reserved </p>
            </div>
            </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle{
        background:var(--mainDark);
        padding-top: 2rem;
        color: var(--mainWhite);
    }
`;
