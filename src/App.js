import React, { Component } from 'react';
import './App.css';
import {cyan500,lightblue500, greenA400, green500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import './flaticon/flaticon.css';
import SwipeableTabs from "./component/SwipeableTabs"
import 'roboto-fontface';
import './mui/material-icons.css'
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import DrawerComponent from "./component/DrawerComponent";
import FontIcon from 'material-ui/FontIcon'
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
  },
  appBar: {
    height: 50,
  },
});



class App extends Component {
    constructor() {
        super();
        this.state= {
            tabName: 'Picklinik',
            drawerOpen: false
        }
    }
    titleHandler = (title) => {
        this.setState({tabName: title})
    };
    toggleDrawer = () => {
        this.setState({drawerOpen: !this.state.drawerOpen})
    };
  render() {
    return (
      <div className="App">
          <MuiThemeProvider  muiTheme={muiTheme}>
            <div>
              <AppBar title={this.state.tabName}
                      style={{textAlign: 'left'}}
                      iconElementLeft={
                          <IconButton>
                              <FontIcon className="material-icons">menu</FontIcon>
                          </IconButton>}
                      onLeftIconButtonTouchTap={this.toggleDrawer}
              />
                <SwipeableTabs handleTitleChange={this.titleHandler} />
                <Drawer
                    docked={false}
                    width={200}
                    children={<DrawerComponent backToggle={this.toggleDrawer}/>}
                    open={this.state.drawerOpen}
                    onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
                />
            </div>
          </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
