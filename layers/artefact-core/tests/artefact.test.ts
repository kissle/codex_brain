import { describe, it, expect } from 'vitest'
import { createArtefact } from '../src/index'

describe('createArtefact', () => {
  it('creates an artefact with defaults', () => {
    const artefact = createArtefact({ title: 'Book', type: 'book', metadata: { author: 'John' } })
    expect(artefact.title).toBe('Book')
    expect(artefact.type).toBe('book')
    expect(artefact.metadata).toEqual({ author: 'John' })
    expect(artefact.id).toBeTruthy()
    expect(artefact.createdAt).toBeInstanceOf(Date)
  })

  it('trims title and sets empty metadata', () => {
    const artefact = createArtefact({ title: '  File  ', type: 'file' })
    expect(artefact.title).toBe('File')
    expect(artefact.metadata).toEqual({})
  })

  it('throws when title missing', () => {
    // @ts-expect-error
    expect(() => createArtefact({ type: 'file' })).toThrow()
  })

  it('throws on invalid type', () => {
    // @ts-expect-error
    expect(() => createArtefact({ title: 'x', type: 'other' })).toThrow()
  })
})
