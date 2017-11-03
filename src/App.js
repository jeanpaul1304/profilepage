import React, {Component} from 'react';
import ProfileContainer from './components/profile';
import RepositoriesContainer from './components/repositories';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <h1>Test </h1>
        <ProfileContainer />
        <RepositoriesContainer />
      </div>
    );
  }
}

export default App;
