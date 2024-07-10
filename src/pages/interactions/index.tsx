import { Layout } from '@/components/custom/layout'

import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { GlobeWrapper } from './components/globe-wrapper-container'
import RealtimeDataCard from './components/realtime-data-card'

export default function Apps() {
  return (
    <Layout fixed>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <div className='flex w-full items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>
           Real time transactions 
          </h1>
        </div>
          <div className='flex items-center space-x-4'>
            <ThemeSwitch />
            <UserNav />
          </div>
        </div>
      </Layout.Header>

      {/* ===== Content ===== */}
      <Layout.Body className='lg:h-400 flex flex-col h-full'>
        <GlobeWrapper />
      </Layout.Body>
        <RealtimeDataCard />
    </Layout>
  )
}
