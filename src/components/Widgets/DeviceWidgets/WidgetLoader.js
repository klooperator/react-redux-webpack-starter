import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
 import 'whatwg-fetch'


function mapStateToProps(state, ownProps) {
  return {
    types: state.global.get('currentUser').get('typesAll'),
    attributes: state.global.get('currentUser').get('attributesFull')
  }
}

class WidgetLoader extends React.Component{

    constructor(props){
        super(props);
        this.getWidgets = this.getWidgets.bind(this);
        this.getSingleWidgetRender = this.getSingleWidgetRender.bind(this);
    }

    getWidgets(){
        console.log('$$$$$$$$$$$$$$$$$  START  $$$$$$$$$$$$$$$$$$$$$$$');
        let out = [];
        if(this.props.types){
        this.props.types.forEach(function(element) {
            out.push(<div style={{border:'1px solid gray'}} key={element.uuid}>{this.getSingleWidgetRender(element)}</div>)
        }, this);
        }
        console.log('$$$$$$$$$$$$$$$$$  END  $$$$$$$$$$$$$$$$$$$$$$$');
        return out;
    }

    render(){
        console.log(this);
        let self = this;
        return(
            <div style={{display:'inline-block', border:'1px solid', margin:'1px', padding: '5px'}}>
                {self.getWidgets()}
            </div>
        )
    }

    getSingleWidgetRender(json){
        let out = [];
        let propAttributes = this.props.attributes;
        let title = json.name;
        out.push(<h5>{title}</h5>);
        console.log(title + '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log(json);
        let attributes = (json.attributes !== undefined && json.attributes.lenght !== 0) ? json.attributes : false;
        let atts = [];
            if(attributes){
                //console.log(attributes);
                attributes.forEach(function(element) {
                    /*console.log(element);*/
                    let att = _.find(propAttributes, {uuid: element.uuid});
                    if(att.definition.readable && att.value){
                        switch(att.definition.attributeType){
                            case 'BOOLEAN':
                                out.push(<p>{att.name} : {att.value.value ? 'ON' : 'OFF'}</p>);
                                break;
                            case 'DOUBLE':
                            case 'INTEGER':
                            case 'NUMBER':
                            case 'STRING':
                                out.push(<p>{att.name} : {att.value.value}</p>);
                                break;
                        }
                    }else{
                        out.push(<p><strong>{att.name} : </strong>no value</p>);
                    }
                    if(att.config.enumValues){
                        for(let key in att.config.enumValues){ 
                            out.push(<button style={att.definition.writable?{background:'lightskyblue'}:{background:'tan'}} onClick={att.definition.writable?()=>{this.test()}:()=>{}}>{att.config.enumValues[key]}</button>)
                        }
                        /*if(att.definition.writable){
                            
                        }*/
                    }
                    console.log(att);
                    
                    out.push(<p style={{borderBottom:'1px lime'}}></p>);
                }, this);
            };
            if(json.templateId === 'CAMERA'){
                /*DEBUG*/
               
                let imgSrc;
                fetch('zipato-web/v2' + 'cameras/' + json.uuid,{credentials: 'same-origin'})
                .then(r=>{return r.json()})
                .then(j=>{imgSrc = j.lastFile.thumbnailUrl});
                out.push(<img src={imgSrc} />)
            }
        
        //console.log(attributes);
        //console.log(atts);
        return out;
    }

}export default connect(mapStateToProps)(WidgetLoader)