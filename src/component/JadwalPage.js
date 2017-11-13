import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import {green500,grey500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import JadwalKlinik from "./JadwalKlinik";
import JadwalDokter from "./JadwalDokter";


class JadwalPage extends React.Component {
    showJadwalDokter = () => {
        console.log("Called");
        this.setState({currPage: <JadwalDokter showJadwalKlinik={this.showJadwalKlinik} />})
    };
    showJadwalKlinik = () => {
        this.setState({currPage: <JadwalKlinik showJadwalDokter={this.showJadwalDokter} />})
    };

    state = {
        currPage : <JadwalKlinik showJadwalDokter={this.showJadwalDokter}/>
    };


    render() {
        return(
            this.state.currPage
        );
    }
}

export default JadwalPage;