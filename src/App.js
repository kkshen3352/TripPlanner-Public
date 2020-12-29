import { Component } from 'react'
import Card from './components/main/Card'
import TestWrap from './components/main/TestWrap'
import SearchBar from './components/main/SearchBar'

function App() {
  return (
    <TestWrap>
      <Card
        title={'新北耶誕'}
        text={`刻年在一真升友在，夜長能前路大她力去主保：頭的母打字會，然算子在待的際和體，會作且名說館失古林假母談就這同……只兒兩就適，他數說講中日發形：獎有深升感會重，存的其再因家平家得的過相著有小考外今告臺男無起全朋他非油是間演是世也，仍件實工相回方。

花未布你就益統質兒。

就家益歌酒得道舉象水。這存總，遊假一笑演動爾他來充麼青道線活作理麼可們省合夫水精所！會著於生了機業我劇我鄉電那你大親河坐這議象不時推們時是然油……夜加前水集都他，因林受用者是起氣照然為車區活運青外車差事土再然軍勢廣太？入生風演叫率究元好克回起不哥地使。功保說經化活座比著，健排的前花相結洲全條灣書？市大死平龍像險愛重，獲石水作實，父大以他吸，樓高法今科推的實變動兒在認製世也子必期同；出她心地已比心外孩輪頭飛……這所報的，舞色初類……歌中軍於全往管義、問濟一，飛等人會入快，不眼園技，少玩之，沒言不期動那下……件投去痛但說義民來……可人緊發心舉雖人亞生他大物商因所長於臺去分土詩成時！`}
        location={'中壢市'}
        image={'testImage.jpg'}
        time1={-1}
        time2={-1}
        duration={3}
        price={-1}
        person={'王大明'}
        like={222}
        mark={222}
      />
      <SearchBar />
    </TestWrap>
  )
}

export default App
