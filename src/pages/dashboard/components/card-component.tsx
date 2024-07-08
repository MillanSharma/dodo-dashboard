import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
  import { IconTrendingUp2 } from '@tabler/icons-react';
  import { IconTrendingDown2 } from '@tabler/icons-react';


interface CardComponentProps {
    title: string;
    quantity: string;
    trendUp: string;
    trending: boolean;
  }
  
export default function CardComponent(props: CardComponentProps){
    const { title, trendUp, quantity, trending } = props;
    return(
        <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-md font-medium'>
           {title} 
          </CardTitle>
        
        </CardHeader>
        <CardContent className='flex flex-row items-center justify-between'>
          <div className='text-2xl font-bold'>{quantity}</div>
          <div className='text-xs text-muted-foreground flex flex-row'>
            {trendUp}  
            <p>
            {trending ? <IconTrendingUp2 size='16' className='ml-2'/> : <IconTrendingDown2 size='16' className='ml-2' />}
            </p>
          </div>
        </CardContent>
      </Card>
    )
}