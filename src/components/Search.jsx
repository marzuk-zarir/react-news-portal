import { TextField } from '@mui/material'

export default function Search({ searchError, handleSearch }) {
    return (
        <form onSubmit={handleSearch}>
            <TextField
                fullWidth
                name="search"
                label="Type Headlines"
                autoComplete="off"
                error={searchError}
                helperText={searchError && '*Invalid search field'}
            />
        </form>
    )
}
