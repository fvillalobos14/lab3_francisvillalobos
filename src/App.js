import React from 'react';
import Sidebar from './components/Sidebar'
import NavTitle from './components/NavTitle';
import { FlexboxGrid, Panel, Divider, IconButton, Icon, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite.min.css';

const panelStyle = {
  marginTop: '40px',
  marginLeft: '40px',
  width: '900px',
  padding: '10px'
}

function App() {
  return (
    <div className="App">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={5}>
          <Sidebar />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={19}>
          <NavTitle />
          <Panel style={panelStyle} bordered>
            <h1 align="center">AOSPEXTENDED ROM</h1>
            <Divider/>
              <h2 align="center">About Us</h2>
              <p align="justify">
                AOSP Extended is an AOSP based rom which provides stock UI/UX with various customisations
                features along with the Substratum theme engine. The project has been made by cherry-picking
                various commits from various other projects. Being based on AOSP it provides a smooth and
                lag-free experience out of the box. We will constantly try to add more features and make it
                even better in future updates. A ROM by a user, for a user. 
              </p>
              <p align="center">
              #StayAOSP #ExtendYourDevice #BeExtended
              </p>
              <Divider />
              <ButtonToolbar align="center"> 
                <IconButton icon={<Icon icon="facebook-official" />} color="blue" circle />
                <IconButton icon={<Icon icon="google-plus-circle" />} color="red" circle />
                <IconButton icon={<Icon icon="twitter" />} color="cyan" circle />
                <IconButton icon={<Icon icon="linkedin" />} color="blue" circle />
              </ButtonToolbar>
            </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default App;
