import React from 'react';
import HiddenContent from './HiddenContent.jsx';

export default class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: '',
         message: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(name) {
      return evt => this.setState({ [name]: evt.target.value });
   }

   handleSubmit(evt) {
      evt.preventDefault();
      const { username, password } = this.state;
      this.props.login(username, password);
      this.setState({ message: 'Login successful' });
   }

   render() {
      const { username, password, message } = this.state;
      return (
         <HiddenContent title="Login">
            <form onSubmit={this.handleSubmit}>
               <div>
                  Username:
                  <input type="text" value={username} onChange={this.handleChange('username')} />
               </div>
               <div>
                  Password:
                  <input
                     type="password"
                     value={password}
                     onChange={this.handleChange('password')}
                  />
               </div>
               <input type="submit" value="Login" />
               <div style={{ color: 'green' }}>{!this.props.error ? message : ''}</div>
            </form>
         </HiddenContent>
      );
   }
}
