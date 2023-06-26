import { Box, Card, CardContent, List, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function FolderList({ folders }) {
    const params = useParams()
    const [activeFolderId, setActiveFolderId] = useState(params.folderId)

    return (
        <List sx={{
            width: '100%',
            background: '#7D9D9C',
            height: '100%',
            padding: '10px',
            textAlign: 'left',
            overflowY: 'auto', 
        }} subheader= {
            <Box>
            <Typography sx={{color: '#fff', fontWeight: 'bold'}}>Folders</Typography>
          </Box>
        }>
            {
                folders.map((folder) => {
                    return <Link key={folder.id} to={`folders/${folder.id}`} style={{ textDecoration: 'none' }} onClick={() => setActiveFolderId(folder.id)}>
                        <Card sx={{mb: '5px', backgroundColor: folder.id === activeFolderId ? 'rgb(255 211 140)' : null}}>
                            <CardContent sx={{ '&:last-child': { pb: '10px' }, padding: '10px' }}>
                                <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>{ folder.name }</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                })
            }
        </List>
    );
}
