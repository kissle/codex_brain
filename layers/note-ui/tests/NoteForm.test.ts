import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NoteForm from '../components/NoteForm.vue'

describe('NoteForm', () => {
  it('renders fields', () => {
    const wrapper = mount(NoteForm)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('textarea').exists()).toBe(true)
  })
})
