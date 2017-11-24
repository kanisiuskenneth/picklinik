import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {GridList, GridTile} from 'material-ui/GridList';
import {NavLink} from "react-router-dom";
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import {shopping} from './data.js';
import {red500} from 'material-ui/styles/colors'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '95%',
    margin: 'auto',
    padding: '5px',
  },
  gridList: {
    width: 500,
    height: 250,
    overflowY: 'auto',
  },
};

export class ShoppingGrid extends React.Component {

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
      total = total + (daftar[i].price *  daftar[i].qty);
    }

    return (
      <div>
       <div style={styles.root}>
          <List
            cellHeight={180}
            style={styles.gridList}
          >
            {daftar.map((data,index) => (
              <ListItem
                key={index}
                primaryText={data.title}
                leftAvatar={<Avatar src={data.url} size={50} />}
                secondaryText={<span>{data.qty} x <b>{data.priceText}</b></span>}
                rightIconButton={ <IconButton
                                    iconClassName={'material-icons'}
                                    style={{width:'20',height:'20'}}
                                    tooltip={"Hapus"}
                                    iconStyle={{color: red500}}
                                    onClick={() => this.handleClick(index)}>cancel</IconButton>}
                style={{textAlign: 'left'}}
              >
              </ListItem>
              ))}
            </List>
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
              <h3>Keranjang Belanja</h3>
		      <div>
          <ShoppingGrid />
		      </div>
		      <br />
		      <NavLink to="/farmasi"><RaisedButton primary={true} label="Back" labelColor="white" style={{margin:12}} /></NavLink>
              <NavLink to="/order"><RaisedButton primary={true} label="Checkout" disabled={!shopping.length} labelColor="white" style={{margin:12}} /></NavLink>

          </div>
        );
    }
}

export default KeranjangBelanja;