import {
  IconArrowsDownUp,
  IconLayoutDashboard,
  IconFileInvoice,
  IconAdjustmentsAlt,
  IconMap2,
  IconBug,
  IconUserPlus,
  IconMessageCircleCog,
  IconBuildingBroadcastTower,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon?: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export interface Notifications {
  title: string
  icon: JSX.Element
  time: string
}

export interface Activities {
  title: string
  image: string
  time: string
}

export const sidelinks: SideLink[] = [
  {
    title: 'Overview',
    label: '',
    href: '/dashboard',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Transactions',
    label: '',
    href: '/dashboard/transactions',
    icon: <IconArrowsDownUp size={18} />,
    sub: [
      {
        title: 'Overview',
        label: '',
        href: '/dashboard/transactions',
      },
      {
        title: 'Highlights',
        label: '',
        href: '/dashboard/coming_soon_highlight',
      },
      {
        title: 'Settings',
        label: '',
        href: '/dashboard/coming_soon_settings',
      },
    ],
  },
  {
    title: 'Invoices',
    label: '',
    href: '/dashboard/invoices',
    icon: <IconFileInvoice size={18} />,
    sub: [
      {
        title: 'Overview',
        label: '',
        href: '/dashboard/invoices',
      },
      {
        title: 'Highlights',
        label: '',
        href: '/dashboard/coming_soon_highlight',
      },
      {
        title: 'Settings',
        label: '',
        href: '/dashboard/coming_soon_settings',
      },
    ],
  },
  {
    title: 'Interactions',
    label: '',
    href: '/dashboard/interactions',
    icon: <IconMap2 size={18} />,
    sub: [
      {
        title: 'Overview',
        label: '',
        href: '/dashboard/interactions',
      },
      {
        title: 'Highlights',
        label: '',
        href: '/dashboard/coming_soon_highlight',
      },
      {
        title: 'Settings',
        label: '',
        href: '/dashboard/coming_soon_settings',
      },
    ],
  },
  {
    title: 'Settings',
    label: '',
    href: '/dashboard/settings',
    icon: <IconAdjustmentsAlt size={18} />,
  },
]

export const Notifications: Notifications[] = [
  {
    title: 'You have an issue that need immediate attention',
    time: 'Just now',
    icon: <IconBug size={18} />,
  },
  {
    title: 'A new team member Aarav just joined',
    time: '10 minutes ago',
    icon: <IconUserPlus size={18} />,
  },
  {
    title: 'New product feature available',
    time: '3 hours ago',
    icon: <IconMessageCircleCog size={18} />,
  },
  {
    title: 'A user just subscribed',
    time: 'Today, 11:40 AM',
    icon: <IconBuildingBroadcastTower size={18} />,
  },
]

export const Activities: Activities[] = [
  {
    title: 'Discount details updated',
    time: 'Just now',
    image:
      'https://s3-alpha-sig.figma.com/img/5618/07e2/4f384b89a83502e0c6fc6cbc98817827?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pMKEXBjMWIXCB5VUifOhhRCpM2glq4u5aDp9SIH-MKc51HRTOTWiZSYtdc1qPrMZpr5-YNFlkacFprJGTAvNg5xVMlqHlpnq2~gbpDzKNlAJ-fFIN0uq9jiSO-hFbbjYRX~p5V791YPqNJPtx87ox41E9vFE1fzgAyOkfvBMlvJUec1CJXMS6gb7nJXwPrFFwkRl-ku7dqncATzG3CGbH1Z6pibPGQcI2KXwWNmOATKVfVoOWPg~zlFZx~yb7KviElDOWulEdm-O1WqdZ4UwxPPJ1n6wPnrEZ3Lm7DMIKVztF~4cCE4BLpgQm84-Bd0xEk9SyWh4sJ-LVgrEqFEdRw__',
  },
  {
    title: 'Aman added a new product',
    time: '10 minutes ago',
    image:
      'https://s3-alpha-sig.figma.com/img/d225/6170/d5e524fdf1c0cb0268978c382c982775?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUdpxdLIt0l8dRmhOrCXgrYEJQ6q6x5R8lJ2wbSyThAFQdJZAgwqTu3tgKOXlJOnmNgrOur7Nt4M16EWfqC96O7gY3GgcS72h97yByyy7ZMe2qiRcOx3~PPJJ4fOILU9yWIhdIYuEmlSu~iOki2mAXQPrmWP71W2lv~pDvwefHpQ5Rmv~k-O3i9rejE8Y27RcVtE5AiUGIi0WRn8gRvjJEDYTtPMDTJOq8w8pBCPtMdQ0eMWyraVvNEhoqCfrKoVb-kGIHSrl5qt2pEl~5ZXDOxDPu2sbx1zc3PQ5mfu6f7SxH5OjI5QL6LWGGiIQ2OLMGQrrN3rjrQEtZC0a8daBA__',
  },
  {
    title: 'Refunds cleared',
    time: '12 hours ago',
    image:
      'https://s3-alpha-sig.figma.com/img/d638/1ed9/535faedb3171ebf24cc083c421af6a8c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWUaZnat78ecSGpqBhX1-2HxLxXi6hURw1L9-J~J~skagDiOvYegZARjlX-QN-b7IcRrey0jpvCHxmhHmsEY-YfigMxTYKI7Vr6-HUh76GUEbH44TPQ-C0hPV-9BMig5jWdjiAuEWqffv3lzhja88urSH27o42S5S-9D9k5lBNvDJbioA3RNR3rMWSnKNMk7ixbZ380a4U1W0LQoLAvFKmauB4TqUdTkO8Nba~bR3DZ~aH7n0dLkomP69FkyomeKKJW5Q13HTaaG8eRiaCvGVaQo-Ufhd5Jao6HXmiW1gbhTXEWs5aS~xy5KCbwmSaxjzatkGGqGbkuB586dm0G1fQ__',
  },
  {
    title: 'Tax report download completed',
    time: 'Today, 11:40 AM',
    image:
      'https://s3-alpha-sig.figma.com/img/4016/70ae/04e9f56b8607ab9a75364d523fa15c7f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=feY4WZimdDCMym64SQeWu~8GJXJnR3xlCwjpZxwvki4xFGJBF9td7HTygE0pgD6fmO-Ak-AYRpFA~iKH32P34~wEHuLiGGelpAmEJJmRJWGdBLZcL3r46YeaiiUE6RysJPkSOUcWubxlpiU4moYMGu7lId71RCgSnv8acz8vjQcHOe6M~36ZgAO~F41cA9Rs-mUsdvnVGncUOo9zQqvPzzGvyf8ti-67-freWZ14eNb~1iE3xXrsMRcqtKpWphiLadwntDYhEMT1Q~vuUrFznT-BHspXUQKYpIQ82VkArDzTJ0DxXAMiAOaBMAONX5MKavUzmzR4qCfa2YdtgHdjtg__',
  },
  {
    title: 'Product details updated',
    time: 'Feb 21, 2023',
    image:
      'https://s3-alpha-sig.figma.com/img/a336/8d2b/4bf149055875cb73bd98f1b0dc6f1cfb?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXa8s2848F73weK-7dAfIkK8c~IuAkMWE1RPt11fvATFGXDDFJ7znyb1CSLAngr4z2b5zen3-cKYlao9Jqk~WDp-uylcdKUfD9K37lXUx31bxTuIAAZFG1KqGozypin1K~8At1fAIy2KL-2zV-SRKCqZ7-KPMGLITSaN-x-ORaYLwDb1TIlLKNoOEMkVFPoyP69G9dFhHx~wSRS~Asj~4uQDfyZ-v3TjpxoIp3YqLejm2RWiDDaWXlcrg2jjKDIOEu2ySpMnSphHxVeo0BrESuZgn8xG3vrr-n1b0W5AQYFEANDN4YiM2c-GnPOJTwi7UZZnbEPsPojF7rqZuPZTnw__',
  },
]
