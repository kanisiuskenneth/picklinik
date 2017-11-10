import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';

import AntreanPage from './AntreanPage';
import RiwayatPage from './RiwayatPage';
import JadwalPage from './JadwalPage';
import FarmasiPage from './FarmasiPage';
import FloatingActionButton from 'material-ui/FloatingActionButton';

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
                <Tabs inkBarStyle={{background: '#7C4F29'}} style={{opacity: 1}}
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
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
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
                <FloatingActionButton style={{position: 'fixed', bottom: 20, right: 20, visibility: this.state.cartVisibility, opacity: this.state.cartOpacity}}>
                    <FontIcon className={"material-icons"}>shopping_cart</FontIcon>
                </FloatingActionButton>
            </div>
        );
    }
}