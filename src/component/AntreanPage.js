import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import ReactInterval from 'react-interval';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
const styles = {
    textStyle: {fontSize: '1.4rem', color: '#151515'},
};

function GetAntreanText(props) {
        if(props.inQueue) {
            return (<div>Anda sedang berada di dalam antrean</div>);
        }   else {
            return (<div/>);
        }
}


function GetAntreanToggle(props) {
    if(props.inQueue) {
        return (<Toggle
            style={{width: 300, margin: 'auto'}}
            labelPosition={'right'}
            label="Saya sedang menunggu di klinik"
        />);
    }   else {
        return (<div/>);
    }
}


class AntreanPage extends React.Component {
    state = {
        inQueue: false,
        currAntrean: 78,
        lastAntrean: 92,
        allowSubmit: false,
        open: false,
    };
    handleTakeQueue = () => {
        this.setState({open: true})
        this.setState({allowSubmit: false})
    };
    handleClose = () => {
        this.setState({open: false});
    };
    handleSubmit = () => {
        this.setState({ open: false,inQueue: true, lastAntrean: this.state.lastAntrean+1})
    };
    handleTextInput = (e, v) => {
        if(v.length > 0) {
            this.setState({allowSubmit: true})
        }
    };



    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={!this.state.allowSubmit}
                onClick={this.handleSubmit}
            />,
        ];
        return(
          <div>
              <h2>Antrean:</h2>
              <br/>
              <br/>
              <br/>
              <h3>No. Antrean yang sedang dilayani :</h3>
              <h2>Q{this.state.currAntrean}</h2>
              <div style={{height: 210}}>
                  <br/>
                  <br/>
                  <GetAntreanToggle inQueue = {this.state.inQueue} />
              </div>
              <RaisedButton fullWidth={true} primary={true} label={"Ambil Antrean: Q"+this.state.lastAntrean} disabled={this.state.inQueue} onClick={this.handleTakeQueue}/>
                <GetAntreanText inQueue={this.state.inQueue}/>
              <Dialog
                  title="Mengambil Antrean"
                  actions={actions}
                  modal={true}
                  open={this.state.open}
                  contentStyle={{width: '100%'}}
              >
                  Deskripsikan Keluhan anda Secara singkat
                  <TextField
                      style={{width: '100%', textAlign: 'center'}}
                      multiLine={true}
                      rows={1}
                      rowsMax={4}
                      onChange={this.handleTextInput}
                  />
              </Dialog>
          </div>


        );
    }
}

export default AntreanPage;