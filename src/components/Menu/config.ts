import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.btcoin.finance/#/swap?outputCurrency=0xe9cb0afe21cf468bd907507c857b8fca8ed001d4&inputCurrency=BUSD',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.btcoin.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Dens',
    icon: 'PoolIcon',
    href: '/dens',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'About',
        href: 'https://btcoin.finance/btcoin.pdf',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xe9cb0afe21cf468bd907507c857b8fca8ed001d4',
      },
      {
        label: 'Binance Smart Chain Token',
        href: 'https://bscscan.com/token/0xe9cb0afe21cf468bd907507c857b8fca8ed001d4',
      },
      {
        label: 'Binance Smart Chain Address',
        href: 'https://bscscan.com/address/0xe9cb0afe21cf468bd907507c857b8fca8ed001d4',
      },
      {
        label: 'Binance Smart Chain Address',
        href: 'https://bscscan.com/address/0x6a08c7d3ff1b60cb0dc3502a1f34b16e7d0c4eb9',
      },
      {
        label: 'Exchange Swap BUSD x BTCOIN',
        href: 'https://btcoin.finance/exchange/#/swap?outputCurrency=0xe9cb0afe21cf468bd907507c857b8fca8ed001d4&inputCurrency=BUSD',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items:[
      {
        label: 'GitHub',
        href: 'https://github.com/drummerpva',
      },
      {
        label: 'Astrotools.io',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x6a08c7d3ff1b60cb0dc3502a1f34b16e7d0c4eb9',
      },
    ],
  },
  {
    label: 'Social Media',
    icon: 'IfoIcon',
    items:[
      {
        label: 'Telegram',
        href: 'https://t.me/joinchat/nm6SkGwKU8I2Njlh',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/btcoin14',
      },
      {
        label: 'Youtube',
        href: 'https://www.youtube.com/channel/UChznt9taplBh0cuhzA4I7AA',
      },
      {
        label: 'Medium',
        href: 'https://btcoin-finance.medium.com',
      },
    ],
  },{
    label: 'Whitepaper',
    icon: 'TicketIcon',
    href: 'https://btcoin.finance/btcoin.pdf',
  },{
    label: 'BTcoin Graphic',
    icon: 'InfoIcon',
    href: 'https://dex.guru/token/0xe9cb0afe21cf468bd907507c857b8fca8ed001d4-bsc',
  },{
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://github.com/drummerpva/btcoin-audit',
  },
]

export default config
