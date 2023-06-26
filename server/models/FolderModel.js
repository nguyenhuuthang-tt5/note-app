import mongoose from "mongoose";

const folderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const FolderModel = mongoose.model('folders', folderSchema)
export default FolderModel