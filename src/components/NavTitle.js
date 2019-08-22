import React, { Component } from 'react'
import { Navbar, Nav, Icon } from 'rsuite'

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props}>
        <Navbar.Body>
        <Nav pullLeft onSelect={onSelect} activeKey={activeKey}>
            <Nav.Item eventKey="1" >
              Download center
            </Nav.Item>
          </Nav>
        <Nav pullRight onSelect={onSelect} activeKey={activeKey}>
            <Nav.Item eventKey="2" icon={<Icon icon="file" />}>
              Laboratorio 3
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };

export class NavTitle extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeKey: null
        };
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        const { activeKey } = this.state;
        return (
            <div>
                <NavBarInstance activeKey={activeKey} onSelect={this.handleSelect} />
            </div>
        );
    }
}

export default NavTitle
