import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import Footer from '../src/components/footer'

test('(Component) Footer renders without exploding', (t) => {
  const wrapper = shallow(<Footer />)

  t.is(wrapper.length, 1)
})

