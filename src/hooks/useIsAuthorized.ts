import { getProviderIdByAccountID } from '../services/database'
import { useEffect, useState } from 'react'
import { useAuth } from './useAuth'
import { useRouter } from 'next/router'

export function useIsAuthorized(id: string) {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    ;(async () => {
      const providerID = await getProviderIdByAccountID(id)
      if (user !== undefined) {
        if (providerID === user.uid) {
          setIsAuthorized(true)
        } else {
          setIsAuthorized(false)
        }
      }
    })()
  }, [id, router, user])

  return isAuthorized
}
