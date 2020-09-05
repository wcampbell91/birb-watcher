import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import birbData from '../../../helpers/data/birbData';

class EditBirb extends React.Component {
  state = {
    birb: {},
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;
    birbData.getBirbById(birbId)
      .then((res) => {
        const birb = res.data;
        birb.seenAt = new Date(birb.seenAt);
        this.setState({ birb });
      })
      .catch((err) => console.error(err));
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.type = e.target.value;
    this.setState({ birb });
  }

  changeColorEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.color = e.target.value;
    this.setState({ birb });
  };

  changeSizeEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.size = e.target.value;
    this.setState({ size: e.target.value });
  };

  changeAltColorEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.altColor = e.target.value;
    this.setState({ birb });
  };

  changeLocationEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.location = e.target.value;
    this.setState({ birb });
  };

  changeNotesEvent = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    birb.notes = e.target.value;
    this.setState({ birb });
  };

  changeSleepEvent = (e) => {
    console.error(e.target);
    const { birb } = this.state;
    e.target.checked
      ? birb.wasSleeping = true
      : birb.wasSleeping = false;
    this.setState({ birb });
  };

  seenAtEvent = (seenAt) => {
    const { birb } = this.state;
    birb.seenAt = seenAt;
    this.setState({ birb });
  };

  updateBirb = (e) => {
    e.preventDefault();
    const { birb } = this.state;
    const { birbId } = this.props.match.params;
    console.warn(birb, birbId);
    const newBirb = birb;

    birbData.updateBirb(birbId, newBirb)
      .then((res) => {
        console.error(res);
        this.props.history.push(`/birbs/${birbId}`);
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { birb } = this.state;
    return (
      <form className="col-6 offset-3">
      <div className="form-group">
        <label htmlFor="birbType">Birb Type</label>
        <input
          type="text"
          className="form-control"
          id="birbType"
          placeholder="Enter Birb Type"
          value={ birb.type }
          onChange={this.changeTypeEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbColor">Birb Color</label>
        <input
          type="text"
          className="form-control"
          id="birbColor"
          placeholder="Enter Birb Color"
          value={ birb.color }
          onChange={this.changeColorEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbSize">Birb Size</label>
        <input
          type="text"
          className="form-control"
          id="birbSize"
          placeholder="Enter Birb Size"
          value={ birb.size }
          onChange={this.changeSizeEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbAltColor">Alt. Color</label>
        <input
          type="text"
          className="form-control"
          id="birbAltColor"
          placeholder="Enter Birb Alt Color"
          value={ birb.altColor }
          onChange={this.changeAltColorEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbLocation">Location</label>
        <input
          type="text"
          className="form-control"
          id="birbLocation"
          placeholder="Enter Birb Location"
          value={ birb.location }
          onChange={this.changeLocationEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbNotes">Notes</label>
        <input
          type="text"
          className="form-control"
          id="birbNotes"
          placeholder="Enter Birb Notes"
          value={ birb.notes }
          onChange={this.changeNotesEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbSeenAt">Seen At: </label>
        <DatePicker
          selected={ birb.seenAt }
          onChange={this.seenAtEvent}
          showTimeSelect
        />
      </div>
      <div className="form-check">
        <input
        type="checkbox"
        className="form-check-input mr-4 mb-3"
        id="wasSleeping"
        value={ birb.wasSleeping }
        onChange={this.changeSleepEvent}
        />
        <label className="form-check-label" htmlFor="wasSleeping">Was Sleeping?</label>
      </div>
      <button type="submit" className="btn-btn-secondary" onClick={this.updateBirb}>Save Birb</button>
    </form>
    );
  }
}

export default EditBirb;
