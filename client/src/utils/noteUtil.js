import { graphRequest } from "./request"

export const noteUtils = {
    noteByFolderId: async ({ params }) => {
        const folderId = params.folderId
        const query = `
            query Notes($folderId: String) {
                notes(folderId: $folderId) {
                    id
                    content
                }
            }
        `
        const payload = {
            query,
            variables: {
                folderId
            }
        }
        const data = await graphRequest(payload)
        return data
    },
    noteByNoteId: async ({ params }) => {
        const noteId = params.noteId;
        const query = `
            query Notes($noteId: String) {
                note(noteId: $noteId) {
                    id
                    content
                }
            }
        `
        const payload = {
            query,
            variables: {
                noteId
            }
        }
        const data = await graphRequest(payload)
        return data
    }
}