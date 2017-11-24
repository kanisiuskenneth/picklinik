import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import LinearProgress from 'material-ui/LinearProgress';
import Badge from 'material-ui/Badge';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import {
    Step,
    Stepper,
    StepButton,
} from 'material-ui/Stepper';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import ContentBackspace from 'material-ui/svg-icons/content/backspace';
import MapsLocalHospital from 'material-ui/svg-icons/maps/local-hospital';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import PeopleOutlineIcon from 'material-ui/svg-icons/social/people-outline';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Toggle from 'material-ui/Toggle';
import '../res/AntreanPage.css';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
    },
    slide: {
        padding:  5,
        height: window.innerHeight - (50+72+10),
        overflow: 'scroll'
    },
    centered: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    small: {
        width: 36,
        height: 36,
        padding: 8,
    },
    smallIcon: {
        width: 18,
        height: 18,
    },
    smallFont: {
        fontSize: '12px',
    },
    largeIcon: {
        width: 80,
        height: 80,
    },
};

const toggleStyles = {
    thumbOff: {
        backgroundColor: '#ffcccc',
    },
    trackOff: {
        backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
        backgroundColor: 'red',
    },
    trackSwitched: {
        backgroundColor: '#ff9d9d',
    },
    labelStyle: {
        color: 'red',
    },
};

const items = [];
for (let i = 8; i < 16; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`Pukul ${i}.00`}/>);
}

class AntreanPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stepIndex: 0,
            jenisPendaftaran: 2,
            isAntre: 0,
            open: false,
            availJenis: false,
            availData: false,
            availKeluhan: false,
            jenisPoli: 'Poli Umum',
            id: '192-168-1-1',
            nama: 'Via Vallen',
            ttl: '1 Oktober 1990',
            jamPeriksa: 'Sekarang',
            nomorAntrean: 'Q28',
            isMenunggu: true,
            sisaPasien: 5,
            rerataWaktu: 10,
            estimasiWaktu: this.rerataWaktu * this.sisaPasien,
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleBatal = (slideIndex) => {
        this.setState({isAntre: 0})
        this.setState({stepIndex: 0})
        this.setState({open: false})
        this.setState({availJenis: false})
        this.setState({availData: false})
        this.setState({availKeluhan: false})
    };


    handleJam = (event, index, jamPeriksa) => this.setState({jamPeriksa});
    handlePoli = (event, index, jenisPoli) => this.setState({jenisPoli});

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    nextTab = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 2) {
            this.setState({stepIndex: stepIndex + 1});
        }

        if(this.state.slideIndex < 5){
            this.setState({slideIndex: this.state.slideIndex + 1});
        } else {
            this.setState({slideIndex: 0});
        }
    };

    tipeDaftar = () => {

        this.setState({stepIndex: 2})
        this.setState({slideIndex: 2})
        this.setState({jenisPendaftaran: 2})
    };

    tipeDaftarr = () => {

        this.setState({stepIndex: 2})
        this.setState({slideIndex: 3})
        this.setState({jenisPendaftaran: 3})
    };

    finishForm = () => {
        this.setState({stepIndex: 3})
        this.setState({slideIndex: 4})
    };

    submitForm = () => {
        this.setState({isAntre: true})
    };
    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };
    getContent() {

        console.log(this.state.stepIndex)
        switch (this.state.stepIndex) {
            case 0:
                return(
                    <div>
                        <h4>
                            {this.showCancel}
                            <ActionFavorite/>
                            <br/>

                            Anda tidak sedang dalam antrean poliklinik
                            <br/>
                        </h4>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div style={{flex: 1, marginTop: '5%'}}>
                            <RaisedButton
                                label="Mendaftar Antrean"
                                onClick={this.nextTab}
                            />
                        </div>
                    </div>
                );
            case 1:
                return(
                    <div>
                        <div style={{flex: 1, marginTop: '5%'}}>
                            <h3>
                                Siapa yang akan diperiksa?
                            </h3>
                            <br />
                            <br/>
                            <br/>
                            <RaisedButton
                                label="Diri sendiri"
                                onClick={this.tipeDaftar}
                                style={{marginRight: '10%'}}
                            />

                            <RaisedButton
                                label="Orang lain"
                                onClick={this.tipeDaftarr}
                            />
                        </div>
                    </div>
                );
            case 2:
                if(this.state.jenisPendaftaran === 3)
                    return(
                        <div>
                            <TextField
                                floatingLabelText="Nama"
                            /> <br />

                            <TextField
                                floatingLabelText="Tanggal Lahir"
                            /> <br />


                            <div style={{flex: 1, marginTop: '2%'}}>
                                <RaisedButton label="Kirim" onClick={this.finishForm}/>
                            </div>
                        </div>
                    );
                else
                    return(
                        <div>

                            <div>

                                <TextField
                                    floatingLabelText="Nama"
                                    defaultValue={this.state.nama}
                                /> <br />

                                <TextField
                                    floatingLabelText="Tanggal Lahir"
                                    defaultValue={this.state.ttl}
                                /> <br />

                            </div>

                            <div style={{flex: 1, marginTop: '2%'}}>
                                <RaisedButton label="Kirim" onClick={this.finishForm}/>
                            </div>
                        </div>);
                break;

            case 3:
                return(
                    <div>
                        <SelectField maxHeight={300} value={this.state.jamPeriksa} onChange={this.handleJam}
                        floatingLabelText={"Pilih Waktu"} style={{width: 150, textAlign: 'left'}} floatingLabelStyle={{whiteSpace: 'nowrap'}}>
                            <MenuItem value={'Sekarang'} primaryText={"Sekarang"}/>
                            <MenuItem value='07.00' primaryText="Pukul 07.00" />
                            <MenuItem value='08.00' primaryText="Pukul 08.00" />
                            <MenuItem value='09.00' primaryText="Pukul 09.00" />
                            <MenuItem value='10.00' primaryText="Pukul 10.00" />
                            <MenuItem value='11.00' primaryText="Pukul 11.00" />
                            <MenuItem value='12.00' primaryText="Pukul 12.00" />
                            <MenuItem value='13.00' primaryText="Pukul 13.00" />
                            <MenuItem value='14.00' primaryText="Pukul 14.00" />
                            <MenuItem value='15.00' primaryText="Pukul 15.00" />
                            <MenuItem value='16.00' primaryText="Pukul 16.00" />
                        </SelectField>
                        &nbsp;
                        <SelectField value={this.state.jenisPoli} onChange={this.handlePoli} floatingLabelText={"Pilih Poli"}
                                      style={{width: 150, textAlign: 'left'}} floatingLabelStyle={{whiteSpace: 'nowrap'}}>
                                    <MenuItem value='Poli Umum' primaryText="Poli Umum" />
                                    <MenuItem value='Poli Gigi' primaryText="Poli Gigi" />
                                    <MenuItem value='Poli THT' primaryText="Poli THT" />
                                </SelectField>
                                <br />
                        <TextField floatingLabelText={"Pilih Dokter (Opsional)"}/>
                                <TextField
                            style={{flex: 1, marginTop: '5%'}}
                    multiLine={true}
                    rows={1}
                    rowsMax={10}
                    hintText="Deskripsikan keluhan Anda"
                        /><br />

                        <RaisedButton label="Kirim" onClick={this.submitForm} style={{flex: 1, marginTop: '5%'}}/>
                </div>
                );

        }
    }
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 1:
                this.setState({slideIndex: 1})
                this.setState({completed: 1})
            case 2:
                this.setState({slideIndex: 2})
                this.setState({completed: 2})
            case 3:
                this.setState({slideIndex: 3})
                this.setState({completed: 2})
            case 4:
                this.setState({slideIndex: 4})
                this.setState({completed: 3})
            case 5:
                this.setState({slideIndex: 5})
                this.setState({completed: 4})
        }
    }


    render() {
        const actions = [
            <RaisedButton
                label="Kembali"
                primary={true}
                onClick={this.handleClose}
                style={{marginRight: 12}}
            />,
            <RaisedButton
                label="Ya, Batalkan"
                primary={true}
                onClick={this.handleBatal}
            />,
        ];

        const {stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};

        if(this.state.isAntre) {
            return(
                <div style={styles.slide}>
                    <div>
                        <Badge
                            badgeContent={this.state.sisaPasien}
                            primary={true}
                            badgeStyle={{padding: 10, fontSize: 20, left: 80, top: 10}}
                            style={{flex:1, marginRight: '4%'}}
                        >
                            <IconButton
                                tooltip="Sisa Pasien"
                                iconStyle={styles.largeIcon}
                            >
                                <PeopleOutlineIcon />
                            </IconButton>
                        </Badge>

                        <Badge
                            badgeContent={this.state.nomorAntrean}
                            secondary={true}
                            badgeStyle={{padding: 10, fontSize: 20, left: 80, top: 10}}
                            style={{flex:1, marginRight: '4%'}}
                        >
                            <IconButton
                                tooltip="Nomor Antrean"
                                iconStyle={styles.largeIcon}
                            >
                                <AssignmentIcon />
                            </IconButton>
                        </Badge>

                        <List>
                            <ListItem
                                primaryText={this.state.jenisPoli}
                                leftIcon={<MapsLocalHospital />}
                                disabled={true}
                                style={{flex:1, textAlign: 'center', width: 125, margin: 'auto'}}
                            />
                            <ListItem
                                primaryText={this.state.jamPeriksa}
                                leftIcon={<ActionDateRange />}
                                disabled={true}
                                style={{flex:1, textAlign: 'center', width: 125, margin: 'auto'}}
                            />
                        </List>

                        <Checkbox
                            style={{flex:1, textAlign: 'center', width: 'fit-content', whiteSpace: 'nowrap', margin: 'auto'}}
                            label="Saya sedang menunggu di poliklinik"
                        />
                    </div>
                    <div style={{marginTop:'5%'}}>
                        <RaisedButton label="Batalkan Pemeriksaan" onClick={this.handleOpen} />
                        <Dialog
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            Apakah Anda yakin ingin membatalkan pemeriksaan?
                        </Dialog>
                    </div>
                </div>
            );
        } else
        return(
            <div>
                <div style={{width: '95vw',overflow: 'auto', margin: 'auto'}}>
                    <Stepper linear={false} activeStep={stepIndex}>
                        <Step>
                            <StepButton onClick={() => {this.setState({stepIndex: 0}), this.setState({slideIndex: 0})}}>
                                Daftar Antrean Baru
                            </StepButton>
                        </Step>

                        <Step>
                            <StepButton onClick={() => {this.setState({stepIndex: 1}), this.setState({slideIndex: 1})}}>
                                Jenis Pendaftaran
                            </StepButton>
                        </Step>

                        <Step>
                            <StepButton onClick={() => {this.setState({stepIndex: 2}), this.setState({slideIndex: this.state.jenisPendaftaran})}}>
                                Konfirmasi Data Pasien
                            </StepButton>
                        </Step>

                        <Step>
                            <StepButton onClick={() => {this.setState({stepIndex: 3}), this.setState({slideIndex: 4})}}>
                                Keluhan Anda
                            </StepButton>
                        </Step>

                        <Step>
                            <StepButton onClick={() => {this.setState({stepIndex: 4}), this.setState({slideIndex: 5})}}>
                                Rincian Antrean
                            </StepButton>
                        </Step>
                    </Stepper>
                </div>
                <div height={400}>
                    {this.getContent()}
                </div>
            </div>
        );
    }
}

