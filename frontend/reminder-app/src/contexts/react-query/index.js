import { client } from './provider'
import { useQueryClient } from '@tanstack/react-query'

export const useReactQuery = () => {
    return useQueryClient(client)
}