import Button from 'components/Button'
import ChartLine from 'components/ChartLine'
import {
  ChartAndButtonContainer,
  LiveVoltageContainer,
} from 'containers/LiveVoltage/liveVoltage.style'
import { mockVoltage } from 'containers/LiveVoltage/liveVoltage.utils'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { LiveVoltageProps, VoltageChartable } from 'types/liveVoltage'
import { momentFormatter } from 'utils/momentFormatter'

export const LiveVoltage: React.FC<LiveVoltageProps> = ({ deviceId, initialVoltage }) => {
  const [voltagePerTime, setVoltage] = useState<VoltageChartable[]>([initialVoltage])
  const [isLive, setLive] = useState(false)
  useEffect(() => {
    let interval: NodeJS.Timeout
    const getVoltage = () => {
      const currentDate = `${moment(new Date()).utc().format('YYYY-MM-DD HH:mm:ss')}`
      const mockedVoltage = mockVoltage()
      void fetch(`api/device/${deviceId}`)
        // Calling fetch to simulate a realtime call every 5 sec
        // But using mocked data to have a dynamic ChartLine
        .then((res) => res.json())
        .then(() => {
          const newVoltagePerTime = {
            time: momentFormatter(currentDate),
            voltage: mockedVoltage, // here would be the result of the fetch call like "data.voltage"
          }
          setVoltage((prevState: VoltageChartable[]) => [...prevState, newVoltagePerTime])
        })
    }
    if (isLive) {
      getVoltage()
      interval = global.setInterval(() => getVoltage(), 5000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isLive])

  return (
    <LiveVoltageContainer className={'live-voltage'}>
      <h2> Live voltage stats</h2>
      <ChartAndButtonContainer>
        <ChartLine data={voltagePerTime} valueKey={'voltage'} nameKey={'time'} />
        <Button onClick={() => setLive(!isLive)}>
          {isLive ? 'Stop' : 'Start'} live monitoring
        </Button>
      </ChartAndButtonContainer>
    </LiveVoltageContainer>
  )
}

export default LiveVoltage
