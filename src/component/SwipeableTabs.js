import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';

import AntreanPage from './AntreanPage';
import RiwayatPage from './RiwayatPage';
import JadwalPage from './JadwalPage';
import FarmasiPage from './FarmasiPage';
import FarmasiPageActions from './FarmasiPageActions';

import {NavLink} from "react-router-dom";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
    },
    slide: {
        padding:  5,
        height: window.innerHeight - (50+72+10),
        overflow: 'scroll'
    },
};

export default class SwipeableTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: this.getIndexFromPath(this.props.location.pathname),
            cartVisibility: 'hidden',
        };
    }

    componentDidMount() {
        this.setState({slideIndex: this.getIndexFromPath(this.props.location.pathname)});
        this.props.handleTitleChange(this.getTitleFromIndex(this.state.slideIndex));
        this.handleCartVisibility(this.getIndexFromPath(this.props.location.pathname))
        this.props.history.listen((location)=> {
            if(location.pathname === '/farmasi') {
                this.handleCartVisibility(3);
            } else {
                this.handleCartVisibility(1)
            }
        })
    }

    handleCartVisibility = (value) => {
        if(value === 3) {
            this.setState({cartVisibility: 'visible', cartOpacity: 1})
        } else {
            this.setState({cartVisibility: 'hidden', cartOpacity: 0})
        }
    }

    getIndexFromPath = (x) => {
        switch (x) {
            case "/antrean":
                return 0;
            case "/jadwal":
                return 1;
            case "/riwayat":
                return 2;
            case "/farmasi":
                return 3;
            default:
                return 0;
        }
    };
    getTitleFromIndex = (value) => {
        switch (value) {
            case 0:
                return "Antrean";
            case 1:
                return "Jadwal";
            case 2:
                return "Riwayat";
            case 3:
                return "Farmasi";
            default:
                return "Picklinik"
        }

    };
    getLinkFromIndex = (value) => {
        switch (value) {
            case 0:
                return "/antrean";
            case 1:
                return "/jadwal";
            case 2:
                return "/riwayat";
            case 3:
                return "/farmasi";
            default:
                return "/"
        }
    };

    handleChange = (value) => {
        this.props.handleTitleChange(this.getTitleFromIndex(value));
        const title = this.getLinkFromIndex(value);
        this.setState({
            slideIndex: value,
        });
        if(this.props.location.pathname !== title)
            this.props.history.push(title);
        this.handleCartVisibility(value);
    };


    render() {
        return (
            <div>
                <Tabs inkBarStyle={{}} style={{opacity: 1}}
                      onChange={this.handleChange}
                      value={this.state.slideIndex}
                >
                <Tab icon={<FontIcon className="flaticon-line"/>}  value={0} label="Antrean"
                />
                <Tab icon={<FontIcon className="flaticon-calendar"/>} value={1} label="Jadwal"
                     />
                <Tab icon={<FontIcon className="flaticon-medical-history"/>} value={2} label="Riwayat"

                />
                <Tab icon={<FontIcon className="flaticon-tablet-and-pill"/>} value={3} label="Farmasi"
                />
            </Tabs>
                <SwipeableViews
                    style={{maxWidth: 600, margin: 'auto'}}
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div style={styles.slide}>
                        <AntreanPage {...this.props}/>
                    </div>
                    <div style={styles.slide}>
                        <JadwalPage {...this.props}/>
                    </div>
                    <div style={styles.slide}>
                        <RiwayatPage {...this.props}/>
                    </div>
                    <div style={styles.slide}>
                        <FarmasiPage {...this.props}/>
                    </div>
                </SwipeableViews>
                <FarmasiPageActions cartVisibility = {this.state.cartVisibility} cartOpacity={this.state.cartOpacity} {...this.props} />
            </div>
        );
    }
}