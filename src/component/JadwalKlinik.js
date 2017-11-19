import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import * as firebase from 'firebase';
import Timetable from './Timetable/Timetable'

const date = new Date();
class JadwalKlinik extends React.Component {
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
        this.props.history.push("/booking?day="+this.state.dayClicked+"&time="+this.state.timeClicked+"&instance=Klinik")
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
            return (<Timetable {...this.props} handleCellClick={this.handleCellClick}  data={this.state.data}/>);
        }
    };
    componentDidMount() {
        firebase.database().ref('clinic-schedule').on("value", (snapshot) => {
            this.setState({data: snapshot.val()});
        });
    }
    render() {
        const actions = [
            <FlatButton
                label="Batal"
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
                <h2 style={{margin: 5}}>Jadwal Klinik</h2>
                <div
                    style={{width: window.innerWidth-10, height: 390, overflow: 'scroll'}}
                >
                    {this.getData()}

                </div>
                <RaisedButton
                    primary={true}
                    fullWidth={true}
                    style={{marginTop: 10}}
                    onClick={this.props.showJadwalDokter}
                    labelColor={"white"}
                    label={"Jadwal Dokter"}
                />

                <div>
                    <Dialog
                        title="Reservasi Layanan Klinik"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        Apakah anda ingin memesan layanan klinik pada jam {this.state.timeClicked} hari {this.state.dayClicked}?
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

            </div>

        );
    }
}

export default JadwalKlinik;