import React from 'react';
import {Table, TableBody, TableHeader, TableRow, TableRowColumn} from 'material-ui/Table';
import {green500, grey500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const styles = {
    cell : {background: green500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height: 15},
    cellDeactivated : {background: grey500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height:15},
    cellButton : {height: '100%', width: '100%'},
    rowStyles : {height: 15},
    clockStyle: {width: 70, height: 15},
    topRowCell: {textAlign: 'center', paddingLeft: 'none', paddingRight: 'none'}
}


class JadwalKlinik extends React.Component {
    state = {
        open: false
    };
    handleCellClick = (e) => {
        this.setState({open: true})
    };
    handleClose = () => {
        this.setState({open: false});
    };
    componentDidMount() {
        console.log(this.props)
    }
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
                <h2 style={{margin: 5}}>Jadwal Klinik</h2>
                <div
                    style={{width: window.innerWidth-20, height: 390, overflow: 'scroll'}}
                >
                    <Table
                        wrapperStyle={{width: 500, overflow: 'scroll'}}
                        fixedHeader= {true}
                        fixedFooter={true}
                        onCellClick= {(row) => console.log(row)}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            enableSelectAll={false}
                            selectable={false}
                        >
                            <TableRow
                                selectable={false}>
                                <TableRowColumn style={{width:70}} />
                                <TableRowColumn style={styles.topRowCell}>Sen</TableRowColumn>
                                <TableRowColumn style={styles.topRowCell}>Sel</TableRowColumn>
                                <TableRowColumn style={styles.topRowCell}>Rab</TableRowColumn>
                                <TableRowColumn style={styles.topRowCell}>Kam</TableRowColumn>
                                <TableRowColumn style={styles.topRowCell}>Jum</TableRowColumn>
                                <TableRowColumn style={styles.topRowCell}>Sab</TableRowColumn>
                                <TableRowColumn style={styles.topRowCell}>Min</TableRowColumn>
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
                                <TableRowColumn style={styles.clockStyle}>14.00-15.00</TableRowColumn>
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
                                <TableRowColumn style={styles.clockStyle}>15.00-16.00</TableRowColumn>
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
                        </TableBody>
                    </Table>
                </div>
                <RaisedButton
                    primary={true}
                    fullWidth={true}
                    style={{marginTop: 10}}
                    onClick={this.props.showJadwalDokter}
                    labelColor={"white"}
                    label={"Jadwal Dokter"}
                />

                <div>
                    <Dialog
                        title="Reservasi Jadwal Poliklinik"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        Apakah anda ingin mereservasi Poliklinik pada pukul 07.00 hari Senin
                    </Dialog>
                </div>

            </div>

        );
    }
}

export default JadwalKlinik;