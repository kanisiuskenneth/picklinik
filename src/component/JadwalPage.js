import React from 'react';
import JadwalKlinik from "./JadwalKlinik";
import JadwalDokter from "./JadwalDokter";


class JadwalPage extends React.Component {
    showJadwalDokter = () => {
        console.log("Called");
        this.setState({currPage: <JadwalDokter showJadwalKlinik={this.showJadwalKlinik} />})
    };
    showJadwalKlinik = () => {
        this.setState({currPage: <JadwalKlinik showJadwalDokter={this.showJadwalDokter} />})
    };

    state = {
        currPage : <JadwalKlinik showJadwalDokter={this.showJadwalDokter}/>
    };


    render() {
        return(
            this.state.currPage
        );
    }
}

export default JadwalPage;