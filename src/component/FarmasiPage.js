import React from 'react';
import SearchBar from 'material-ui-search-bar';
import {GridList} from 'material-ui/GridList';

const styles= {
    gridList: {
        width: 400,
        height: 450,
        overflowY: 'auto',
    },
}

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
                   <GridList
                       cellHeight={180}
                       style={styles.gridList}
                   >

                   </GridList>
              </span>
          </div>
        );
    }
}

export default FarmasiPage;