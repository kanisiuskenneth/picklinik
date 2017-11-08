import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

export default class SwipeableTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

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
        }

    };

    handleChange = (value) => {
        this.props.handleTitleChange(this.getTitleFromIndex(value));
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <Tabs inkBarStyle={{background: '#C0185C'}} style={{opacity: 1}}
                      onChange={this.handleChange}
                      value={this.state.slideIndex}
                >
                <Tab icon={<FontIcon className="flaticon-line"/>}  value={0} label="Antrean" />
                <Tab icon={<FontIcon className="flaticon-calendar"/>} value={1} label="Jadwal" />
                <Tab icon={<FontIcon className="flaticon-medical-history"/>} value={2}label="Riwayat" />
                <Tab icon={<FontIcon className="flaticon-tablet-and-pill"/>} value={3} label="Farmasi" />
            </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br />
                    </div>
                    <div style={styles.slide}>
                        slide n°2
                    </div>
                    <div style={styles.slide}>
                        slide n°3
                    </div>
                    <div style={styles.slide}>
                        slide n°4
                    </div>

                </SwipeableViews>
            </div>
        );
    }
}