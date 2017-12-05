import React, {Component} from 'react';
import './App.css';
import {brown500, green500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import './res/flaticon/flaticon.css';
import SwipeableTabs from "./component/SwipeableTabs"
import 'roboto-fontface/css/roboto-condensed/roboto-condensed-fontface.css';
import './res/mui/material-icons.css'
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import DrawerComponent from "./component/DrawerComponent";
import FontIcon from 'material-ui/FontIcon'
import firebase from 'firebase';

const muiTheme = getMuiTheme({
  palette: {
      primary1Color: green500,
      accent1Color: brown500,
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

    titleHandler = (title,link) => {
        this.setState({tabName: title})
    };

    toggleDrawer = () => {
        this.setState({drawerOpen: !this.state.drawerOpen})
    };
    componentDidMount() {
        firebase.auth().onAuthStateChanged( (user) => {
            if (!user) {
                this.props.history.push('login');
            } else {
            }
        });
    }

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
                <SwipeableTabs handleTitleChange={this.titleHandler}
                               {...this.props}
                />
                <Drawer
                    docked={false}
                    width={200}
                    children={<DrawerComponent backToggle={this.toggleDrawer} {...this.props} />}
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
