import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.city,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <form 
        className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2"
        onSubmit={this.props.handleSubmit}>
        <input 
          className="form-control form-control-sm mr-3 w-75"
          type="text" placeholder="City" onChange={this.handleChange} 
          aria-label="City"/>
        
      </form>
    );
  }
}

export default SearchBar;