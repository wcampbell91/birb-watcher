import React from 'react';

class NewBirb extends React.Component {
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
          // value={title}
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
          // value={color}
          onChange={this.changeColorEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birbAltColor">Alt. Color</label>
        <input
          type="text"
          className="form-control"
          id="birbAltColor"
          placeholder="Enter Birb Alt Color"
          // value={imageUrl}
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
          // value={imageUrl}
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
          // value={imageUrl}
          onChange={this.changeNotesEvent}
        />
      </div>
      <div class="form-check">
        <input type="checkbox" className="form-check-input" id="wasSleeping"/>
        <label class="form-check-label" htmlFor="wasSleeping">Was Sleeping?</label>
      </div>
      <button type="submit" className="btn-btn-secondary">Submit</button>
    </form>
    );
  }
}

export default NewBirb;
