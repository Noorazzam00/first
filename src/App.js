import React, { Component } from 'react';

class App extends Component {
  state = {
    person : {
      fullName : "Neymar Jr.",
      bio : "lorem ipsum",
      imageSrc: "https://b.fssta.com/uploads/application/soccer/headshots/713.png",
      job : "football player"
    },
    show: false , 
    interval: 0,
  };


  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  
  componentWillUnmount() {
      clearInterval(this.timer);
  }


  render() {
    const { person, show , interval} = this.state
    return (
      <div>
        <button onClick={()=>this.setState({show: !this.state.show, interval: 0})} >show</button>
        {show && (
          <h2>
      <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imageSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>          </h2>
        )}
        <p>Time interval since mount: {interval} seconds</p>

      </div>
    );
  }
}

export default App;
