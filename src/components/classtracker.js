import React, { Component } from 'react';

export default class ClassTracker extends Component {
  render() {
    return (
      <div>
        <h1 style={{ 'text-align': 'center' }}>Class Tracker</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 class-tracker-col">
              <h2>Login</h2>
              <form>
                <div class="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-md-6 class-tracker-col">
              <h2>Signup</h2>
              <form>
                <div class="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

