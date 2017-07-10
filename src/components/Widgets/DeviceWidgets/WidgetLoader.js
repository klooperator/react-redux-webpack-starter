import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'


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
            this.getSingleWidgetRender(element);
        }, this);
        }
        console.log('$$$$$$$$$$$$$$$$$  END  $$$$$$$$$$$$$$$$$$$$$$$');
        out.push(<span>ffee</span>);
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
        let out;
        let propAttributes = this.props.attributes;
        let title = json.name;
        out += <h5>{title}</h5>;
        console.log(title + '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        let attributes = (json.attributes !== undefined && json.attributes.lenght !== 0) ? json.attributes : false;
        let atts = [];
            if(attributes){
                //console.log(attributes);
                attributes.forEach(function(element) {
                    /*console.log(element);*/
                    let att = _.find(propAttributes, {uuid: element.uuid});
                    console.log(att);
                    if(att.)
                }, this);
            };
        
        console.log(attributes);
        console.log(atts);

    }

}export default connect(mapStateToProps)(WidgetLoader)