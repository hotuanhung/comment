import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page1: false,
      page2: false,
      resend: false, 
      showButton: true, // Thêm trạng thái showButton để điều khiển hiển thị của nút
      countdown: 300,
    };
    this.popupRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      page1: !prevState.page1,
      showButton: false, // Ẩn nút khi togglePopup được gọi
    }));
  };

  handleClickOutside = (event) => {
    if (this.popupRef.current && !this.popupRef.current.contains(event.target)) {
      this.setState({
        page1: false,
        showButton: true, // Hiển thị lại nút khi nhấp vào bên ngoài popup
      });
    }
  };

  startCountdown = () => {
    // Bắt đầu đếm ngược
    this.setState({ countdown: 300, resend: false });

    this.countdownInterval = setInterval(() => {
      this.setState((prevState) => ({
        countdown: prevState.countdown - 1,
      }));

      if (this.state.countdown === 0) {
        clearInterval(this.countdownInterval);
        this.setState({ resend: true });
      }
    }, 1000);
  };

  render() {
    const { page1,  countdown,resend , showButton } = this.state;

    return (
      <div>
        {showButton && ( // Hiển thị nút nếu showButton là true
          <div className="button-container">
            <button onClick={this.togglePopup} className="btn">
              Page 1 
            </button>
          </div>
        )}
        {page1 && (
          <div className="popup" ref={this.popupRef}>
            <div className="popupcontainer">
              <div className="titlecontainer">
                <h1 className="titletext">Forgot password?</h1>
              </div>

              <div className="popupmain">
                <form>
                  <div className="popupmainform">
                    <div>
                      <label htmlFor="email" className="mail">
                        Email address
                      </label>
                      <div className="inputcontainer">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="mail">
                        Password 
                      </label>
                      <div className="inputcontainer">
                        <input
                          
                          id="password"
                          name="password"
                          className="input"
                          required
                        />
                      </div>
                    </div>

                    {countdown > 0 && (
                      <p className="subtext">
                        {countdown} seconds
                      </p>
                    )}

                    

                    <button
                      type="submit"
                      className="buttonsubmit"
                      onClick={this.startCountdown}
                    >
                      {resend ? 'Resend' : 'Reset password'}
                    </button>



                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

