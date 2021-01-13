import {Component} from 'react'
import Logo from './../Logo'
import './styles.css'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Logo />
      </header>
    );
  }
}

export default Header;
