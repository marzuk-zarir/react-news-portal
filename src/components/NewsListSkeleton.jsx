import { Card, CardContent, Skeleton } from '@mui/material'
import { Box } from '@mui/system'

export default function NewsListSkeleton() {
    return (
        <>
            <Box display="flex" flexWrap="wrap" gap={1} sx={{ mt: 4 }}>
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 5 }} />
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ my: 4 }}>
                <Skeleton variant="rectangular" width="20%" />
                <Skeleton variant="rectangular" width="30%" />
            </Box>
            <Card variant="outlined">
                <Skeleton variant="rectangular" height={250} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Skeleton variant="rectangular" height={30} />
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Skeleton variant="rectangular" width="70%" />
                        <Skeleton variant="rectangular" width="90%" />
                        <Skeleton variant="rectangular" width="80%" />
                    </Box>
                    <Skeleton variant="rectangular" width="20%" />
                </CardContent>
            </Card>
        </>
    )
}
