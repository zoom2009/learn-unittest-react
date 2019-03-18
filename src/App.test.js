import React from 'react'
import {expect} from 'chai'
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import Foo from './components/Foo'
import Click from './components/Click';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('render three <Foo /> components', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Foo)).to.have.lengthOf(3)
  })

  it('simulates click event', () => {
    const wrapper = mount(<App />)
    wrapper.find(Click).simulate('click')
    expect(wrapper.find('#counter').text()).to.equal('Count is : 1')
  })
})

describe('<Foo />', () => {
  it('allows to set props', () => {
    const wrapper = mount(<Foo bar="baz"/>)
    expect(wrapper.props().bar).to.equal('baz')
    wrapper.setProps({bar: 'foo'})
    expect(wrapper.props().bar).to.equal('foo')
  })
})