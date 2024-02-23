import { api } from '@/lib/axios'

export interface GetUserResponse {
  id: string
  name: string
  email: string
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getUser() {
  const response = await api.get<GetUserResponse>('/user')
  return response.data
}
