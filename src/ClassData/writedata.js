import React,{Component,Fragment,useState} from'react';
import PropTypes from 'prop-types';
import {Button ,makeStyles,TextField} from'@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
// import SaveIcon from "@material-ui/icons/Save"

const styles = (theme) => ({
    input: {
        display: 'none'
    }
});


class WriteData extends Component{
    state={
        uploadFiles :[]
    }
        static propTypes = {
            classes: PropTypes.object.isRequired};

     


    handleSubjectChange=()=>{
    
    }

    handleImageChange=(event)=>{
       
        console.log(document.getElementById('icon-button-photo').files);
    }

    handleIntrChange=()=>{

    }



    render(){
        const { classes } = this.props;
        return(
            <div style={{width:900}}>
                <br></br><br></br><br></br><br></br>
                <h1>수업 자료</h1>
                <br></br>
                <TextField
              id="outlined-read-only-input"
              label="제목"
              variant="outlined"
              onChange={this.handleSubjectChange.bind(this)}
              required
              style={{ margin: "8px", width: "400px" }}
            />
            <hr/>
            <Fragment>
                <input
                className={classes.input}
                id="icon-button-photo"
                onChange={this.handleImageChange.bind(this)}
                type="file"

                multiple
                />
                <label htmlFor="icon-button-photo">
                    <Button color="primary" component="span" startIcon={<DescriptionIcon/>}>
                        파일 선택
                    </Button>
                </label>
            </Fragment>
            <hr/>
            <TextField
            id="outlined-multiline-static"
            label="소개"
            required
            multiline
            rows={9}
            variant="outlined"
            style={{ width: "800px", zIndex: "0" }}
            onChange={this.handleIntrChange.bind(this)}
          />
          <br></br><br></br>

            <div style={{marginLeft:"650px"}}>
          <Button variant="contained" color="primary">
           등록
          </Button> &nbsp;&nbsp;

          <Button variant="contained" color="primary" href="/classdata">
           목록
          </Button> &nbsp;&nbsp;
          </div>
            </div>
        )
    }
}
export default withStyles(styles)(WriteData);