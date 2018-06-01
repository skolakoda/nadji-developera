import React, { Component } from 'react';
import Header from './components/Header'
import Developer from './components/Developer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      developers: [],
      filtered: [],
    }
  }

  componentWillMount() {
    this.setState({ loading: true })
    fetch('https://raw.githubusercontent.com/skolakoda/nadji-developera/master/src/data/developers.json')
    .then(data => data.json())
    .then(data => this.setState({
      developers: data,
      filtered: data,
      loading: false
    }))
  }

  filterDevelopers = e => {
    const skill = e.target.value
    const filtered = this.state.developers.filter(dev => dev.skills.includes(skill))
    this.setState({filtered})
  }

  render() {
    const devList = this.state.filtered.map((dev, i) => 
      <Developer name={dev.name} skills={dev.skills} image={dev.image} key={i} />
    )
    return (
      <div className="App">
        <Header filterDevelopers={this.filterDevelopers} />
        <div className="flex-wrapper">
          {this.state.loading ? "Loading..." : devList}
        </div>
      </div>
    )
  }
}

export default App;
