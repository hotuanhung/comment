
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isPopupOpen: false,
      isLoggedIn: false,
      commentClicked: false,
      selectedComment: '',
      selectedRating: null, // Thêm trạng thái để lưu trữ giá trị rating
      placeholder: 'Enter your comment...', // Thêm state để lưu trữ giá trị của placeholder
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
      isPopupOpen: !prevState.isPopupOpen,
    }));
  }

  handleClickOutside = (event) => {
    if (this.popupRef.current && !this.popupRef.current.contains(event.target)) {
      this.setState({
        isPopupOpen: false,
      });
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleRowClick = (content,rating ) => {
    this.setState({
      selectedComment: content,
      commentClicked: true,
      selectedRating: rating,
    });
  }

  handleChange = (event) => {
    this.setState({
      selectedComment: event.target.value,
    });
  }

  render() {
    const { isPopupOpen, isLoggedIn, commentClicked, selectedComment, placeholder,selectedRating } = this.state;
    const rating = 4;

    return (
      <div>
        <div className="button-container">
          <button onClick={this.togglePopup} className="btn">
            Click Me!
          </button>
          <button onClick={this.handleLogin} className="btn">
            Login
          </button>
        </div>
        {isPopupOpen && (
          <div ref={this.popupRef} className="popup">
            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="row-container" onClick={() => this.handleRowClick('This is a comment from the user',rating)}>
              <div className="row-left">
                <div className="comment">
                  <div className="avatar"></div>
                  <div className="info">
                    <span className="username">John Doe</span>
                    <p className="content">This is a comment from the user</p>
                  </div>
                </div>
              </div>
              <div className="row-right">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${star <= rating ? 'star-filled' : ''}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Các row-container khác */}
            
            {isLoggedIn && (
              <div className="input-container">
                <div className="input-left">
                  <textarea
                    placeholder={placeholder}
                    className="textarea"
                    value={commentClicked ? selectedComment : ''}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-right">
                  <div className="rating-input">
                    <select className="select" value={selectedRating}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button className="comment-button">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </div>
              </div>
                )}

          </div>
        )}
      </div>
    );
  }
}

export default App;
