import React from 'react';
import firebase from 'firebase';
import CircularProgress from 'material-ui/CircularProgress'
import Paper from 'material-ui/Paper'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import * as uuid from 'uuid/v4'

const styles = {
    cell: {paddingLeft: 0, paddingRight: 0, textAlign: 'center'}
};

class MedicalRecordTable extends React.Component {
    getBody() {
        let arr = [];
        this.props.data.map( (item)=>{
            let x = new Date(item.date);
            arr.push(
                <TableRow key={uuid()} selectable={false} >
                    <TableRowColumn key={uuid()} style={styles.cell}>{x.getDate()}/{x.getMonth()+1}/{x.getFullYear()}</TableRowColumn>
                    <TableRowColumn key={uuid()} style={{...styles.cell,...{width: 40}}}>{item.type}</TableRowColumn>
                    <TableRowColumn key={uuid()} style={styles.cell}>{item.diagnose}</TableRowColumn>
                    <TableRowColumn key={uuid()} style={styles.cell}>
                        <ol style={{marginLeft: '-1rem'}}>
                        {item.medicines.map((item)=>
                            <li key={uuid()}>{item}</li>
                        )}
                        </ol>
                    </TableRowColumn>
                </TableRow>
            )
        })
        return arr;
    }
    render() {
        return(
        <Table selectable={false} wrapperStyle={{width: '95%', margin: 'auto'}}>
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
                selectable={false}
                >
                <TableRow>
                    <TableHeaderColumn style={styles.cell}>Tanggal</TableHeaderColumn>
                    <TableHeaderColumn style={{...styles.cell,...{width: 40}}}>Poli</TableHeaderColumn>
                    <TableHeaderColumn style={styles.cell}>Diagnosis</TableHeaderColumn>
                    <TableHeaderColumn style={styles.cell}>Obat</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
                stripedRows={true}
                displayRowCheckbox={false}
                selectable={false}
            >
                {this.getBody()}
            </TableBody>
        </Table>
        );
    }
}


class RiwayatPage extends React.Component {
    state = {
        data: null,
    };
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
               firebase.database().ref("users/"+user.uid).on("value", (snapshot) => {
                   this.setState({data: snapshot.val()});
               });
            } else {
                // No user is signed in.
            }
        });
    }
    getData() {
        if(!this.state.data) {
            return (
                <Paper circle={true} zdepth={5} style={{height:40, width: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', justifySelf: 'center', margin: 'auto'}}>
                    <CircularProgress size={30} />
                </Paper>
            )
        } else {
            return (
                <MedicalRecordTable data={this.state.data.medical_history} />
            )
        }
    }

    render() {
        return(
            <div>
              <h3>
                  Tabel Rekam Medis
              </h3>
                {this.getData()}
            </div>
        );
    }
}

export default RiwayatPage;