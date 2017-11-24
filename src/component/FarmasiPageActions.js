import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import {NavLink} from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon'
import {green500, grey50} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
class FarmasiPageActions extends React.Component{
    state = {
        photoUpload: false,
        open: false
    }
    handleOpen = () => {
        this.setState({open: true})
    }
    handleSubmit = () => {
        this.props.history.push("/processing_prescription")
    }
    handleClose = () => {
        this.setState({open: false})
    }
    handleUpload = () => {
        this.setState({photoUpload: true})
    }
    render() {
        return(
        <div>
            <NavLink to="/belanja">
                <FloatingActionButton style={{position: 'fixed', bottom: 20, right: 20, visibility: this.props.cartVisibility,
                    opacity: this.props.cartOpacity}}>
                    <FontIcon className={"material-icons"}>shopping_cart</FontIcon>
                </FloatingActionButton>
            </NavLink>
            <FloatingActionButton style={{position: 'fixed', bottom: 20, left: 20, visibility: this.props.cartVisibility,
                opacity: this.props.cartOpacity}} onClick={this.handleOpen}>
                <FontIcon className={"flaticon-prescription"} />
            </FloatingActionButton>

            <div>
                <Dialog
                    title="Masukkan Resep"
                    actions={[
                        <FlatButton
                            label="Batal"
                            primary={true}
                            onClick={this.handleClose}
                        />,
                        <FlatButton
                            label="Lanjut"
                            primary={true}
                            onClick={this.handleSubmit}
                            disabled={!this.state.photoUpload}
                        />,
                    ]}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Masukkan Resep Dokter untuk diproses oleh Apoteker
                    <br/>
                    <br/>

                    <label htmlFor="uploader" style={{width: "95%", height: "fit-content", display: 'block', background: green500, color: grey50, padding: 10, borderRadius: 3, textAlign: "center"}}>
                        <FontIcon className={"material-icons"} style={{verticalAlign: "middle", color: grey50}}>photo_camera</FontIcon>
                        &nbsp;
                        Upload Resep
                    </label>
                    <input id={"uploader"} style={{visibility: "hidden"}} type="file" onChange={this.handleUpload} accept={"image/*; capture=camera"} />
                </Dialog>
            </div>
        </div>
        );
    }
}
export default FarmasiPageActions;