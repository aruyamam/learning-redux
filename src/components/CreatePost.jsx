import React from 'react';
import HiddenContent from './HiddenContent.jsx';

export default class CreatePost extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         username: '',
         title: '',
         text: '',
         category: '',
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
      const { title, text, category } = this.state;
      this.props.createPost(this.props.token, {
         title,
         text,
         category,
      });
      this.setState({ message: 'Successfully created post!' });
   }

   render() {
      const {
         username, title, text, category, message,
      } = this.state;
      const { error } = this.props;

      return (
         <HiddenContent title="New post">
            <form onSubmit={this.handleSubmit}>
               <div>
                  Username:
                  <input type="text" value={username} onChange={this.handleChange('username')} />
               </div>
               <div>
                  Title:
                  <input type="text" value={title} onChange={this.handleChange('title')} />
               </div>
               <div>
                  Text:
                  <input type="text" value={text} onChange={this.handleChange('text')} />
               </div>
               <div>
                  Category:
                  <input type="text" value={category} onChange={this.handleChange('category')} />
               </div>
               <input type="submit" value="Create post" />
               <div style={{ color: 'green' }}>{error ? message : ''}</div>
            </form>
         </HiddenContent>
      );
   }
}
