import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCity } from "../actions/actions";

class City extends React.Component {
  constructor() {
    super();
    this.input = React.createRef();
  }
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.getCity(this.input.value);
            this.input.value = "";
          }}
        >
          <div className="form-group">
            <input type="text" ref={node => (this.input = node)} />
            <button>get</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getCity }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(City);
