import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system'

export default function NewsList({ news }) {
    return (
        <>
            {news.total_hits === 0 ? (
                <Typography
                    variant="h4"
                    color="text.secondary"
                    align="center"
                    sx={{ fontWeight: 500 }}
                >
                    No matches for your search
                </Typography>
            ) : (
                <>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" pb={3}>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{ fontWeight: 500 }}
                        >
                            About {news.total_hits} results found
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{ fontWeight: 500 }}
                        >
                            {news.page} of {news.total_pages}
                        </Typography>
                    </Box>
                    {news.articles.map(({ _id, media, link, title, summary, published_date }) => (
                        <Card key={_id} variant="outlined" sx={{ mb: 4 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image={media}
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="a"
                                    color={grey[900]}
                                    href={link}
                                    target="__blank"
                                    sx={{
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ py: 2 }}>
                                    {summary}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Published on {new Date(published_date).toDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </>
            )}
        </>
    )
}
