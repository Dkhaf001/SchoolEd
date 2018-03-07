import React from 'react';


class Logintest extends React.Component {
  state = {
    email: '',
    password: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    });
    const { token, refreshToken } = response.data.login;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }

  render() {
    return (
      <div>
        <input
          name='email'
          placeholder='Email'
          onChange={e => this.onChange(e)}
          value={this.state.email} />
        <input
          name='password'
          placeholder='Password'
          type='password'
          onChange={e => this.onChange(e)}
          value={this.state.password} />
        <br />
        <button onClick={() => this.onSubmit()} type="primary">Login</button>
      </div>
    );
  }
};

export default Logintest;