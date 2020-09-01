import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import birbShape from '../../../helpers/props/birbShape';

class BirbCards extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;

    const singleBirbLink = `/birbs/${birb.id}`;

    const editLink = `/edit/${birb.id}`;
    return (
      <div className="card mt-3 bg-dark text-light">
        <div className="card-body">
          <h1>{birb.type}</h1>
          <Link to={singleBirbLink} className="btn-warning mr-3"><i className="fas fa-binoculars fa-lg" ></i></Link>
          <Link to={editLink} className="btn-primary"><i className="far fa-edit fa-lg"></i></Link>
        </div>
      </div>
    );
  }
}

export default BirbCards;
