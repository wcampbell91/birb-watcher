import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';
import _ from 'underscore';

import authData from '../../../helpers/data/authData';
import birbData from '../../../helpers/data/birbData';

class NewBirb extends React.Component {
  state = {
    type: '',
    color: '',
    size: '',
    altColor: '',
    wasSleeping: false,
    seenAt: new Date(),
    location: '',
    notes: '',
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  };

  changeColorEvent = (e) => {
    e.preventDefault();
    this.setState({ color: e.target.value });
  };

  changeSizeEvent = (e) => {
    e.preventDefault();
    this.setState({ size: e.target.value });
  };

  changeAltColorEvent = (e) => {
    e.preventDefault();
    this.setState({ altColor: e.target.value });
  };

  changeLocationEvent = (e) => {
    e.preventDefault();
    this.setState({ location: e.target.value });
  };

  changeNotesEvent = (e) => {
    e.preventDefault();
    this.setState({ notes: e.target.value });
  };

  changeSleepEvent = (e) => {
    console.error(e.target);
    e.target.checked
      ? this.setState({ wasSleeping: true })
      : this.setState({ wasSleeping: false });
  };

  seenAtEvent = (seenAt) => {
    this.setState({ seenAt });
  };

  saveBirb = (e) => {
    e.preventDefault();
    const keysIWant = ['type', 'color', 'size', 'altColor', 'wasSleeping', 'seenAt', 'location', 'notes'];

    const newBirb = _.pick(this.state, keysIWant);
    newBirb.uid = authData.getUid();

    birbData.addBirb(newBirb)
      .then((res) => {
        console.warn(res, 'new birb worked!');
        this.props.history.push(`/birbs/${res.data.name}`);
      })
      .catch((err) => console.error('new birb broke', err));
  };

  render() {
    const {
      type,
      color,
      size,
      altColor,
      seenAt,
      wasSleeping,
      location,
      notes,
    } = this.state;
    return (
      <form className="col-6 offset-3">
      <div className="form-group">
        <label htmlFor="birbType">Birb Type</label>
        <input
          type="text"
          className="form-control"
          id="birbType"
          placeholder="Enter Birb Type"
          value={ type }
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
          value={ color }
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
          value={ size }
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
          value={ altColor }
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
          value={ location }
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
          value={ notes }
          onChange={this.changeNotesEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbSeenAt">Seen At: </label>
        <DatePicker
          selected={ seenAt }
          onChange={this.seenAtEvent}
          showTimeSelect
        />
      </div>
      <div className="form-check">
        <input
        type="checkbox"
        className="form-check-input mr-4 mb-3"
        id="wasSleeping"
        value={ wasSleeping }
        onChange={this.changeSleepEvent}
        />
        <label class="form-check-label" htmlFor="wasSleeping">Was Sleeping?</label>
      </div>
      <button type="submit" className="btn-btn-secondary" onClick={this.saveBirb}>Save Birb</button>
    </form>
    );
  }
}

export default NewBirb;
