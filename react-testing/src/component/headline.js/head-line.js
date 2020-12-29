import React, {Component} from 'react';
import PropTypes from  'prop-types';


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

Headline.propTypes = {

    header: PropTypes.string,
    desc: PropTypes.string,

    temptArr:PropTypes.arrayOf(PropTypes.shape({
        
    name:PropTypes.string,
    lName:PropTypes.string,
    age:PropTypes.number,
    gmail:PropTypes.string,
    status:PropTypes.string,
    onlineStatus: PropTypes.bool
    }))
    
}