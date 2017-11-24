import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import defaultImage from '../res/images/default-avatar.png';
import CircularProgress from 'material-ui/CircularProgress'
import firebase from 'firebase';
import MaterialSearchBar from 'material-ui-search-bar';
import * as uuid from 'uuid/v4'

class JadwalDokterList extends React.Component {
    state = {
        searchState: '',
        open: false,
        data: null,
    };

    handleSearch = (val) => {
       this.setState({searchState: val})
    }

    getAvatar(pk) {

        if(this.state.data[pk]["image"]) {
            return <Avatar src={"data:image/jpeg;base64,"+this.state.data[pk]["image"]} />;
        } else {
            return <Avatar src={defaultImage} />;
        }

    }

    getLists() {
        let arr = [];
        for(let x in this.state.data) {
            if(this.state.data[x].name.toLowerCase().indexOf(this.state.searchState.toLowerCase()) !== -1) {
                arr.push(
                    <ListItem
                        key={uuid()}
                        primaryText={this.state.data[x]["name"]}
                        leftAvatar = {this.getAvatar(x)}
                        style={{textAlign: 'left'}}
                        onClick={() => this.props.showDokterDetail(this.state.data[x])}
                    />
                );
            }

        }
        return arr;
    }

    getData() {
            if(!this.state.data) {
                return (
                    <div>
                        <br/>
                        <br/>
                        <CircularProgress size={50} thickness={5} />
                    </div>
                );
            } else {
                return (<List>{this.getLists()}</List>);
        }
    }

    componentDidMount() {
        firebase.database().ref('doctors').on("value", (snapshot) => {
            this.setState({data: snapshot.val()});
        });
    }

    handleCellClick = (e, value) => {
        this.setState({open: true})
    };
    handleClose = () => {
        this.setState({open: false});
    };
    render() {

        return(
            <div>
                <h2 style={{marginTop: 5, marginBottom: 5}}>Jadwal Dokter</h2>
                <MaterialSearchBar
                    onChange= {(value) => this.handleSearch(value)}
                    onRequestSearch={() => 1}
                />
                <div  style={{height: 353, overflow: 'scroll'}}>
                    {this.getData()}

                </div>
                <RaisedButton
                    primary={true}
                    fullWidth={true}
                    labelColor={"white"}
                    label={"Jadwal Klinik"}
                    onClick={this.props.showJadwalKlinik}
                />
            </div>
        );
    }
}

export default JadwalDokterList;