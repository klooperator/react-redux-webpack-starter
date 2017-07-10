import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {aGenericFail,aBoxChange} from '../../globals/global-actions'
import wrapper, {selectBox} from '../../api/index'

function mapDispatchToProps(dispatch){
    return {
        boxChange: (serial) => {
            wrapper(selectBox(serial),aBoxChange, aGenericFail, dispatch);
        }
  }
}
function mapStateToProps(state, ownProps) {
  return {
    wallet: state.global.get('currentUser').get('wallet'),
  }
}


 class Wallet extends React.Component{

     constructor(props){
         super(props);
         /*this.onClick = this.onClick.bind(this);
         this.getBoxRender = this.getBoxRender.bind(this);
         this.getSingleBoxRendered = this.getSingleBoxRendered.bind(this);*/
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
/**/
    getWalletRender(){
        if(this.props.wallet === undefined || this.props.wallet === null)return (<span>there is no love in this part of the city</span>)
        let out=[];
        out.push(<div><h4>Curent credits:</h4><span>{this.props.wallet.transactions[0].newCredits}</span></div>);
        this.props.wallet.transactions.forEach(function(element) {
            out.push(this.getTransactionRender(element));
        },this);
        return out;
    }

    getTransactionRender(json){
        return (
            <div key={json.createdDate}>
                <strong>{json.createdDate}</strong>
                <p>{json.description}</p>
                <p>Amount: {json.amount}</p>
            </div>
        )
    }

    render(){
        /*console.log(this)*/
        let self = this;
        return(
            <div style={{display:'inline-block', border:'1px solid', margin:'1px', padding: '5px'}}>
                {self.getWalletRender()}
            </div>
        );
    }
}export default connect(mapStateToProps,mapDispatchToProps)(Wallet)