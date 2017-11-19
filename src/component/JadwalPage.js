import React from 'react';
import JadwalKlinik from "./JadwalKlinik";
import JadwalDokter from "./JadwalDokter";


class JadwalPage extends React.Component {
    showJadwalDokter = () => {
        console.log("Called");
        this.setState({currPage: <JadwalDokter showJadwalKlinik={this.showJadwalKlinik} {...this.props} />})
    };
    showJadwalKlinik = () => {
        this.setState({currPage: <JadwalKlinik showJadwalDokter={this.showJadwalDokter} {...this.props}/>})
    };

    state = {
        currPage : <JadwalKlinik showJadwalDokter={this.showJadwalDokter} {...this.props}/>
    };


    render() {
        return(
            this.state.currPage
        );
    }
}

export default JadwalPage;