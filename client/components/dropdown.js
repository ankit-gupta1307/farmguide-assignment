import React from 'react';

class Dropdowns extends React.Component{
    render() {
        return (
            <div className={this.props.classes} 
                style={{margin: '10px'}}>
                <div className="arrow-left"></div>
                <div className="row" 

                    style={{background: '#fff', margin: '10px', marginLeft: '20px', padding: '5px'}}>
                    <div className="col-md-4" style={{paddingLeft: 0, paddingRight: '4px'}}>
                    <img src={this.props.source} 
                    style={{width: '70px', height: '40px'}}/>
                    </div>
                    <div className="col-md-8" 
                    style={{textAlign: 'left', paddingLeft: '0', color: '#000'}}>
                    <div className="col-md-12 dropdownName">
                        {this.props.name} 
                    </div>
                    <div className="col-md-12 genPad"
                        style={{ color: '#000'}}>
                        {this.props.desig} 
                    </div>
                    </div>
                    <div className="col-md-12 genPad" 
                        style={{color: '#cecece'}}>
                        TEAM
                    </div>
                    <div className="col-md-12 proTeam">
                        {this.props.team} 
                    </div>
                    <div className="col-md-12 genPad" 
                        style={{color: '#cecece'}}>
                        PROJECT
                    </div>
                    <div className="col-md-12 proTeam">
                        {this.props.project} 
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdowns;
