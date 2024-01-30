import React from 'react'
import CardHeading from '../CardHeading/CardHeading';
import { Paper } from '@mantine/core';
//import './RoutineSettings.css'
import { useRoutineReducer } from '../../ducks/routine_reducer';
import RoutineDialog from './RoutineDialog';

type Props = {}

const RoutineSettings: React.FC<Props> = () => {
    const { routine } = useRoutineReducer();
    console.log('routine', routine)
    return (
        <Paper withBorder radius="md" className="card">
            <CardHeading />
            <RoutineDialog />
        </Paper>

    )
}


export default RoutineSettings