import React from 'react';
import { Link } from 'react-router';
import Single from './Single';
import {Grid, Row, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
var main = {
  maxWidth: 1200,
  margin: '0 auto',
  marginTop: '80px',
  background: '#fff'
}
var form = {
  float: 'right',
  marginBottom: '30px'
}


var hiding = {
   display: 'none'
}

var filterIcon = {
  cursor: 'pointer', 
  float: 'right', 
  height: '20px', 
}


class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filterDropdown: '',
      teamDropdown: '',
      desigDropdown: ''        
    };
  }
  search(event) {
      event.preventDefault();
      this.props.search(this.refs.searching.value);
  }
  selectDesignation(designation) {
  
      if(this.refs[designation].checked == false) {
          this.props.deselectdesignation(designation);
      } else if(this.refs[designation].checked == true) {
          this.props.selectdesignation(designation);
      }
      
  }
  selectTeam(event, item) {
    if(this.refs[item].checked == false) {
            this.props.deselectteam(item);
        } else if(this.refs[item].checked == true) {
            this.props.selectteam(item);
    }
  }
  toggleFilter() {
    if(this.state.filterDropdown.length > 0) {
      this.setState({filterDropdown: ''});
    } else if(this.state.filterDropdown.length == 0) {
      this.setState({filterDropdown: 'show'});
    }
  }
  changeFilterDisplay() {
    if (this.state.filterDropdown.length == 0) {
        return 'hidden';
    }
    else {
      return 'filterShowing';
    }
  }
  changeTeam() {
    if (this.state.teamDropdown.length == 0) {
        return 'hidden';
    }
    else {
      return 'row block';
    }
  }
  selectTeamToggle(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.refs.team.checked == true) {
        this.setState({teamDropdown: 'shown'})
    }
    else {
        this.setState({teamDropdown: ''})
    }
  }
  changeDesignation() {
    if (this.state.desigDropdown.length == 0) {
        return 'hidden';
    }
    else {
      return 'row block';
    }
  }
  selectDesigToggle(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.refs.job.checked == true) {
        this.setState({desigDropdown: 'shown'})
    }
    else {
        this.setState({desigDropdown: ''})
    }
  }
  render() {
    var that = this;
    return (
      <div className="container" style={main}>
        <div className="row" style={{marginBottom: 50, marginRight: '20px'}}>

          <form className="col-md-11" style={{float: 'right', marginTop: '30px'}} 
          onSubmit={this.search.bind(this)}>
            <input type="text" onChange={this.search.bind(this)} 
            ref="searching" placeholder="Enter Employee Name"
            style={{float: 'right', height: '35px'}} className="col-md-6"/>
          </form>

          <div>
            <div className="filterCont">
              <img onClick={this.toggleFilter.bind(this)} 
              src="https://s7.postimg.org/hlkw98pl7/filter.png" 
              style={filterIcon}/>
            </div>

            <div className={that.changeFilterDisplay()}>
            
              <div className="triangle">
              </div>

              <div className="row" style={{margin: '10px', background: '#fff'}}>
                <form className="row col-md-12" style={{margin: '10px'}}>
                  <div className="col-md-6">
                    <input type="checkbox" onClick={() => this.selectTeamToggle(event)} 
                    ref="team" value="team" name="Team"/>
                    <span className="checkboxes">Team</span>
                  </div>
                  <div className="col-md-6">
                    <input type="checkbox" onClick={() => this.selectDesigToggle(event)} 
                      ref="job" value="job" name="Team"/>
                      <span className="checkboxes">Job Title</span>
                  </div>
                </form>

                <div className="col-md-12" style={{height: '2px', background: '#000'}}>
                </div>

                <div className={that.changeDesignation()}>
                  <form className="row col-md-12" style={{margin: '10px'}}>
                    {
                      Object.keys(that.props.employees).map(function(item, index){
                        return <div className="checkbox col-md-6" key={item +index}>
                                  <label>
                                    <input type="checkbox" ref={item}
                                    key={index} value={item} 
                                    onClick={() => that.selectTeam(event, item)}/>
                                      <span className="checkboxes">{item}</span>
                                  </label>
                                </div>
                      })
                    }
                  </form>
                </div>
                <div className="col-md-12" style={{height: '3px', background: '#000'}}>
                </div>
                <div className={that.changeTeam()}>
                  <form className="row col-md-12" style={{margin: '10px'}}>
                    {
                        that.props.employees['team1'].map(function(innItem, i){
                          return <div className="checkbox col-md-6" key={innItem.designation}>
                                    <label>
                                      <input type="checkbox" ref={innItem.designation}  key={i} 
                                      onClick={() => that.selectDesignation(innItem.designation)} 
                                      />
                                      <span className="checkboxes">{innItem.designation}</span>
                                    </label>
                                  </div>
                        })
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{marginBottom: 50, marginRight: '20px'}}>
         {React.cloneElement(this.props.children, this.props)}
        </div>
     </div>
    )
  }
};

export default Main;
