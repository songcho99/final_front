import React,{Component,Fragment,useState} from'react';
import PropTypes from 'prop-types';
import {Button ,makeStyles,TextField} from'@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import axios from 'axios';
// import SaveIcon from "@material-ui/icons/Save"

const styles = (theme) => ({
    input: {
        display: 'none'
    }
});

const uploadFiles=[];

class WriteData extends Component{
    state={
        classdata_subject : '',
        classdata_content : '',
        uploadlength:0
    }
        static propTypes = {
            classes: PropTypes.object.isRequired};

    handleSubjectChange=(e)=>{
        e.preventDefault();
        this.setState({
            classdata_subject: e.target.value
        })
        console.log("제목: "+this.state.classdata_subject)
    }

    handleImageChange=(e)=>{
        e.preventDefault();
        let length = 0;
       for(let i=0;i<document.getElementById('icon-button-photo').files.length;i++)
       { 
            uploadFiles.push(document.getElementById('icon-button-photo').files[i]);
            length++;
       }
       this.setState({
           uploadlength : length
       })
       
        console.log(uploadFiles);
    }

    handleIntrChange=(e)=>{
        e.preventDefault();
        this.setState({
            classdata_content: e.target.value
        })
        console.log("자료 소개: "+this.state.classdata_content)

    }

    isUpload=(e)=>{
        e.preventDefault();
        
        const data=new FormData();
        data.append('classdata_subject',this.state.classdata_subject)
        data.append('classdata_content',this.state.classdata_content)
        for(let i=0;i<document.getElementById('icon-button-photo').files.length;i++)
        {
            data.append('uploadFiles',uploadFiles[i]);
        }
        data.append('classdata_member_num',localStorage.num)
        data.append('classdata_writer',localStorage.name)
        let url= "http://localhost:8000/controller/classdata/insertclassdata"
        axios.post(url,data)
        .then((res)=>{
            window.location.href="/";
        }).catch(err=>{
            console.log("업로드 오류: "+err)
        })
        
        // FormData의 key 확인
            for (let key of data.keys()) {
            console.log(key);
            }
  
            // FormData의 value 확인
            for (let value of data.values()) {
                console.log(value);
            }
    }



    render(){
        const { classes } = this.props;
        
        return(
            <div style={{width:900}}>
                <form className="writeinsert" onSubmit={this.isUpload.bind(this)}>
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
            <b style={{color:"blue"}}>{this.state.uploadlength}개의 파일이 선택되었습니다</b>
            <hr/>


            <TextField
            id="outlined-multiline-static"
            label="소개"
            required
            multiline
            rows={9}
            variant="outlined"
            style={{ width: "800px", zIndex: "0" }}
            onKeyUp={this.handleIntrChange.bind(this)}
          />
          <br></br><br></br>

            <div style={{marginLeft:"650px"}}>
          <Button variant="contained" color="primary" type="submit">
           등록
          </Button> &nbsp;&nbsp;

          <Button variant="contained" color="primary" href="/classdata">
           목록
          </Button> &nbsp;&nbsp;
          </div>
          </form>
            </div>
            
        )
    }
}
export default withStyles(styles)(WriteData);