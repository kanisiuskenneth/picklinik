import React from 'react';
import {green500, grey500} from 'material-ui/styles/colors'
import JadwalDokterList from './JadwalDokterList'
import DetailDokter from './DetailDokter';

const styles = {
    cell : {background: green500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height: 15},
    cellDeactivated : {background: grey500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height:15},
    cellButton : {height: '100%', width: '100%'},
    rowStyles : {height: 15},
    clockStyle: {width: 90, height: 15}
}


class JadwalDokter extends React.Component {

    showDokterDetail = (data) => {
        this.setState({currentPage: <DetailDokter {...this.props} doctorData={data} showListDokter={this.showListDokter} {...this.props} />})
    };

    showListDokter = () => {
        this.setState({currentPage: <JadwalDokterList {...this.props} showDokterDetail={this.showDokterDetail} />})
    };

    state = {
        currentPage: <JadwalDokterList {...this.props} showDokterDetail={this.showDokterDetail}/>
    }



    render() {
        return(
            this.state.currentPage
        );
    }
}

export default JadwalDokter;