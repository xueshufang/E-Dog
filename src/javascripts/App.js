import React, {
	Component
} from 'react';
//import logo from '../assets/logo.svg';
class App extends Component {
	render() {
		return(
			<div>
        {this.props.children}
      </div>
		);
	}
}

export default App;