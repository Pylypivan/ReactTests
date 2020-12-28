import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../../../Utils/index';
import Header from './header';


const setUp = (props = {}) => {

    const component = shallow(<Header {...props} />);
    return component;
};



describe('Testing component <Header /> ', () => {

      let component;
      beforeEach(() => {
          component = setUp();
      });

    it('Should render whothout error', () => {
         const wrapper = findByTestAtrr(component, 'header-component');
         expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {

        const classer = findByTestAtrr(component,'imgClass');
        expect(classer.length).toBe(1);
   });
   
    
    
});

