import React, { Component } from 'react';
import { InfoConsumer } from './Context';
import { Link } from 'react-router-dom';

class Info extends Component {
  render() {
    const {
      headerTitle,
      headerSubTitle,
      headerText,
      img
    } = this.props.item;

    return (
      <InfoConsumer>
        {value => (
          <div className="col mb-2">
            <div className="card border-primary col-md-4 mx-auto">
              <img src={img} alt={headerTitle} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title text-uppercase">{headerTitle}</h3>
                <h5 className="card-title">{headerSubTitle}</h5>
                <p className="card-text">{headerText}</p>
              </div>
              <div className="card-footer bg-transparent border-primary">
                <Link to="/details" className="btn btn-outline-dark text-uppercase">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default Info;