import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import birbShape from '../../../helpers/props/birbShape';

class BirbCards extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
    deleteBirb: PropTypes.func.isRequired,
  }

  deleteBirbEvent = (e) => {
    e.preventDefault();
    const { birb, deleteBirb } = this.props;
    const birbId = birb.id;

    console.warn(birbId);

    deleteBirb(birbId);
  };

  render() {
    const { birb } = this.props;

    const singleBirbLink = `/birbs/${birb.id}`;

    const editLink = `/edit/${birb.id}`;
    return (
      <div className="card mt-3 bg-dark text-light">
        <div className="card-body">
          <h1>{birb.type}</h1>
          <Link to={singleBirbLink} className="btn btn-warning mr-2"><i className="fas fa-binoculars fa-lg" ></i></Link>
          <Link to={editLink} className="btn btn-primary"><i className="far fa-edit fa-lg"></i></Link>
          <button className="btn-danger ml-2" onClick={this.deleteBirbEvent}><i className="fas fa-lg fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default BirbCards;
