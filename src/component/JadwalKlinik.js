import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import * as firebase from 'firebase';
import Timetable from './Timetable/Timetable'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'
const date = new Date();
class JadwalKlinik extends React.Component {
    state = {
        open: false,
        data: null,
        dayClicked: null,
        timeClicked: null,
        sorryDialogOpen: false,
        jenisPoli: 'Poli Umum',
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

    handlePoli = (event, index, jenisPoli) => this.setState({jenisPoli});

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
        try {
            let localData= localStorage.getItem("ClinicScheduleData")
            this.setState({data: JSON.parse(localData)});
        } catch (e){
            console.log(e)
        }

        firebase.database().ref('clinic-schedule').on("value", (snapshot) => {
            localStorage.setItem("ClinicScheduleData", JSON.stringify(snapshot.val()));
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
                <h4 style={{margin: 5, fontWeight: 5, }}>Waktu layanan 07.00-16.00</h4>
                <div
                    style={{width: '95%', margin:'auto', height: 390, overflow: 'scroll'}}
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
                        <br/>
                        <SelectField value={this.state.jenisPoli} onChange={this.handlePoli} floatingLabelText={"Pilih Poli"}
                                     style={{width: '100%', textAlign: 'left', margin: 'auto'}} floatingLabelStyle={{whiteSpace: 'nowrap'}}>
                            <MenuItem value='Poli Umum' primaryText="Poli Umum" />
                            <MenuItem value='Poli Gigi' primaryText="Poli Gigi" />
                            <MenuItem value='Poli THT' primaryText="Poli THT" />
                        </SelectField>
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