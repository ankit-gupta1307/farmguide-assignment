import React from 'react';
import {Col} from 'react-bootstrap';
import Dropdowns from './dropdown';

var style= {
  width: 200,
  height: 150,
  background: '#cecece',
  marginBottom: 80,
  float: 'right',
  zIndex: 11
}

var shown = {
    position: 'absolute',
    top: '1000px',
    left: '1000px',
    height: '100px', 
    width: '200px', 
    background: 'orange', 
    zIndex: '100', 
    display: 'block'
}
var hidden = {
    display: 'none'
}


class Single extends React.Component{
  constructor(props) {
    super(props);
    this.state = {dropdown: ''
                 };
  }
  onMouseEnter(key) {
    let that = this;
    let clicked;
     Object.keys(this.props.employees).forEach(function(item, index) {
        that.props.employees[item].filter(function(innItem, i) {
          if(key == innItem.id) {
             clicked = key
          }
        })
    })
    this.setState({
      dropdown: clicked
    })
  }
  onMouseLeave() {
    this.setState({
      dropdown: ''
    })
  }

  changeDisplay(key) {
    if (this.state.dropdown === key) {
        return 'row shown';
    }
    else {
      return 'hidden';
    }
  }

  drag(event, id) {
    console.log(event);
    // event.dataTransfer.setData("text", id);
    console.log(event.dataTransfer);
  }
  
  render() {
    var that = this;
    return (
      <div className="row">
        {
          Object.keys(this.props.employees).map(function(item, index) {
          return <Col md={4} key={item}>
            <div style={style}>
              {
               that.props.employees[item].map(function(innItem, i) {
               return <div className={innItem.position} key={i} id={i}
               onMouseEnter={() => that.onMouseEnter(innItem.id)}  
               onMouseLeave={() => that.onMouseLeave()}>
                      <Dropdowns 
                        classes={that.changeDisplay(innItem.id)}
                        source={that.props.employees[item][i].src} 
                        name= {that.props.employees[item][i].name}
                        desig={that.props.employees[item][i].designation}
                        team={that.props.employees[item][i].team}
                        project={that.props.employees[item][i].project}
                        >

                      </Dropdowns>
                      
                </div>
               })
              }
            </div>
          </Col>

          })
        }
      </div>
      
    )
  }
};

export default Single;
