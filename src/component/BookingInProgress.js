import React from 'react';
import '../App.css';
import {green500,grey50, green100} from 'material-ui/styles/colors'
import logo from '../res/images/logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey50,
    },
});

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const styles = {
    root: {display: 'grid', gridTemplateColumns: "repeat(12,1fr)", gridTemplateRows: "repeat(24,1fr)", position: 'fixed', width: '100%', height: '100%', background: green500},
    book: {
        fontSize: '6rem',
        color: 'white',
        gridRow: '6/12',
        gridColumn: '1/13',
        alignSelf: 'center',
        justifySelf: 'center',

    }
};

function getParameterByName(name, url) {


    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

class BookingInProgress extends React.Component {

    state = {
       title: "Pesanan Anda Sedang Diproses",
        circularProgressMode: "indeterminate",
        circularValue: 100,
        buttonLabel: "Batalkan Pesanan",
        done: {visibility: 'hidden'},
        iconClass: 'flaticon-open-book',
    };

    handleButton = () => {
      this.props.history.push("/jadwal")
    };

    componentDidMount() {
        sleep(8000).then(() => {
            this.setState({title: "Pesanan anda telah diterima", done: true, buttonLabel:"Kembali", iconClass: 'flaticon-checked'})
        })
    }



    render() {
        return(

            <div className={'booking-page'}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div style={styles.root}>
                        <h3 style={{gridRow: '3/5', gridColumn: '1 / 13', color: 'white', fontWeight: '500', justifySelf: 'center'}}>{this.state.title}</h3>
                        <FontIcon className={this.state.iconClass} style={styles.book}/>
                        <CircularProgress style={styles.book} size={200} mode={"indeterminate"} />
                        <CircularProgress style={{...styles.book,...this.state.done}} size={200} mode={"determinate"} value={100} hidden/>
                        <div style={{gridColumn: "1/13", gridRow:"18/19", display: "flex", justifyContent: "center", }}>

                        <RaisedButton
                            label={this.state.buttonLabel}
                            labelColor={green500}
                            style={{width: 200}}
                            onClick={this.handleButton}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default BookingInProgress;