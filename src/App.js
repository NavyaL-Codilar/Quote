import React from "react";
import "./App.css";
import nextBut from "./nextButton.jpg";
import prev from './prev.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    //api  call

    fetch("https://movie-quote-api.herokuapp.com/v1/quote/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          posts: [json],
        });
      });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        {this.state.posts.map((n, i) => {
          return (
            <h1 key={i} className="Quote">
              {n.quote}
            </h1>
          );
        })}
        <div className="buttons"> 

        <button className ="prev" onClick={() => window.location.reload(false)}>
         
          <img src={prev} alt="" />
        </button>

        <button className ="next" onClick={() => window.location.reload(false)}>
          
          <img src={nextBut} alt="" />
        </button>

        
        </div>
      </div>
    );
  }
}
