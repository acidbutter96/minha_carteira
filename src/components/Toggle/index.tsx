import React from 'react'
import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles'

const Toggle: React.FC = () => {
    return (
        <Container>
            <ToggleLabel>
                Light
            </ToggleLabel>
            <ToggleSelector
                checked={false}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => { }}
            />
            <ToggleLabel>
                Dark
            </ToggleLabel>
        </Container>
    )
}

export default Toggle