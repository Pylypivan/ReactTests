import React, {Component} from 'react';


export default class Headline extends Component {
    constructor(props) {
        super(props)
    }

    render() {

         const {header,desc} = this.props;

         if (!header) {
             return null;
         }

        return (
            <div data-test = 'headlineClass'>
                 <h1 data-test = 'headerClass'> {header} </h1>
                 <p data-test = 'pClass' >  {desc} </p>
             </div> 
        )
    }
} 