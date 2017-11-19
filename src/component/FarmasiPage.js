import React from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SearchBar from 'material-ui-search-bar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import {GridList, GridTile} from 'material-ui/GridList';
import {grey50, green500} from 'material-ui/styles/colors'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import KeranjangBelanja from './Belanja';
import Order from './Order';

import {shopping, DATA} from './data';

var searching = [];
var searchList = [];

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
      alignContent: 'top',
    width: '95vw',
    margin: 'auto',
    padding: '5px',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const borderStyle = {
  border: '1px solid #4C3C1B',
  padding: '5px',
  width: '300px',
  backgroundColor: '#EFEECB'
}

class ProductGrid extends React.Component {

   render() {

    var daftar = this.props.result; 

    return (
       <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
        {daftar.map((data,index) => (
          <GridTile
            key={index}
            title={data.title}
            subtitle={<span><b>{data.priceText}</b></span>}
            actionIcon={<BuyButton shopping={data} />}
          >
          <img src={data.url} />
        </GridTile>
      ))}
    </GridList>
  </div>
    );
  }
 
}

class BuyButton extends React.Component {

  handleClick(data) {
    shopping.push(data);
  }

  render() {
    
    return (
        <IconButton iconStyle={{color: grey50}} iconClassName={'flaticon-add-to-shopping-cart'} onClick={() => this.handleClick(this.props.shopping)} />
    );
    
  }
  
}



class SearchResult extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  click(idx) {
    shopping.push(<p>{DATA[idx].title}</p>);
    shopping.push(<img src={DATA[idx].url} alt={DATA[idx].title} width={200} height={100}></img>);
    shopping.push(<p>{DATA[idx].price}</p>);
    console.log('click');
  }

  render() {

    var searchterm = this.props.searchTerm;
    var temp = "";

    searching = [];

    for(var i=0;i<DATA.length;i++) {
        if (DATA[i].title.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1) {
            searching.push(DATA[i]);
        }
    }

    return (
      <div> <ProductGrid result={searching} /> </div>
    );
  }
}

class SearchPage extends React.Component {

   state = {
        keyword: ""
    };

  handleChange(value) {
      this.setState({keyword: value});
    }

  render() {
    return (
        <div>
          <span>
            <SearchBar
              style={{margin: "auto"}}
              onChange={(value) => this.handleChange(value)}
              onRequestSearch={() => 1}
            />
          </span>
          <br />
          <SearchResult data={DATA} searchTerm={this.state.keyword} />
        </div>
      );
    
  }

}

class FarmasiPage extends React.Component {

    render() {

        return(
          <HashRouter>
            <div>
                <div className="content">
                  <Route exact path="/farmasi" component={SearchPage}/>
                  <Route path="/belanja" component={KeranjangBelanja}/>
                  <Route path="/order" component={Order}/>
                </div>
            </div>
          </HashRouter>
        );
    }
}

export default FarmasiPage;