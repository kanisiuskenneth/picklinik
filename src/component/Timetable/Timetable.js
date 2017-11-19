import React from 'react';
import {Table, TableBody, TableHeader, TableRow, TableRowColumn} from 'material-ui/Table';
import {green500, grey500, green100} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';


const uuid = require('uuid/v4');
const styles = {
    cell : {background: green500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height: 15},
    cellDeactivated : {background: grey500, opacity: 0.6, borderLeft: '0.5px solid lightgrey', borderRight: '0.5px solid lightgrey', padding: 0, height:15},
    cellButton : {height: '100%', width: '100%'},
    rowStyles : {height: 15},
    clockStyle: {width: 70, height: 15, paddingLeft: 5, paddingRight: 5},
    topRowCell: {textAlign: 'center', paddingLeft: 'none', paddingRight: 'none'},
    todayTop: {background: green100},
    today: {opacity: 0.8, borderTopColor: 'lightgrey'}
};

const date = new Date();

class Timetable extends React.Component {
    mapDayToString = (day) => {
        switch(day){
            case 0:
                return 'Min';
            case 1:
                return 'Sen';
            case 2:
                return 'Sel';
            case 3:
                return 'Rab';
            case 4:
                return 'Kam';
            case 5:
                return 'Jum';
            case 6:
                return 'Sab';
            default:
                let c = day % 7;
                return this.mapDayToString(c);
        }
    };


    getHeader() {
        let x = date.getDay();
        let arr = [];
        arr.push(<TableRowColumn key={uuid()} style={{...styles.topRowCell, ...styles.todayTop}}>{this.mapDayToString(x)}</TableRowColumn>);
        x = (x+1)%7;
        for(let i = 1;i<7;i++){
            arr.push(<TableRowColumn key={uuid()} style={styles.topRowCell}>{this.mapDayToString(x)}</TableRowColumn>)
            x = (x+1)%7;
        }

        return arr;
    }

    getStyle(row,day) {
        let now = date.getDay();
        if(this.props.data[row][day] === 1 ){
            if(day===now) {
                return{...styles.cell,...styles.today}
            } else {
                return styles.cell;
            }
        } else {
            return styles.cellDeactivated
        }
    }
    getCell(row, x) {
        let style = this.getStyle(row,x);
        return(
        <TableRowColumn key={uuid()} style={style} >
            <FlatButton fullWidth={true} onClick={() => this.props.handleCellClick(row,x)} style={styles.cellButton} disabled={!this.props.data[row][x]}> &nbsp; </FlatButton>
        </TableRowColumn>
        );
    }
    getRow(row) {
        let x = date.getDay();
        let arr = [];

        for(let i = 0; i < 7; i++) {

            arr.push(
                this.getCell(row,x)
            );
            x=(x+1)%7;
        }
        return arr;
    }

    getBody() {
        let ret = [];
        for(let i = 0; i < 9; i++) {
            let sclock = i+7;
            if(i+7<10) {
                sclock = "0" + sclock;
            }

            let eclock = i+8;
            if(i+8<10) {
                eclock = "0" + eclock;
            }

            ret.push(
                <TableRow key={uuid()} style={styles.rowStyles} selectable={false} >
                    <TableRowColumn style={styles.clockStyle}> {sclock}.00-{eclock}.00 </TableRowColumn>
                    {this.getRow(i)}
                </TableRow>
            );
        }
        return ret;
    };

    render() {
        return (
            <Table
                wrapperStyle={{width: 450, overflow: 'scroll'}}
                fixedHeader= {true}
                fixedFooter={true}
            >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                    selectable={false}
                >
                    <TableRow
                        selectable={false}>
                        <TableRowColumn style={styles.clockStyle} />
                        {this.getHeader()}
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    selectable={false}
                >
                    {this.getBody()}
                </TableBody>
            </Table>
        );
    }
}

export default Timetable;