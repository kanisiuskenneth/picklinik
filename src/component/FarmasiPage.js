import React from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SearchBar from 'material-ui-search-bar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import DatePicker from 'material-ui/DatePicker'


class FarmasiPage extends React.Component {

    state = {
        value: 1,
    };



    handleChange = (event, index, value) => this.setState({value});

    render() {
        return(
          <div >
              <span>
                 <SearchBar
                     onRequestSearch={() => console.log('onRequestSearch')}
                     onChange={() => console.log('onChange')}
                 />
              </span>
          </div>
        );
    }
}

export default FarmasiPage;