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
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import PeopleOutlineIcon from 'material-ui/svg-icons/social/people-outline';
import ContentBackspace from 'material-ui/svg-icons/content/backspace';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Toggle from 'material-ui/Toggle';
import ExpandTransition from 'material-ui/internal/ExpandTransition';

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
            slideIndex: 0,
            jenisPendaftaran: 2,
            id: '192-168-1-1',
            nama: 'Via Vallen',
            ttl: '1 Oktober 1990',
            jamPeriksa: 8,
            nomorAntrean: 'Q28',
            isMenunggu: true,
            sisaPasien: 5,
            rerataWaktu: 10,
            estimasiWaktu: this.rerataWaktu * this.sisaPasien,
            checked: false,
            stepIndex: 0,
            loading: false,
            open: true,
            inQueue: false,
        };
    }

    handleJam = (event, index, jamPeriksa) => this.setState({jamPeriksa});

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
    }

    tipeDaftar = () => {

        this.setState({stepIndex: 2})
        this.setState({slideIndex: 2})
        this.setState({jenisPendaftaran: 2})
    }

    tipeDaftarr = () => {

        this.setState({stepIndex: 2})
        this.setState({slideIndex: 3})
        this.setState({jenisPendaftaran: 3})
    }

    finishForm = () => {
        this.setState({stepIndex: 3})
        this.setState({slideIndex: 4})
    }

    submitForm = () => {
        this.setState({inQueue: true})
    }
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
                        <div style={{flex: 1, marginTop: '10%'}}>
                            <RaisedButton
                                label="Pasien Lama"
                                onClick={this.tipeDaftar}
                                style={{marginRight: '10%'}}
                            />

                            <RaisedButton
                                label="Pasien Baru"
                                onClick={this.tipeDaftarr}
                            />
                        </div>
                    </div>
                );
            case 2:
                if(this.state.jenisPendaftaran === 3)
                    return(
                        <div>
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
                        </div>);
                else
                    return(
                        <div>
                            <TextField
                                floatingLabelText="ID"
                                disabled={true}
                                defaultValue={this.state.id}
                            /><br />

                            <TextField
                                floatingLabelText="Nama"
                                disabled={true}
                                defaultValue={this.state.nama}
                            /> <br />

                            <TextField
                                floatingLabelText="Tanggal Lahir"
                                disabled={true}
                                defaultValue={this.state.ttl}
                            /> <br />

                            <DropDownMenu maxHeight={300} value={this.state.jamPeriksa} onChange={this.handleJam}>
                                {items}
                            </DropDownMenu>
                            <br />
                            <div style={{flex: 1, marginTop: '2%'}}>
                                <RaisedButton label="Submit" onClick={this.finishForm}/>
                            </div>
                        </div>);
                break;

            case 3:
                return(
                    <div>
                        <TextField
                            multiLine={true}
                            rows={4}
                            rowsMax={10}
                            hintText="Deskripsikan keluhan Anda"
                        /><br />

                        <RaisedButton label="Finish" onClick={this.submitForm}/>
                    </div>
                );
            case 4:
                return(
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

                        <Checkbox
                            style={{flex:1, marginTop: '5%', marginLeft:'-38%', maxWidth:350}}
                            label="Saya sedang menunggu di poliklinik"
                        />
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

        const {stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        if(this.state.inQueue) {
            return(
                <div>
                    <br/>
                    <br/>
                    <br/>
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

                    <Checkbox
                        style={{flex:1, marginTop: '5%', marginLeft:'0', width:'99vw', textAlign: 'center'}}
                        label="Saya sedang menunggu di poliklinik"
                    />
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