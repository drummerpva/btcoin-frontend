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
        href: 'https://exchange.btcoin.finance/#/swap?outputCurrency=0x71783d77d6019560770f7ce059a9d7294e1c4c70&inputCurrency=BUSD',
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
        href: 'https://pancakeswap.info/token/0x71783d77d6019560770f7ce059a9d7294e1c4c70',
      },
      {
        label: 'Binance Smart Chain Token',
        href: 'https://bscscan.com/token/0x71783d77d6019560770f7ce059a9d7294e1c4c70',
      },
      {
        label: 'Binance Smart Chain Address',
        href: 'https://bscscan.com/address/0x71783d77d6019560770f7ce059a9d7294e1c4c70',
      },
      {
        label: 'Binance Smart Chain Address',
        href: 'https://bscscan.com/address/0xf328c01b7b895fe17e573dbaf739d9c25fcde210',
      },
      {
        label: 'Exchange Swap BUSD x BTCOIN',
        href: 'https://btcoin.finance/exchange/#/swap?outputCurrency=0x71783d77d6019560770f7ce059a9d7294e1c4c70&inputCurrency=BUSD',
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
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xf328C01B7b895FE17E573dbAF739d9c25fcdE210',
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
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://github.com/drummerpva/btcoin-audit',
  },
]

export default config
