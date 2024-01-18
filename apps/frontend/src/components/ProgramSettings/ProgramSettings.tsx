import React, { PureComponent } from 'react'
import { useMyContext } from '../../hooks/useContext';
import CardHeading from '../CardHeading/CardHeading';
import { Paper } from '@mantine/core';
type Props = {}

class ProgramSettings extends PureComponent<Props> {
    render() {
        return (
            <Paper withBorder radius="md" className="card">
                <CardHeading />
            </Paper>

        )
    }
}

export default ProgramSettings