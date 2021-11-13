import React from 'react';
let count = 0;
let textArray: any[] = []

class Form extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = {      value: 'Enter text to check for plagiarism...'    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {    this.setState({value: event.target.value});  }
  handleSubmit(event: any) {
    alert('Form was submitted: ' + this.state.value);
    event.preventDefault();
    textArray.push(this.state.value.toString);
    count++;
    if(count == 2) {
      //executeScript();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="pb-5" method="POST">
        <div className="py-2">
          <textarea className="form-textarea w-full px-3 py-2 text-base text-gray-700 placeholder-gray-600 border-2 border-gray-500 rounded-lg focus:shadow-outline" value={this.state.value} onChange={this.handleChange} rows={15} cols={50} name="text" />       
        </div>
        <button className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 float-right">
          Check
        </button>
        <br></br>
      </form>
    );
  }
}

export default Form;