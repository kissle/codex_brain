import { describe, it, expect } from 'vitest'
import { createNote } from '../src/index'

describe('createNote', () => {
  it('creates a note with defaults and unique tags', () => {
    const note = createNote({ title: 'Hello', body: 'world', tags: ['a', 'a', 'b'] })
    expect(note.title).toBe('Hello')
    expect(note.body).toBe('world')
    expect(note.tags).toEqual(['a', 'b'])
    expect(note.id).toBeTruthy()
    expect(note.createdAt).toBeInstanceOf(Date)
    expect(note.updatedAt).toBeInstanceOf(Date)
  })

  it('throws when title missing', () => {
    // @ts-expect-error
    expect(() => createNote({ body: 'x' })).toThrow()
  })
})
