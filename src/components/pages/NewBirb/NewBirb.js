import React from 'react';
import authData from '../../../helpers/data/authData';

class NewBirb extends React.Component {
  state = {
    birb: {},
  }

  typeRef = React.createRef;

  colorRef = React.createRef;

  sizeRef = React.createRef

  altColorRef = React.createRef;

  sleepRef = React.createRef;

  locationRef = React.createRef;

  notesRef = React.createRef;

  createBirb = (e) => {
    e.preventDefault();
    const { birb } = this.state;

    const newBirb = {
      type: this.typeRef.current.value,
      color: this.colorRef.current.value,
      size: this.sizeRef.current.value,
      altColor: this.altColorRer.current.value,
      // wasSleeping: this.sleepRef.current.value,
      location: this.locationRef.current.value,
      notes: this.notesRef.current.value,
      uid: authData.getUid(),
    };

    console.error(newBirb);
    this.setState({ birb: newBirb });
  };

  render() {
    return (
      <form className="col-6 offset-3">
      <div className="form-group">
        <label htmlFor="birbType">Birb Type</label>
        <input
          type="text"
          className="form-control"
          id="birbType"
          placeholder="Enter Birb Type"
          ref={this.typeRef}
          // value={title}
          // onChange={this.changeTypeEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbColor">Birb Color</label>
        <input
          type="text"
          className="form-control"
          id="birbColor"
          placeholder="Enter Birb Color"
          ref={this.colorRef}
          // value={color}
          // onChange={this.changeColorEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbSize">Birb Size</label>
        <input
          type="text"
          className="form-control"
          id="birbSize"
          placeholder="Enter Birb Size"
          ref={this.sizeRef}
          // value={color}
          // onChange={this.changeColorEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbAltColor">Alt. Color</label>
        <input
          type="text"
          className="form-control"
          id="birbAltColor"
          placeholder="Enter Birb Alt Color"
          ref={this.altColorRef}
          // value={imageUrl}
          // onChange={this.changeAltColorEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbLocation">Location</label>
        <input
          type="text"
          className="form-control"
          id="birbLocation"
          placeholder="Enter Birb Location"
          ref={this.locationRef}
          // value={imageUrl}
          // onChange={this.changeLocationEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbNotes">Notes</label>
        <input
          type="text"
          className="form-control"
          id="birbNotes"
          placeholder="Enter Birb Notes"
          ref={this.notesRef}
          // value={imageUrl}
          // onChange={this.changeNotesEvent}
        />
      </div>
      <div className="form-check">
        <input
        type="checkbox"
        className="form-check-input"
        id="wasSleeping"
        // ref={this.sleepRef}
        // onChange={this.changeSleepEvent}
        />
        <label class="form-check-label" htmlFor="wasSleeping">Was Sleeping?</label>
      </div>
      <button type="submit" className="btn-btn-secondary" onClick={this.createBirb}>Submit</button>
    </form>
    );
  }
}

export default NewBirb;
