import dynamic from 'next/dynamic'

export const DynamicCreateAccount = dynamic(() => import('./CreateAccount'), {
  loading: () => <p>Loading...</p>
})
