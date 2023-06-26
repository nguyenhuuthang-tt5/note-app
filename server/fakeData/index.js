
const fakeData = {
    authors: [
        {
            id: "1",
            name: "Thang1"
        },
        {
            id: "2",
            name: "Thang2"
        },
    ],
    folders : [
        {
            id: "1", 
            name: 'None',
            createdAt: '2011',
            authorId: "1"
        },
        {
            id: "2", 
            name: 'None2',
            createdAt: '2015',
            authorId: "1"
        },
        {
            id: "3", 
            name: 'Non3',
            createdAt: '2019',
            authorId: "2"
        },
    ],
    notes: [
        {
            id: "123",
            content: "<p>content 1</p>",
            folderId: "1"
        },
        {
            id: "1234",
            content: "<p>content 2</p>",
            folderId: "1"
        },
        {
            id: "12345",
            content: "<p>content 3</p>",
            folderId: "2"
        },
        {
            id: "123456",
            content: "<p>content 4</p>",
            folderId: "3"
        },
        {
            id: "1234567",
            content: "content 5",
            folderId: "3"
        },
    ]
}
export default fakeData