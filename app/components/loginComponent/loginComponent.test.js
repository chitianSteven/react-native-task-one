import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import React from 'react';
import renderer from 'react-test-renderer';
import { LoginComponent } from "./loginComponent.js";

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);


describe('login component', ()=> {
    let loginComponent = new LoginComponent;

    beforeEach(()=> {

    })

    it('test', () => {
        const tree = renderer.create(<LoginComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
