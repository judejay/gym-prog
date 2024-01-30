import React, { PureComponent } from 'react'
import { useMyContext } from '../../hooks/useContext';
import CardHeading from '../CardHeading/CardHeading';
import { Paper } from '@mantine/core';
//import './RoutineSettings.css'
import { useRoutineReducer } from '../../ducks/routine_reducer';
type Props = {}

const RoutineSettings: React.FC<Props> = () => {
    const { routine, dispatch } = useRoutineReducer();
    console.log('routine', routine)
    return (
        <Paper withBorder radius="md" className="card">
            <CardHeading />
        </Paper>

    )
}


export default RoutineSettings