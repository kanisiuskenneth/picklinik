import React from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SearchBar from 'material-ui-search-bar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import {GridList, GridTile} from 'material-ui/GridList';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {shopping} from './data.js';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    border: '1px solid #4C3C1B',
    width: '500px',
    margin: 'auto',
    padding: '5px',
    backgroundColor: '#EFEECB',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class ShoppingGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      daftar: shopping
    }
  }

  handleClick(indeks) {
    shopping.splice(indeks,1);
    this.setState({daftar:shopping});
  }

   render() {

    var daftar = this.state.daftar;
    var total = 0;

    for(var i=0;i<daftar.length;i++) {
      total = total + daftar[i].price;
    }

    return (
      <div>
       <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            <Subheader style={{color:'black'}}>Total Belanja: {daftar.length} buah</Subheader>
            {daftar.map((data,index) => (
              <GridTile
                key={index}
                title={data.title}
                subtitle={<span>Harga: <b>{data.priceText}</b></span>}
                actionIcon={ <RaisedButton 
                                secondary={true}
                                label="Hapus" 
                                labelColor="white" 
                                backgroundColor="red" 
                                style={{width:'20',height:'20'}}
                                onClick={() => this.handleClick(index)} />}>
              <img img src={data.url} alt={data.title} width={200} height={100} />
              </GridTile>
              ))}
            </GridList>
        </div>
        <p>Total harga: Rp {total}</p>
      </div>
    );
  }
 
}


class KeranjangBelanja extends React.Component {

    constructor(props) {
      super(props);
    }

    handleChange(value) {
      this.setState({val: value});
    }

    handleSubmit(value) {
      this.setState({keyword: this.state.val});
    }

    render() {

        return(
          <div>
              <h1>Keranjang Belanja</h1>
		      <div>
          <ShoppingGrid />
		      </div>
		      <br />
		      <NavLink to="/order"><RaisedButton primary={true} label="Checkout" labelColor="white" style={{margin:12}} /></NavLink>
		      <NavLink to="/farmasi"><RaisedButton primary={true} label="Back" labelColor="white" style={{margin:12}} /></NavLink>
          </div>
        );
    }
}

export default KeranjangBelanja;