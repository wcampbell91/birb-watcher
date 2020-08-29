import React from 'react';
// import PropTypes from 'prop-types';

import birbShape from '../../../helpers/props/birbShape';

class BirbCards extends React.Component {
  static propTypes = {
    birb: birbShape.birbShape,
  }

  render() {
    const { birb } = this.props;
    return (
      <div className="card mt-3 bg-dark text-light">
        <div className="card-header text-uppercase">
        <h1>{birb.type}</h1>
        </div>
        <div className="card-body">
          <h3>Notes: </h3>
          <h4>{birb.notes}</h4>
        </div>
        <ul className="list-group list-group-flush text-left">
          <li className="list-group-item bg-dark text-light">
            <h4>Color:</h4>
            <h5 className="text-center">{birb.color}</h5>
          </li>
          <li className="list-group-item bg-dark text-light">
            <h4>Alternate Color:</h4>
            <h5 className="text-center">{birb.altColor}</h5>
          </li>
          <li className="list-group-item bg-dark text-light">
            <h4>Size:</h4>
            <h5 className="text-center">{birb.size}</h5>
          </li>
          <li className="list-group-item bg-dark text-light">
            <h4>Location:</h4>
            <h5 className="text-center">{birb.location}</h5>
          </li>
        </ul>
        <div className="card-text-muted">Last Seen: {birb.seenAt}</div>
      </div>
    );
  }
}

export default BirbCards;
