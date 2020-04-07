import React from 'react';
import { InfoConsumer } from '../Context';
import styled from 'styled-components';
import {Link} from 'react-router-dom' 

function Details(){

    return (
      <InfoConsumer>
        {value => {
          const {
            headerDetailTitle,
            headerDetailSubTitle,
            description,
            resume
          } = value.infoDetails;
      
          return (
            <React.Fragment>
              <HeaderDetails className="conteiner-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerDetailTitle}</h1>
                <h4 className="display-5">{headerDetailSubTitle}</h4>
                <p className="details">{description}</p>
                <Link to={resume} target="_blank" download>
                  <button type="button" className="btn">Download</button>
                </Link>
                {/* Social Icons */}
                <div className="container mt-5 details">
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <i className="fab fa-facebook-f" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-twitter" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-reddit" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-whatsapp" />
                    </div>
                  </div>
                </div>
              </HeaderDetails>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
}

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;
  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }
  h4 {
    color: var(--mainDark);
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 2%;
    color: var(--mainDark);
  }
  button {
    color: var(--mainWhite);
    background: var(--mainDark);
    margin-bottom: 8%;
  }
  button:hover {
    background: var(--mainBlue)
  }
  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }
  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .nav-item {
    height: 18.75rem;
  }
  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
