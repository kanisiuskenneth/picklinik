import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import defaultImage from '../res/images/default-avatar.png';
import johnDoe from '../res/images/1_widget_john-doe.png';

import MaterialSearchBar from 'material-ui-search-bar';


class JadwalDokterList extends React.Component {
    state = {
        open: false
    };
    componentWillMount() {
        console.log(this.props);
    }
    handleCellClick = (e, value) => {
        this.setState({open: true})
    };
    handleClose = () => {
        this.setState({open: false});
    };
    render() {

        return(
            <div>
                <h2 style={{marginTop: 5, marginBottom: 5}}>Jadwal Dokter</h2>
                <MaterialSearchBar
                    onChange= {() => console.log("changed")}
                    onRequestSearch={() => console.log("requested")}
                />
                <div  style={{height: 353, overflow: 'scroll'}}>
                    <List>
                        <ListItem
                            primaryText="dr. Brendan Lim"
                            leftAvatar={<Avatar src={defaultImage} />}
                            style={{textAlign: 'left'}}
                            secondaryText={
                                <p>
                                    Dokter Umum, pengalaman kerja 10 tahun
                                </p>
                            }
                        />
                        <ListItem
                            primaryText="dr. John doe"
                            leftAvatar={<Avatar src={johnDoe} />}
                            style={{textAlign: 'left'}}
                            onClick={this.props.showDokterDetail}
                            secondaryText={
                                <p>
                                    Dokter Umum, pengalaman kerja 20 tahun
                                </p>
                            }
                        />
                    </List>
                </div>
                <RaisedButton
                    primary={true}
                    fullWidth={true}
                    labelColor={"white"}
                    label={"Jadwal Klinik"}
                    onClick={this.props.showJadwalKlinik}
                />
            </div>
        );
    }
}

export default JadwalDokterList;