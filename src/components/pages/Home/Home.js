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
    console.error(authData.getUid());
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

  render() {
    const { birbs } = this.state;

    const birbCards = birbs.map((birb) => <BirbCards key={birb.id} birb={birb}/>);
    return (
      <div className="Home">
        <h2>Home!</h2>
        <button className="btn btn-dark" onClick={this.editBirbEvent}>Edit A Birb</button>
          <Link to="/new">New Birb</Link>
          <Link to="/birbs/birb123312">Specific Birb</Link>
        <div className="card-columns">
          { birbCards }
        </div>
      </div>
    );
  }
}

export default Home;
