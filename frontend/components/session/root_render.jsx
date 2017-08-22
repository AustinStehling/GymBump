import React from 'react';
import { Route, Redirect } from 'react-router';
import { withRouter } from 'react-router';

class RootRender extends React.Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    <Redirect to="/signup" />
  }

  render() {
    return (
      <div className="render-div">
        <div className="render-div-2">
          <h1>Test</h1>
          <img className="bg-img" src={window.staticImages.crossfitBackground} />
          <button className="render-button" onClick={() => this.props.history.push('/signup')}>Sign Up</button>
        </div>
      </div>
    );
  }
}


export default RootRender;
