import React from 'react';
import HiddenContent from './HiddenContent.jsx';

export default class Registration extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         username: '',
         realname: '',
         password: '',
         message: '',
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(name) {
      return evt => this.setState({ [name]: evt.target.value });
   }

   handleSubmit(evt) {
      evt.preventDefault();
      const { username, realname, password } = this.state;
      this.props.createUser(username, realname, password);
      this.setState({ message: 'Successfully created user!' });
   }

   render() {
      const {
         username, password, realname, message,
      } = this.state;
      const { error } = this.props;

      return (
         <HiddenContent title="Register">
            <form onSubmit={this.handleSubmit}>
               <div>
                  Username:
                  <input type="text" value={username} onChange={this.handleChange('username')} />
               </div>
               <div>
                  Real name:
                  <input type="text" value={realname} onChange={this.handleChange('realname')} />
               </div>
               <div>
                  Password:
                  <input type="text" value={password} onChange={this.handleChange('password')} />
               </div>
               <input type="submit" value="Create account" />
               <div style={{ color: 'green' }}>{!error ? message : ''}</div>
            </form>
         </HiddenContent>
      );
   }
}
