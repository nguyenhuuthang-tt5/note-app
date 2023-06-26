import fakeData from "../fakeData/index.js";
import AuthorModel from "../models/AuthorModel.js";
import FolderModel from "../models/FolderModel.js";
import NoteModel from "../models/NoteModel.js";

const resolvers = {
    Query: {
        folders: async () => { return await FolderModel.find() },
        folder: async (parent, args) => {
            const folderId = args.folderId;
            return await FolderModel.findOne({
                _id: folderId
            })
        },
        notes: async (parent, args) => { 
            const folderId = args.folderId
            return await NoteModel.find({
                folderId: folderId
            })
        },
        note: async (parent, args) => { 
            const noteId = args.noteId
            return await NoteModel.findOne({
                _id: noteId
            })
        },
        authors: () => { return fakeData.authors}
    },
    Mutation: {
        addFolder: async (parent, args) => {
            const newFolder = new FolderModel(args)
            await newFolder.save()
            return newFolder
        },
        addNote: async (parent, args) => {
            const newNote = new NoteModel(args)
            await newNote.save()
            return newNote
        }
    },
    Folder: {
        author: (parent, args) => {
            const authorId = parent.authorId
            return fakeData.authors.find((author) => author.id === authorId)
        },
        notes: (parent, args) => {
            return fakeData.notes.filter((note) => note.folderId === parent.id)
        }
    },
    Author: {
        folders: (parent, args) => {
            return fakeData.folders.filter((folder) => folder.authorId === parent.id)
        }
    },
    Note: {
        folder: (parent, args) => {
            const folderId = parent.folderId
            return fakeData.folders.find((folder) => folder.id === folderId)
        }
    }

}

export default resolvers