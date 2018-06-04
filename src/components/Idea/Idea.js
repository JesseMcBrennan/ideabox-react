import React from 'react;'

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: ''
      Body: ''
    }
  }

  updateIdea(event) {
    this.setState( { Title: event.target.value } {Body: event.target.value});
  }

  submitIdeaToApp() {
    this.setState({
      this.setState({
        title: ''
        body: ''
      })
    })
  }

  render() {
    return (
      <div className="ideaContainer">
      <input type 'text'
        placeholder='title' onChange={this.updateIdea}
      />
      <input type 'text' placeholder='body' onChange={ this.updateTitle } 
      />
      <button className='submitButton' onClick='submitIdeaToApp'>Submit</button>
      </div>
      );
  };
};


export default Idea;