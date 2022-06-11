import { Pagination } from '@mui/material'
import { Box } from '@mui/system'

export default function NewsPagination({ currentPage, totalPageCount, onPageChange }) {
    return (
        <Box display="flex" justifyContent="center" mt={6} mb={12}>
            <Pagination
                size="large"
                color="warning"
                page={currentPage}
                count={totalPageCount}
                onChange={onPageChange}
            />
        </Box>
    )
}
