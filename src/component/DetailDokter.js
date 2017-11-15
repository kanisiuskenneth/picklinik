import React from 'react';
import Avatar from 'material-ui/Avatar';
import {green500, grey500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import johnDoe from '../res/images/1_widget_john-doe.png';
import FontIcon from 'material-ui/FontIcon'
import {Table, TableBody, TableHeader, TableRow, TableRowColumn} from 'material-ui/Table';


const styles = {
    cell : {background: green500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height: 15},
    cellDeactivated : {background: grey500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height:15},
    cellButton : {height: '100%', width: '100%'},
    rowStyles : {height: 15},
    clockStyle: {width: 70, height: 15},
    topRowCell: {textAlign: 'center', paddingLeft: 'none', paddingRight: 'none'}
};

class JadwalDokterList extends React.Component {
    state = {
        open: false,
    };

    handleClose = (e) => {
        this.setState({open: false});
    };

    handleCellClick = (e) => {
        this.setState({open: true})
    };

    render() {
        const actions = [
            <FlatButton
                label="Tidak"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Ya"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        return(
            <div>
                <div style={{width: '100%', textAlign: 'left'}}>
                <FlatButton
                    target="_blank"
                    style={{textAlign: 'left'}}
                    label="Kembali"
                    icon={<FontIcon className="material-icons">arrow_back</FontIcon>}
                    onClick={this.props.showListDokter}
                />
                </div>
                <div>
                    <Avatar src={johnDoe} size={96}/>
                </div>
                <div>
                    <h3 style={{margin: 0}}>John Doe</h3>
                </div>
                <div
                    style={{width: window.innerWidth-20, height: 400, overflow: 'scroll'}}
                >
                    <Table
                        wrapperStyle={{width: 500, overflow: 'scroll'}}
                        fixedHeader= {true}
                        fixedFooter={true}
                        striped
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            enableSelectAll={false}
                            selectable={false}
                        >
                            <TableRow
                                selectable={false}>
                                <TableRowColumn style={{width:100}} />
                                <TableRowColumn>Sen</TableRowColumn>
                                <TableRowColumn>Sel</TableRowColumn>
                                <TableRowColumn>Rab</TableRowColumn>
                                <TableRowColumn>Kam</TableRowColumn>
                                <TableRowColumn>Jum</TableRowColumn>
                                <TableRowColumn>Sab</TableRowColumn>
                                <TableRowColumn>Min</TableRowColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            selectable={false}
                        >
                            <TableRow
                                style={styles.rowStyles}
                                selectable={false}
                            >
                                <TableRowColumn style={styles.clockStyle}>07.00-08.00</TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>

                            </TableRow>
                            <TableRow
                                style={styles.rowStyles}
                                selectable={false}
                            >
                                <TableRowColumn style={styles.clockStyle}>08.00-09.00</TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow
                                style={styles.rowStyles}
                                selectable={false}
                            >
                                <TableRowColumn style={styles.clockStyle}>09.00-10.00</TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick}>&nbsp;</FlatButton>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow
                                style={styles.rowStyles}
                                selectable={false}
                            >
                                <TableRowColumn style={styles.clockStyle}>10.00-11.00</TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow
                                style={styles.rowStyles}
                                selectable={false}
                            >
                                <TableRowColumn style={styles.clockStyle}>11.00-12.00</TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cell}>
                                    <FlatButton fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow
                                style={styles.rowStyles}
                                selectable={false}
                            >
                                <TableRowColumn style={styles.clockStyle}>12.00-13.00</TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>


                            </TableRow>
                            <TableRow
                                style={styles.rowStyles}
                                selectable={false}
                            >
                                <TableRowColumn style={styles.clockStyle}>13.00-14.00</TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow
                                style={styles.rowStyles}
                                selectable={false}
                            >
                                <TableRowColumn style={styles.clockStyle}>14.00-15.00</TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow
                                style={styles.rowStyles}
                                selectable={false}
                            >
                                <TableRowColumn style={styles.clockStyle}>15.00-16.00</TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                                <TableRowColumn style={styles.cellDeactivated}>
                                    <FlatButton disabled={true} fullWidth={true} onClick={this.handleCellClick} style={styles.cellButton}>&nbsp;</FlatButton>
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <Dialog
                    title="Reservasi Jadwal Poliklinik"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Apakah anda ingin reservasi bertemu dengan dr. John Doe pada pukul 07.00 hari Senin
                </Dialog>
            </div>
        );
    }
}

export default JadwalDokterList;