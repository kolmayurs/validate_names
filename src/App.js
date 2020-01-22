import React from 'react';
import './App.css';
import success from './img/success.png';
import fail from './img/fail.png';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {files:[]};
    this.handleFile = this.handleFile.bind(this)
  }
  handleFile(e) {
    /*console.log(e.target.files);*/
    /*this.setState({files:[e.target.files]});*/

    let arr = [];
    for(let i = 0; i<e.target.files.length; i++ ){
      arr.push(e.target.files[i].name);
    }
   /*console.log(arr);*/
   this.setState({files: arr});
  }

  render() {
    /*console.log(this.state.files);*/
    const files = this.state.files.map((file,i) => {
      if(file.search(/[A-Z]/g) === -1 && file.indexOf(' ') === -1){
        return(
        <tr key={'key_'+i}>
          <td style={{padding:'10px'}}>{i+1}</td>
          <td style={{padding:'10px'}}>{file}</td>
          <td style={{padding:'10px'}}><img src={success} alt="success" width="24" height="24" /></td>
        </tr>
        )
      }
      else{
        return(
        <tr key={'key_'+i}>
          <td style={{padding:'10px'}}>{i+1}</td>
          <td style={{padding:'10px'}}>{file}</td>
          <td style={{padding:'10px'}}><img src={fail} alt="fail" width="24" height="24" /></td>
        </tr>
        )
      }
      
    })
     if (typeof this.state.files !== 'undefined' && this.state.files.length > 0) {
    return (
      <div className="App">
        <input type="file" name="images" id="imgid" className="hide_file" onChange={this.handleFile} multiple/>
        <table cellPadding="0" cellSpacing="0" border="1" style={{width:'500px', margin:'20px auto', padding:'10px'}}>
        <tbody>
          <tr>
            <td style={{padding:'10px', fontWeight: 'Bold'}}>No.</td>
            <td style={{padding:'10px', fontWeight: 'Bold'}}>File Name</td>
            <td style={{padding:'10px', fontWeight: 'Bold'}}>Validate</td>
          </tr>
        {files}
        </tbody>
        </table>
      </div>
    );
  }
  else{
    return(
       <div className="App">
        <input type="file" name="images" id="imgid" className="hide_file" onChange={this.handleFile} multiple/>
      </div>
    )
  }
  }
}

export default App;
