import { graphRequest } from "./request";

export const folderUltil = async () => {
    const query = `query Folders {
        folders {
          id
          name
          createdAt
        }
    }`;
    const data = await graphRequest({query})
    return data
}