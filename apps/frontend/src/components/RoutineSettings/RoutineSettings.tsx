import React from 'react'
import CardHeading from '../CardHeading/CardHeading';
import { Paper } from '@mantine/core';
import RoutineDialog from './RoutineDialog';



const RoutineSettings: React.FC = () => {
    return (
        <Paper withBorder radius="md" className="card">
            <CardHeading />
            <RoutineDialog />
        </Paper>

    )
}


export default RoutineSettings