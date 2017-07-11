import React from 'react'
import { connect } from 'react-redux'
import {aGenericFail,aBoxChange,aFetchUserData} from '../../globals/global-actions'
import wrapper, {selectBox, registerNewBox} from '../../api/index'

function mapDispatchToProps(dispatch){
    return {
        boxChange: (serial) => {
            wrapper(selectBox(serial),aBoxChange, aGenericFail, dispatch);
        },
        dispatchAddNewBox: (serial)=>{
            wrapper(registerNewBox(serial),aFetchUserData, aGenericFail, dispatch);
        }
  }
}
function mapStateToProps(state, ownProps) {
  return {
    boxes: state.global.get('currentUser').get('boxes'),
    currentBox: state.global.get('currentUser').get('currentBox')
  }
}


 class Boxes extends React.Component{

     constructor(props){
         super(props);
         this.onClick = this.onClick.bind(this);
         this.getBoxRender = this.getBoxRender.bind(this);
         this.getSingleBoxRendered = this.getSingleBoxRendered.bind(this);
         this.addNewBoxClick = this.addNewBoxClick.bind(this);
     }

    onClick(event){
        /*event.stopPropagation();*/
        event.preventDefault();
        /*console.log(event.currentTarget);
        console.log(this);*/
        let serial = event.currentTarget.getAttribute('data-serial');
        /*selectBox(event.currentTarget.getAttribute('data-serial'))
            .then(r=>{if(r.ok)return r.json()})
            .then(j=>{console.log(j)});*/
        this.props.boxChange(serial);
        /*console.log(event.target.parentNode);*/
    }

    addNewBoxClick(){
        console.log(this.refs.add_new_box_input_field.value);
        this.props.dispatchAddNewBox(this.refs.add_new_box_input_field.value);
    }
/**/
    getBoxRender(){
        if(this.props.boxes === undefined || this.props.boxes === null)return (<span>there is no love in this part of the city</span>)
        let out=[];

        this.props.boxes.forEach(function(element) {
            let serial = element.serial;
            let name = (element.name !== undefined && element.name && element.name !== '')?element.name:element.serial;
            out.push(this.getSingleBoxRendered(name, serial));
            
        },this);
        return out;
    }

    getSingleBoxRendered(name, serial){
        return (
            <li onClickCapture={this.onClick} data-serial={serial} key={serial}>
                <h4 style={(this.props.currentBox.serial === serial) ? {color: 'red'} : {}}>{name}</h4>
                <span style={{fontSize:'small'}}>{serial}</span>
            </li>
        )
    }

    render(){
        /*console.log(this)*/
        let self = this;
        return(
            <div style={{display:'inline-block', border:'1px solid', margin:'1px', padding: '5px'}}>
                <ul>
                {self.getBoxRender()}
                </ul>
                <div>
                    <input ref='add_new_box_input_field' type='text' /><button onClick={self.addNewBoxClick}>Add new Box</button>
                </div>
            </div>
        );
    }
}export default connect(mapStateToProps,mapDispatchToProps)(Boxes)