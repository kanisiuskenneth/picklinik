import React from 'react';

var DATA = [{
  "title": "Binding",
  "tags": "Binding Hiding Miding Sliding SAVE",
  "content": "This is the binding content area where information about binding is shown"
}, {
  "title": "Constant",
  "tags": "Math bath slather calf save",
  "content": "This is the Constant content area where information about Constant is shown"
}, {
  "title": "Numbers",
  "tags": "Happy birthday sir and maam",
  "content": "This is the Numbers content area where information about Numbers is shown"
}];

// Table
/*var Table = React.createClass({
  
  render: function() {

    // We need to get each row and store it in an array
    var rowsTitle = [];
    var search = [];
    var searchterm = this.props.searchTerm; // need this or it doesnt work
    var key = '';
    this.props.data.forEach(function(row) {
      if (row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1 && 
          row.tags.toLowerCase().indexOf(searchterm.toLowerCase()) === -1
         )
        return;
  
      // need to grab the correct match
      if (row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1) {
        var m = row.tags.toLowerCase().split(' ');
        for (var i in m)
         if (m[i].indexOf(searchterm.toLowerCase()) !== -1)
            key = m[i];
      } else {
        key = row.title.toLowerCase();
      }
      
      
      
      rowsTitle.push( <TableTitle title = {row.title} />);
      if (searchterm != '')
        rowsTitle.push( <SearchMatch match ={key} />);
      rowsTitle.push( <TableData data = {row.content} />);
      

    });

    // Then render all. Render using childs. Send them prop.title and prop.data
    return ( 
      <div> 
        {rowsTitle} 
      </div>
    );
  }
});*/

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  render() {

    /*var result = [];
    var searchterm = this.props.searchTerm;

    this.props.data.forEach(function(row) {
      if (row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1)
        return;
      else {
        if (searchterm != '')
          result.push(<p>{row.title}</p>);
      }



    });*/


    return (
      <div>
        <h2>Metode Pembayaran</h2>
        <div style={{color: "#00ff00"}}>
          <input type={"radio"} value={"ots"}></input>
          <label>Bayar di tempat</label> <br />
          <input type={"radio"} value={"rs"}></input>
          <label>Bayar di rumah sakit</label> <br />
        </div>
        <h2>Alamat Pengiriman</h2>
        <textarea>
          Jl. Anggrek Kencana no.2
        </textarea>
        <h2>Jumlah Pembayaran</h2>
        <p>Rp 25.000</p>
        <input type={"checkbox"} value={"Saya setuju dengan peraturan yang berlaku"}></input>
        <label>Saya setuju dengan ketentuan yang berlaku</label> <br /> <br />
        <button>Order</button>
      </div>
    );
  }

}

export default Order;