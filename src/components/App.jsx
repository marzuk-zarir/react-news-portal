import { Container, CssBaseline, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { createRef, useEffect, useState } from 'react'
import NewsList from './NewsList'
import NewsListSkeleton from './NewsListSkeleton'
import NewsPagination from './NewsPagination'
import Search from './Search'
import Topics from './Topics'

const BASE_URL = 'https://api.newscatcherapi.com/v2'
const API_KEY = import.meta.env.VITE_NEWS_CATCHER_API_KEY

const theme = createTheme({
    typography: {
        fontFamily: "'Quicksand', Arial, sans-serif"
    },
    breakpoints: {
        values: {
            md: 768
        }
    }
})

export default function App() {
    const headingRef = createRef(null)
    const [newsList, setNewsList] = useState()
    const [loadingNewsList, setLoadingNewsList] = useState(true)
    const [currentSearch, setCurrentSearch] = useState()
    const [searchError, setSearchError] = useState(false)
    const [topic, setTopic] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    // Fetch data on first load
    useEffect(() => {
        const fetch = debounce(async () => {
            const { data } = await axios.get(`${BASE_URL}/latest_headlines?lang=en&page_size=10`, {
                headers: { 'x-api-key': API_KEY }
            })
            setLoadingNewsList(false)
            setNewsList(data)
        }, 1000)
        fetch()
    }, [])

    // Search Handler
    const handleSearch = (e) => {
        e.preventDefault()
        const selectTopic = topic ? `&topic=${topic}` : ''
        const search = e.target.search.value.trim().toLowerCase()

        setSearchError(false)

        if (search === '' || search.length > 100) {
            return setSearchError(true)
        }

        if (search !== currentSearch) {
            const fetch = debounce(async () => {
                const { data } = await axios.get(
                    `${BASE_URL}/search?lang=en&page_size=10&q=${search}${selectTopic}`,
                    {
                        headers: { 'x-api-key': API_KEY }
                    }
                )
                setNewsList(data)
            }, 800)
            fetch()
            setCurrentSearch(search)
        }
    }

    // Topic change handler
    const handleTopic = (selectedTopic) => {
        const selectRoute = currentSearch ? `search?q=${currentSearch}&` : 'latest_headlines?'

        if (selectedTopic !== topic) {
            const fetch = debounce(async () => {
                const { data } = await axios.get(
                    `${BASE_URL}/${selectRoute}lang=en&page_size=10&topic=${selectedTopic}`,
                    {
                        headers: { 'x-api-key': API_KEY }
                    }
                )
                setNewsList(data)
            }, 800)

            fetch()
            setTopic(selectedTopic)
            setCurrentPage(1)
        }
    }

    // Pagination handler
    const handlePageChange = (_, pageNumber) => {
        const selectRoute = currentSearch ? `search?q=${currentSearch}&` : 'latest_headlines?'

        const fetch = debounce(async () => {
            const { data } = await axios.get(
                `${BASE_URL}/${selectRoute}lang=en&page_size=10&page=${pageNumber}${
                    topic ? `&topic=${topic}` : ''
                }`,
                {
                    headers: { 'x-api-key': API_KEY }
                }
            )
            setNewsList(data)
        }, 800)

        fetch()

        headingRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        })
        setCurrentPage(pageNumber)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography
                    ref={headingRef}
                    variant="h4"
                    align="center"
                    color={grey[700]}
                    py={3}
                    sx={{ fontWeight: 500 }}
                >
                    React Headlines
                </Typography>
                <Search searchError={searchError} handleSearch={handleSearch} />
                {newsList && (
                    <>
                        <Topics topic={topic} handleTopic={handleTopic} />
                        <NewsList news={newsList} />
                        {newsList.total_pages !== 0 && (
                            <NewsPagination
                                currentPage={currentPage}
                                totalPageCount={newsList.total_pages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </>
                )}
                {loadingNewsList && <NewsListSkeleton />}
            </Container>
        </ThemeProvider>
    )
}
