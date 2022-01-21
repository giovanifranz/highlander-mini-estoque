import { useContext } from 'react'
import { DashboardContext } from '../providers/DashboardContext'

export function useDashboard() {
  const value = useContext(DashboardContext)
  return value
}
