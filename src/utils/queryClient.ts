import {QueryClient} from 'react-query'

// Create a client
const queryClient = new QueryClient({
defaultOptions: {
    queries: {
         staleTime: 1000 * 60 * 60 * 24, // 24 hours in milliseconds
    },
}
})

export default queryClient;