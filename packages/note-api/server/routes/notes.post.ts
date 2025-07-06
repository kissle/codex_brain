import { defineEventHandler, readBody } from 'h3'
import { createNote, NoteRepository } from '@note-core'
import { pool } from '../utils/db'

const repository: NoteRepository = {
  async create(note) {
    await pool.query(
      'INSERT INTO notes(id, title, body, tags, created_at, updated_at) VALUES($1,$2,$3,$4,$5,$6)',
      [note.id, note.title, note.body, note.tags, note.createdAt, note.updatedAt]
    )
  }
}

export default defineEventHandler(async (event) => {
  const input = await readBody(event)
  const note = createNote(input)
  await repository.create(note)
  return note
})
