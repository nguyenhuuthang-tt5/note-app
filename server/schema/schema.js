const typeDefs = `#graphql
    type Folder {
        id: String
        name: String
        createdAt: String
        author: Author
        notes: [Note]
    }

    type Note {
        id: String
        content: String
        folder: Folder
    }

    type Author {
        id: String
        name: String
        folders: [Folder]
    }

    type Query {
        folders: [Folder],
        folder(folderId: String): Folder,
        notes(folderId: String): [Note],
        note(noteId: String): Note,
        authors: [Author],
        author(authorId: String): Author

    }

    type Mutation {
        addFolder(name: String!, authorId: ID!): Folder,
        addNote(content: String!, folderId: ID!): Note
    }
`

export default typeDefs