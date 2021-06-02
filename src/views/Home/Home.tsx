import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  /* background-image: url('/images/cub/wide.svg'); */
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    /* background-image: url('/images/cub/2logos.png') ; */
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const Background = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  opacity: 0.2;
  z-index: 0;
`;
const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`;


const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      {/* <Background src="/images/fundo-btcoin.jpg" /> */}
      <Hero>
        <StyledExternalLink href="https://bscscan.com/token/0x779c19621fb068c3bab5d574b8de5d803bc00b80" target="__blank">
          <Heading as="h1" size="xl" mb="24px" >
            {TranslateString(576, 'BTCoins Finance Binance Smart Chain')}
          </Heading>
        </StyledExternalLink>
        <StyledExternalLink href="https://bscscan.com/token/0x779c19621fb068c3bab5d574b8de5d803bc00b80" target="__blank">
        <Text>{TranslateString(578, 'Contract: 0x779c19621fb068c3bab5d574b8de5d803bc00b80')}</Text>
        </StyledExternalLink>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
