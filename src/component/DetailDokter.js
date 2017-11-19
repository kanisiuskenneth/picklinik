import React from 'react';
import Avatar from 'material-ui/Avatar';
import {green500, grey500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import defaultImage from '../res/images/default-avatar.png';
import FontIcon from 'material-ui/FontIcon'
import {Table, TableBody, TableHeader, TableRow, TableRowColumn} from 'material-ui/Table';
import Timetable from "./Timetable/Timetable";

const date = new Date();
const styles = {
    cell : {background: green500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height: 15},
    cellDeactivated : {background: grey500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height:15},
    cellButton : {height: '100%', width: '100%'},
    rowStyles : {height: 15},
    clockStyle: {width: 70, height: 15},
    topRowCell: {textAlign: 'center', paddingLeft: 'none', paddingRight: 'none'}
};

class JadwalDokterList extends React.Component {
    state = {
        open: false,
        data: null,
        dayClicked: null,
        timeClicked: null,
        sorryDialogOpen: false,
    };
    handleCellClick = (row, col) => {
        let time = row+7;
        if(time < 10) {
            time = "0"+time;
        }
        time = time+".00";
        if(col === date.getDay()) {
            this.setState({sorryDialogOpen: true})
        } else {
            this.setState({dayClicked: this.mapDayToString(col), timeClicked: time})
            this.setState({open: true})
        }
    };


    handleClose = () => {
        this.setState({open: false, sorryDialogOpen: false});
    };

    handleSubmit = () => {
        this.setState({open: false, sorryDialogOpen: false});
        this.props.history.push("/booking?day="+this.state.dayClicked+"&time="+this.state.timeClicked+"&instance="+this.props.doctorData.name)
    };


    mapDayToString = (day) => {
        switch(day){
            case 0:
                return 'Minggu';
            case 1:
                return 'Senin';
            case 2:
                return 'Selasa';
            case 3:
                return 'Rabu';
            case 4:
                return 'Kamis';
            case 5:
                return 'Jumat';
            case 6:
                return 'Sabtu';
            default:
                let c = day % 7;
                return this.mapDayToString(c);
        }
    };

    getAvatar() {
        if(this.props.doctorData.image)
            return(<Avatar src={"data:image/jpeg;base64,"+this.props.doctorData.image} size={48} style={{verticalAlign: 'middle', margin: "0px 10px"}}/>);
        else
            return(<Avatar src={defaultImage} size={48} style={{verticalAlign: 'middle', margin: "5px 10px"}}/>);
    }

    render() {
        const actions = [
            <FlatButton
                label="Tidak"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Ya"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSubmit}
            />,
        ];
        return(
            <div>
                <div style={{width: '100%', textAlign: 'left'}}>
                <FlatButton
                    target="_blank"
                    style={{textAlign: 'left'}}
                    label="Kembali"
                    icon={<FontIcon className="material-icons">arrow_back</FontIcon>}
                    onClick={this.props.showListDokter}
                />
                </div>
                <div style={{verticalAlign: 'middle', fontSize: '1.2rem'}}>
                    {this.getAvatar()}{this.props.doctorData.name}
                </div>
                <div>
                </div>
                <div
                    style={{width: window.innerWidth-10, height: 400, overflow: 'scroll'}}
                >
                   <Timetable data={this.props.doctorData.schedule} handleCellClick={this.handleCellClick}/>
                </div>
                <Dialog
                    title="Reservasi Jadwal Poliklinik"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Apakah anda ingin buat janji bertemu dengan {this.props.doctorData.name} pada pukul {this.state.timeClicked} hari {this.state.dayClicked}
                </Dialog>
                <Dialog
                    title="Mohon Maaf"
                    actions={actions[0]}
                    modal={false}
                    open={this.state.sorryDialogOpen}
                    onRequestClose={this.handleClose}
                >
                    Pemesanan layanan klinik harus dilakukan minimal 1 Hari sebelumnya
                </Dialog>

            </div>
        );
    }
}

export default JadwalDokterList;