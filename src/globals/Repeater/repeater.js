'use strict';

import _ from 'lodash'

class Repeater{

    constructor(time){
        this.time = time*1000;
        this.funcList = {};
        this.popFuncList = {};
        this.promiseList = [];

        this.addFunction = this.addFunction.bind(this);
        this.execute = this.execute.bind(this);
        this.start = this.start.bind(this);
        this.executePopsOnly = this.executePopsOnly.bind(this);
        this.addToStack = this.addToStack.bind(this);
        this.executePromise = this.executePromise.bind(this);
         this.executePromises =  this.executePromises.bind(this);
    }

    addToStack(func, priority, type){
        let t;
        let listToUse;
        switch(type){
            case 'POP': 
                t = 'p';
                listToUse = this.popFuncList;
                break;
            case 'NORMAL': 
                t = 'n';
                listToUse = this.funcList;
                break;
        }
        if(!_.isFunction(func))return false;
        if(priority === undefined || typeof priority !== 'number' || priority < 0) priority = 10;

        if(listToUse[t+priority.toString()])listToUse[t+priority.toString()].push(func);
        else{
           listToUse[t+priority.toString()] = [];
           listToUse[t+priority.toString()].push(func); 
        } 
        return true;
    }


    addFunction(func, priority){
        return this.addToStack(func,priority,'NORMAL');

    }

    addPopFunction(func, priority){
        return this.addToStack(func,priority,'POP');
    }

    executePopsOnly(){
        let keyList = (_.keys(this.popFuncList)).sort((a,b)=>{
            return a.length - b.length || a.localeCompare(b);
        });

        keyList.forEach(function(e){
            while(this.popFuncList[e].length>0){
                this.popFuncList[e].pop()();
            }

        },this)
    }

    executePromises(){
        this.promiseList.forEach(function(e){
            this.executePromise(e.promiseFunc,e.success,e.fail,e.dispatch,e.time, false);
        },this);
    }

    /**
     * 
     * @param {Function} apiCallFuncPromise 
     * @param {Function} successAction 
     * @param {Function} failureAction 
     * @param {Function} dispatch 
     * @param {Number} time 
     * @param {Boolean} repeatIfFail 
     */
    addPromise(apiCallFuncPromise, successAction, failureAction, dispatch, time, repeatIfFail){
      if(time === 0){/*execute immediately*/
        this.executePromise(apiCallFuncPromise, successAction, failureAction, dispatch, time, repeatIfFail);
      }
      else if(time > 1){/*Add repeating action. Will be executed on next iteration.*/
        this.promiseList.push(
            {
                promiseFunc:apiCallFuncPromise,
                success: successAction,
                fail: failureAction,
                dispatch: dispatch,
                time: time,
            }
        );
        return 'promiseList_' + this.promiseList.lenght;/*id of element, if you want to remove it later*/
      }
    }


    executePromise(apiCallFuncPromise, successAction, failureAction, dispatch, time, repeatIfFail){
        console.log('executePromise');
        apiCallFuncPromise().then(response =>{
        if(response.ok)return response.json();
        else throw 'something is wrong';
    }).then(json => {
        dispatch(successAction(json));
    }).catch(e => {
        console.log(e);
        if(failureAction !== null)dispatch(failureAction(e));
        if(repeatIfFail)this.addPromise(apiCallFuncPromise, successAction, failureAction, dispatch, time, repeatIfFail);
    })
    }

    execute(){
        console.log(this);
        let keyList = (_.keys(this.funcList)).sort((a,b)=>{
            return a.length - b.length || a.localeCompare(b);
        });
        keyList.forEach(function(e){
            this.funcList[e].forEach(function (element){
                element();
            },this)

        },this)

        this.executePopsOnly();
        this.executePromises();
    }

    start(){
        this.intervalId = setInterval(this.execute, this.time);
    }

    stop(){
        clearInterval(this.intervalId);
    }
}export default Repeater