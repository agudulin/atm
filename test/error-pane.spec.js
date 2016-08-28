import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import ErrorPane from '../src/components/error-pane'

test('(Component) ErrorPane renders without exploding', (t) => {
  const wrapper = shallow(<ErrorPane message='error' />)

  t.is(wrapper.length, 1)
})

test('(Component) ErrorPane renders with error message', (t) => {
  const wrapper = shallow(<ErrorPane message='foobar' />)

  t.regex(wrapper.render().text(), /foobar/)
})
