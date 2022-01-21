import { useContext } from 'react'
import { AuthContext } from '../providers/AuthContext'

export function useAuth() {
  const value = useContext(AuthContext)
  return value
}
