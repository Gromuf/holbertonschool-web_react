import WithLogging from "../HOC/WithLogging";
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    }
  }

  handleChangeEmail = (event) => {
    const email = event.target.value;
    this.setState({ email }, this.validateForm);
  };

  handleChangePassword = (event) => {
    const password = event.target.value;
    this.setState({ password }, this.validateForm);
  };

  validateForm = () => {
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email) && password.length >= 8;
    this.setState({ enableSubmit: isValid });
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="h-full mt-5 md:ml-5 pt-5 border-t-2 border-main">
        <p className="mb-4">Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className="flex flex-col md:flex-row md:items-center gap-4 items-start">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full md:w-auto">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={this.handleChangeEmail}
                className="border border-gray-400 rounded px-2 py-1 w-full md:w-auto focus:outline-main"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full md:w-auto">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={this.handleChangePassword}
                className="border border-gray-400 rounded px-2 py-1 w-full md:w-auto focus:outline-main"
              />
            </div>
            <input
              type="submit"
              value="OK"
              disabled={!enableSubmit}
              className={`border border-gray-400 px-4 py-1 rounded w-full sm:w-auto ${
                enableSubmit ? "hover:bg-gray-100 cursor-pointer" : "opacity-50 cursor-not-allowed"
              }`}
            />
          </div>
        </form>
      </div>
    );
  };
}

export default WithLogging(Login);
