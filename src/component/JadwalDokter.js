import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import {green500,grey500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import defaultImage from '../res/images/default-avatar.png';
import johnDoe from '../res/images/1_widget_john-doe.png';

import MaterialSearchBar from 'material-ui-search-bar';

const styles = {
    cell : {background: green500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height: 15},
    cellDeactivated : {background: grey500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height:15},
    cellButton : {height: '100%', width: '100%'},
    rowStyles : {height: 15},
    clockStyle: {width: 90, height: 15}
}


class JadwalDokter extends React.Component {
    state = {
        open: false
    };
    handleCellClick = (e, value) => {
        console.log(value);
        this.setState({open: true})
    };
    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        return(
            <div style={{height: 400, overflow: 'scroll'}}>
                <MaterialSearchBar
                    onChange= {() => console.log("changed")}
                    onRequestSearch={() => console.log("requested")}
                />
                <div>
           <List>

               <ListItem
                   primaryText="dr. Brendan Lim"
                   leftAvatar={<Avatar src={defaultImage} />}
                   style={{textAlign: 'left'}}
                   secondaryText={
                       <p>
                           Dokter Umum, pengalaman kerja 10 tahun
                       </p>
                   }
               />
               <ListItem
                   primaryText="dr. John doe"
                   leftAvatar={<Avatar src={johnDoe} />}
                   style={{textAlign: 'left'}}
                   secondaryText={
                       <p>
                           Dokter Umum, pengalaman kerja 20 tahun
                       </p>
                   }
               />
           </List>
                </div>
                <RaisedButton
                    primary={true}
                    fullWidth={true}
                    style={{marginTop: 10}}
                    labelColor={"white"}
                    label={"Jadwal Klinik"}
                    onClick={this.props.showJadwalKlinik}
                />

            </div>
        );
    }
}

export default JadwalDokter;