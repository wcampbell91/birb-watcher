import React from 'react';
import birbData from '../../../helpers/data/birbData';

class SingleBirb extends React.Component {
  state = {
    birb: {},
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;
    birbData.getBirbById(birbId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error('get single birb broke', err));
  }

  deleteBirbEvent = (e) => {
    e.preventDefault();
    const { birbId } = this.props.match.params;

    birbData.deleteBirb(birbId)
      .then((res) => {
        this.props.history.push('/home');
        console.error(res);
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { birb } = this.state;
    return (
    <div className="justify-content-center">
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
            <h4 className="text-center">{birb.color}</h4>
          </li>
          <li className="list-group-item bg-dark text-light">
            <h4>Alternate Color:</h4>
            <h4 className="text-center">{birb.altColor}</h4>
          </li>
          <li className="list-group-item bg-dark text-light">
            <h4>Size:</h4>
            <h4 className="text-center">{birb.size}</h4>
          </li>
          <li className="list-group-item bg-dark text-light">
            <h4>Location:</h4>
            <h4 className="text-center">{birb.location}</h4>
          </li>
        </ul>
        <div className="card-text-muted">Last Seen: {birb.seenAt}</div>
        <button className="btn-danger ml-2" onClick={this.deleteBirbEvent}><i className="fas fa-lg fa-trash-alt"></i></button>
      </div>
    </div>
    );
  }
}

export default SingleBirb;
