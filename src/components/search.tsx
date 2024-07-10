import { Input } from '@/components/ui/input'

interface SearchProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

export function Search({ handleSearch, searchValue }: SearchProps) {
  return (
    <div>
      <Input
        type='search'
        value={searchValue}
        placeholder='Search...'
        className='md:w-[100px] lg:w-[300px]'
        onChange={(event) => handleSearch(event)}
      />
    </div>
  )
}
