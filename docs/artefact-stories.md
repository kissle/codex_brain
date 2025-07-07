# Artefact Module User Stories

This document outlines high-level user stories for managing artefacts (files or books) and referencing them in notes. It also includes sequence diagrams showing how major interactions flow through the system.

## User Stories

1. **Upload digital artefact**
   - *As a knowledge worker, I want to upload a PDF or image so that it can be referenced later in my notes.*
2. **Register a physical book**
   - *As a researcher, I want to create an artefact record for a physical book by entering its title and other metadata.*
3. **Attach artefacts to a note**
   - *As a note taker, I want to select existing artefacts and link them to a note when editing or creating it.*
4. **Browse artefacts**
   - *As a user, I want to list and search artefacts so I can discover which resources are already stored.*
5. **View artefacts for a note**
   - *As a reader, I want to open a note and see the artefacts it references with links or bibliographic data.*

## Sequence Diagrams

### Uploading a digital artefact
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant ArtefactAPI
    participant Storage

    User->>Frontend: select file & submit
    Frontend->>ArtefactAPI: POST /artefacts
    ArtefactAPI->>Storage: store file
    ArtefactAPI-->>Frontend: artefact ID
    Frontend-->>User: confirmation
```

### Attaching artefact to a note
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant NoteAPI

    User->>Frontend: add artefact ID to note
    Frontend->>NoteAPI: POST /notes with artefact IDs
    NoteAPI-->>Frontend: created note
    Frontend-->>User: display saved note
```

### Viewing a note with artefacts
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant NoteAPI
    participant ArtefactAPI

    User->>Frontend: open note page
    Frontend->>NoteAPI: GET /notes/:id
    NoteAPI-->>Frontend: note data (includes artefact IDs)
    Frontend->>ArtefactAPI: fetch metadata for artefact IDs
    ArtefactAPI-->>Frontend: titles, file links
    Frontend-->>User: render note with artefacts
```
