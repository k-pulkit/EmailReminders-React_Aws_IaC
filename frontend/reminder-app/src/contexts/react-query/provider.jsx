import React from 'react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

console.log("Creating new client")
export const client = new QueryClient({ defaultOptions: { suspense: true } })   // Enable suspense mode for all queries


const ReactQueryProvider = ({children}) => {
  // console.log("ReactQueryProvider rendered")

  return (
    <QueryClientProvider client={client} contextSharing={true}>
        {children}  
    </QueryClientProvider>
  )
}

export default ReactQueryProvider