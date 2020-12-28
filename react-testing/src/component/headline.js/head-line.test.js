import React from 'react';
import { shallow } from 'enzyme';
import Headline from './head-line';
import { findByTestAtrr } from '../../../../Utils/index';

const setUp = (props = {}) => {
        const component = shallow(<Headline {...props} />);
        return component;
};

describe('Testing component  <HeadLine /> ', () => {
     
    describe('Have props ', () => {

           let wrapper;
          beforeEach(() => {
              const props  = {
                  header:'Test Header',
                  desc: 'Test description'
              };

              wrapper = setUp(props);
          });

          it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'headlineClass');
            expect(component.length).toBe(1);
       });

       it('Should render h1', () => {
        const h1 = findByTestAtrr(wrapper, 'headerClass');
        expect(h1.length).toBe(1);
       });

       it('Should render desc', () => {
        const pClass = findByTestAtrr(wrapper, 'pClass');
        expect(pClass.length).toBe(1)
    });
       
    });

     describe('Have NO props', () => {
          
        let wrapper;  
          beforeEach(() => {
             wrapper = setUp();
          });

          it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'headlineClass');
            expect(component.length).toBe(0);
          });
          

     });
     
    
    
});
