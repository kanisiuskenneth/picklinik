import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import LinearProgress from 'material-ui/LinearProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ContentBackspace from 'material-ui/svg-icons/content/backspace'
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
        padding: 5,
    },
};

const toggleStyles = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    },
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
for (let i = 8; i < 20; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`Pukul ${i}.00`}/>);
}

class AntreanPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0,
            id: '192-168-1-1',
            nama: 'Via Vallen',
            ttl: '1 Oktober 1990',
            jamPeriksa: 8,
            nomorAntrean: 'Q208',
            isMenunggu: true,
            sisaPasien: 5,
            rerataWaktu: 10,
            estimasiWaktu: this.rerataWaktu * this.sisaPasien,
            checked: false
        };

        this.baseState = this.state;
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
        if(this.slideIndex < value){

        } else {
            this.progress;
        }
        this.setState({
            slideIndex: value,
        });
    };

    nextTab = (slideindex) => {
        if(this.state.slideIndex < 5){
            this.setState({slideIndex: this.state.slideIndex + 1});
        } else {
            this.setState({slideIndex: 0});
        }
    }

    pasienBaru = (slideindex) => {
        this.setState({slideIndex: 3})
    }

    finishForm = (slideindex) => {
        this.setState({slideIndex: 4})
    }

    cancelRegist = (slideindex) => {
        this.setState({slideIndex: 0})
    }

    progress = (completed) => {
        if (completed > 3) {
            this.setState(this.baseState);
        } else {
            this.setState({completed: this.state.completed + 1});
        }
    }

    showTabs() {
        var swipey = document.getElementById("swipey");
        if(swipey.className = ""){
            swipey.className = "visible";
        }
        if(swipey.className = "visible"){
            swipey.className = "";
        }
    }


    render() {
        return(
            <div>

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

                <LinearProgress
                    mode="determinate" max='5'
                    value={this.state.slideIndex+1}
                />

                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        {this.showCancel}
                        <ActionFavorite/>
                        <br/>

                        Anda tidak sedang dalam antrean poliklinik
                        <br/>

                        <RaisedButton
                            id="daftarButton"
                            label="Mendaftar Antrean"
                            onClick={this.nextTab}
                        />
                    </div>

                    <div>

                        <IconButton
                            iconStyle={styles.smallIcon}
                            style={styles.small}
                            onClick={this.cancelRegist}
                        >
                            <ContentBackspace />
                        </IconButton>

                        <span style={styles.smallFont}>Batalkan pendaftaran</span>
                        <br/>


                        <RaisedButton
                            label="Pasien Lama"
                            onClick={this.nextTab}
                        />

                        <RaisedButton
                            label="Pasien Baru"
                            onClick={this.pasienBaru}
                        />
                    </div>



                    <div style={styles.slide}>
                        <IconButton
                            iconStyle={styles.smallIcon}
                            style={styles.small}
                            onClick={this.cancelRegist}
                        >
                            <ContentBackspace />
                        </IconButton>

                        <span style={styles.smallFont}>Batalkan pendaftaran</span>
                        <br/>

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

                        <RaisedButton label="Submit" onClick={this.finishForm}/>
                    </div>



                    <div style={styles.slide}>
                        <IconButton
                            iconStyle={styles.smallIcon}
                            style={styles.small}
                            onClick={this.cancelRegist}
                        >
                            <ContentBackspace />
                        </IconButton>

                        <span style={styles.smallFont}>Batalkan pendaftaran</span>
                        <br/>

                        <TextField
                            floatingLabelText="Nama"
                        /> <br />

                        <TextField
                            floatingLabelText="Tanggal Lahir"
                        /> <br />

                        <DropDownMenu maxHeight={300} value={this.state.jamPeriksa} onChange={this.handleJam}>
                            {items}
                        </DropDownMenu> <br />

                        <RaisedButton label="Submit" onClick={this.finishForm}/>
                    </div>

                    <div style={styles.slide}>
                        <IconButton
                            iconStyle={styles.smallIcon}
                            style={styles.small}
                            onClick={this.cancelRegist}
                        >
                            <ContentBackspace />
                        </IconButton>

                        <span style={styles.smallFont}>Batalkan pendaftaran</span>
                        <br/>

                        <TextField
                            multiLine={true}
                            rows={4}
                            rowsMax={10}
                            hintText="Deskripsikan keluhan Anda"
                        /><br />

                        <RaisedButton label="Finish" onClick={this.nextTab}/>
                    </div>

                    <div style={styles.slide}>
                        <h1>Pasien tersisa:
                            <br/>
                            {this.state.sisaPasien}
                        </h1>

                        <h2> Nomor antrean anda:
                            <br/>
                            {this.state.nomorAntrean}
                        </h2>

                        <Toggle
                            label="Saya sedang menunggu di poliklinik"
                            labelPosition='right'
                            thumbStyle={toggleStyles.thumbOff}
                            trackStyle={toggleStyles.trackOff}
                            thumbSwitchedStyle={toggleStyles.thumbSwitched}
                            trackSwitchedStyle={toggleStyles.trackSwitched}
                        />
                    </div>

                </SwipeableViews>
            </div>
        );
    }
}

export default AntreanPage