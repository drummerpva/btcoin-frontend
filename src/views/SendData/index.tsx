import React, { useEffect, useState } from 'react'
import { useTotalValue } from '../../state/hooks'
// import FarmStakingCard from './components/FarmStakingCard'
// import LotteryCard from './components/LotteryCard'
// import CakeStats from './components/CakeStats'
// import TotalValueLockedCard from './components/TotalValueLockedCard'
// import TwitterCard from './components/TwitterCard'


const urlData = 'https://api.defistation.io/dataProvider/tvl';
const headers = {
  Authorization: 'Basic QlRjb2luLkZpbmFuY2U6MGRmY2YyOTQtODQzNy00NTk1LTkxY2EtODg4NWVhMDJhYTFl',
  'Content-Type': 'application/json',
};
const data = {
    BTCoin: {
        contractAddress: "0x71783d77d6019560770f7ce059a9d7294e1c4c70",
        tokens: ["WBNB", "USDT", "BTCB", "ETH", "DAI", "DEC", "USDC", "CAKE", "CAKE", "BTCOIN", "BUSD", "WBNB", "USDT", "BTCB", "ETH", "DAI", "USDC", "DOT", "CAKE", "BTCOIN", "BTCOIN"]
    }
};
const test = false;
const SendData: React.FC = () => {
  const tvl = useTotalValue().toNumber();
  const [ok, setOk] = useState(false)
  useEffect(() => {
    (async () => {
      if(tvl){
        if(ok) return;
        const body = {
          tvl,
          volume: 0,
          bnb: 0,
          data,
          test
        }
        await (await fetch(urlData, {
          method: 'POST',
          headers,
          body: JSON.stringify(body)
        })).json()
        setOk(true);
      }
    })()
  },[tvl, ok])
  if(ok){
    return <h1 id="sendDataID" >Dados enviados</h1>
  }
  return (
      <div>
        Enviando Dados
      </div>
  )
}

export default SendData
