import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List'
import firebase from 'firebase';

class DrawerComponent extends React.Component{

    handleLeftIcon = () => {
        this.props.backToggle();
    };

    logOutHandler = () => {
        firebase.auth().signOut().then(function() {
            window.location = "/"
        }, function(error) {
            // An error happened.
        });
    };

    render() {
        return(
        <div>
           <AppBar
               title={"Menu"} style={{textAlign: 'left'}}
               iconElementLeft={
                   <IconButton>
                       <FontIcon className="material-icons">arrow_back</FontIcon>
                   </IconButton>}
               onTitleTouchTap={this.handleLeftIcon}
               onLeftIconButtonTouchTap={this.handleLeftIcon}
           />
            <List>
                <ListItem primaryText={"Log Out"} onClick = {this.logOutHandler} />
            </List>
        </div>
        );
    }
}

export default DrawerComponent;