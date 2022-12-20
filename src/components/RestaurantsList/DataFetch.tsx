import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';


type resultProps = {
    id: number;
    title: string;
    thumbnailUrl: any;
};


export default function DataFetch() {
    const [user, setUser] = useState<resultProps[]>([]);
    console.log(user);

    const fetchData = async () => {
        const item = await axios.get("https://jsonplaceholder.typicode.com/photos");
        setUser(item.data);
        console.log(item.data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>

            <Typography variant='h3' align='center' className='text-center text-danger'>Data Fetching</Typography>



            <TableContainer>
                <Table sx={{
                    minWidth: 650, marginTop: '30px'
                }} aria-label="Fetching Data through Api">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Pics</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((value) => (
                            <TableRow
                                key={value.id}
                            >
                                <TableCell component="td" align="center">
                                    {value.id}
                                </TableCell>
                                <TableCell component="td" align="center">
                                    {value.title}
                                </TableCell>
                                <TableCell align="center"><img src={value.thumbnailUrl} alt="" /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

