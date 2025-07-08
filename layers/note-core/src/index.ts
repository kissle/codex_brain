export interface Note {
  id: string
  title: string
  body: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface NoteInput {
  title: string
  body: string
  tags?: string[]
}

export interface NoteRepository {
  create(note: Note): Promise<void>
}

import { v4 as uuid } from 'uuid'

export function createNote(input: NoteInput): Note {
  if (!input.title || input.title.trim().length === 0) {
    throw new Error('Title is required')
  }
  const tags = Array.from(new Set(input.tags ?? []))
  const now = new Date()
  return {
    id: uuid(),
    title: input.title.trim(),
    body: input.body ?? '',
    tags,
    createdAt: now,
    updatedAt: now
  }
}
