import React from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SearchBar from 'material-ui-search-bar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import {
  Step,
  Stepper,
  StepLabel,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';

import {ShoppingGrid} from './Belanja';

const styles = {
  block: {
    backgroundColor:'#f1f1f1',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    margin:'auto',
    maxWidth:250,
    paddingTop: 5,
    paddingBottom: 5,
  },
  radioButton: {
    margin: 'auto',
    marginTop: 20,
    marginBottom: 16,
    maxWidth: 220,
  },
  cekList: {
    margin: 'auto',
    maxWidth: 400,
  },
  teksArea: {
    width: 400,
    height: 100,
    fontSize: 14,
  }
};

var alamatUser = "Jl. Anggrek Kencana";

class PaymentMethod extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  render() {

    return (
        <div style={styles.block}>
            <RadioButtonGroup name="payment" defaultSelected="ots">
              <RadioButton value="ots" label="Bayar di Tempat" style={styles.radioButton} labelStyle={{textAlign:'left'}}></RadioButton>
              <RadioButton value="rs" label="Bayar di Rumah Sakit"  style={styles.radioButton} labelStyle={{textAlign:'left'}}></RadioButton>
            </RadioButtonGroup>
        </div>
    );
  }
}

class CekList extends React.Component {

  render() {
    return (
      <div>
        <Checkbox
          label={this.props.nama}
          onCheck={this.props.onCheck}
          style={styles.cekList}
        />
      </div>
    );
  }
}

class VerticalLinear extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
    checked: false,
    isTyped: true,
  };

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex, agree} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Confirm' : 'Next'}
          disabled={stepIndex === 2 ? !this.state.checked : false}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 800, maxHeight: 400, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Pilih Metode Pembayaran
            </StepButton>
            <StepContent>
              <PaymentMethod />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Masukkan Alamat Pembayaran
            </StepButton>
            <StepContent>
              <textarea defaultValue={alamatUser} style={styles.teksArea}></textarea>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Konfirmasi Pemesanan
            </StepButton>
            <StepContent>
              <h2>Jumlah Pembayaran</h2>
              <ShoppingGrid />
              <CekList nama="Saya setuju dengan ketentuan yang berlaku" onCheck={this.updateCheck.bind(this)}></CekList>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <div style={{margin: '20px 0', textAlign: 'center'}}>
            <p>Barang berhasil dipesan!</p>
            <NavLink to="/farmasi"><RaisedButton label="Back" /></NavLink>
          </div>
        )}
      </div>
    );
  }
}

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  render() {

    return (
      <VerticalLinear />
    );
  }
}

export default Order;