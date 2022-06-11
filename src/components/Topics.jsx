import {
    BusinessCenterSharp,
    FaceRetouchingNaturalSharp,
    FastfoodSharp,
    FlightSharp,
    GavelSharp,
    LocalMoviesSharp,
    MobileScreenShareSharp,
    MonetizationOnSharp,
    MusicNoteSharp,
    ScienceSharp,
    SportsEsportsSharp,
    SportsSoccerSharp
} from '@mui/icons-material'
import { Chip } from '@mui/material'
import { Box } from '@mui/system'
import { nanoid } from 'nanoid'
import { useMemo } from 'react'

const topics = [
    { name: 'sport', icon: <SportsSoccerSharp /> },
    { name: 'tech', icon: <MobileScreenShareSharp /> },
    { name: 'politics', icon: <GavelSharp /> },
    { name: 'business', icon: <BusinessCenterSharp /> },
    { name: 'economics', icon: <MonetizationOnSharp /> },
    { name: 'entertainment', icon: <LocalMoviesSharp /> },
    { name: 'beauty', icon: <FaceRetouchingNaturalSharp /> },
    { name: 'travel', icon: <FlightSharp /> },
    { name: 'music', icon: <MusicNoteSharp /> },
    { name: 'food', icon: <FastfoodSharp /> },
    { name: 'science', icon: <ScienceSharp /> },
    { name: 'gaming', icon: <SportsEsportsSharp /> }
]

export default function Topics({ topic, handleTopic }) {
    const chipColor = useMemo(() => {
        const colors = ['primary', 'secondary', 'error', 'info', 'success', 'warning']
        return colors[Math.floor(Math.random() * colors.length)]
    }, [])

    return (
        <Box display="flex" flexWrap="wrap" gap={1} my={3}>
            {topics.map(({ name, icon }) => (
                <Chip
                    key={nanoid()}
                    variant={name === topic ? 'filled' : 'outlined'}
                    color={chipColor}
                    label={name}
                    icon={icon}
                    onClick={() => handleTopic(name)}
                />
            ))}
        </Box>
    )
}
