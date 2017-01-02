import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'

import App from './App'
import ComponentHeader from './componentHeader'
import ComponentInput from './componentInput'

describe('The TDD environment', () => {
	it('works fine', () => {
		expect(true).to.be.true;
	});
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe('ComponentHeader', () => {
	const wrapper = shallow(<ComponentHeader text={'T E S T'}/>)
	
	it('should exist', () => {
		expect(wrapper).to.exist
	})

	it('should have the correct class and value', () => {
		expect(wrapper.is('.ComponentHeader')).to.equal(true);
		expect(wrapper.text()).to.equal('T E S T');
	})
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe('ComponentInput', () => {
	const wrapper = shallow(<ComponentInput value={'1000'}/>)

	it('should exist', () => {
		expect(wrapper).to.exist
	})

	it('should have the correct type, class, and value', () => {
		expect(wrapper.type()).to.equal('input');
		expect(wrapper.hasClass('ComponentInput')).to.equal(true);
		expect(wrapper.prop('value')).to.equal('1000');
	})
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe('App', () => {
	it('should have five children', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.children()).to.have.length(5)
	})

	it('should have 3 ComponentInput children', () => {
		const wrapper = shallow(<App />)
		expect(wrapper.find(ComponentInput)).to.have.length(3)
	})
})