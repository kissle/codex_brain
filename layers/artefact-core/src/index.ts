export type ArtefactType = 'file' | 'book'

export interface ArtefactInput {
  title: string
  type: ArtefactType
  metadata?: Record<string, string>
}

export interface Artefact extends ArtefactInput {
  id: string
  createdAt: Date
}

export interface ArtefactRepository {
  create(artefact: Artefact): Promise<void>
}

import { v4 as uuid } from 'uuid'

export function createArtefact(input: ArtefactInput): Artefact {
  if (!input.title || input.title.trim().length === 0) {
    throw new Error('Title is required')
  }
  if (input.type !== 'file' && input.type !== 'book') {
    throw new Error('Invalid artefact type')
  }
  return {
    id: uuid(),
    title: input.title.trim(),
    type: input.type,
    metadata: input.metadata ?? {},
    createdAt: new Date()
  }
}
