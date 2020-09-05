import React from 'react';
import { Link } from 'react-router-dom';

import birbData from '../../../helpers/data/birbData';
import authData from '../../../helpers/data/authData';
import BirbCards from '../../shared/BirbCards/BirbCards';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  getBirbs = () => {
    birbData.getBirbsByUid(authData.getUid())
      .then((res) => this.setState({ birbs: res }))
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getBirbs();
  }

  editBirbEvent = (e) => {
    e.preventDefault();
    const birbId = 'birb1000';
    this.props.history.push(`/edit/${birbId}`);
  };

  deleteBirb = (birbId) => {
    birbData.deleteBirb(birbId)
      .then((res) => {
        this.getBirbs();
        console.error(res);
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { birbs } = this.state;

    const birbCards = birbs.map((birb) => <BirbCards key={birb.id} birb={birb} deleteBirb={this.deleteBirb}/>);

    return (
      <div className="Home mt-2">
        <h1>Home!</h1>
        <button className="btn btn-dark mr-2" onClick={this.editBirbEvent}>Edit A Birb</button>
          <Link to="/new" className="btn btn-dark ">New Birb</Link>
        <div className="card-columns">
          { birbCards }
        </div>
      </div>
    );
  }
}

export default Home;
