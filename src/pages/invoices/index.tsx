import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { useState } from 'react'
import useDebounce from '@/hooks/debounce-search'

export default function Transactions() {
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const { searchValue, setSearchValue } = useDebounce((value: string) => {
    setDebouncedSearch(value)
  }, 600)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        <Search searchValue={searchValue} handleSearch={handleSearch} />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Invoices</h2>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable columns={columns} search={debouncedSearch} />
        </div>
      </Layout.Body>
    </Layout>
  )
}