/*


                <Tabs
                    id="swipey"
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="" value={0} />
                    <Tab label="" value={1} />
                    <Tab label="" value={2} />
                    <Tab level="" value={3} />
                    <Tab level="" value={4} />
                    <Tab level="" value={5} />
                </Tabs>

                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <h4>
                            {this.showCancel}
                            <ActionFavorite/>
                            <br/>

                            Anda tidak sedang dalam antrean poliklinik
                            <br/>
                        </h4>

                        <div style={{flex: 1, marginTop: '5%'}}>
                            <RaisedButton
                                label="Mendaftar Antrean"
                                onClick={this.nextTab}
                            />
                        </div>
                    </div>

                    <div>

                    </div>



                    <div style={styles.slide}>


                        <div style={{flex: 1, marginTop: '2%'}}>
                            <RaisedButton label="Submit" onClick={this.finishForm}/>
                        </div>
                    </div>



                    <div style={styles.slide}>

                        <div>
                            <TextField
                                floatingLabelText="Nama"
                            /> <br />

                            <TextField
                                floatingLabelText="Tanggal Lahir"
                            /> <br />

                            <DropDownMenu maxHeight={300} value={this.state.jamPeriksa} onChange={this.handleJam}>
                                {items}
                            </DropDownMenu> <br />

                            <div style={{flex: 1, marginTop: '2%'}}>
                                <RaisedButton label="Submit" onClick={this.finishForm}/>
                            </div>
                        </div>
                    </div>

                    <div style={styles.slide}>
                        <div>
                            <TextField
                                multiLine={true}
                                rows={4}
                                rowsMax={10}
                                hintText="Deskripsikan keluhan Anda"
                            /><br />

                            <RaisedButton label="Finish" onClick={this.finishForm}/>
                        </div>
                    </div>

                    <div style={styles.slide}>

                    </div>

                </SwipeableViews>
 */

export default AntreanPage