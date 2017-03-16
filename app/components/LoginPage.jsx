import React from 'react';

export var LoginPage = React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

      <div className="row">
        <div className="columns small-centered small-10 medium-6 large-4">
          <div className="callout callout-auth">
            <h3>Login</h3>
            <p>
              Login wiht GitHub account below.
            </p>
            <button className="button">Login With GitHub</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
});

export default LoginPage;
