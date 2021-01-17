import React from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import Itinerary from '../../pages/Itinerary'
import ItinEditView from './ItinEditView'
//測試用
// import SpotBox from './SpotsBox'
import ItinList from './ItinList'
import ItinPublishView from './ItinPublishView'
import BigMap from './BigMap'
// import TestDragEditor from './TestDragEditor'
//

// function Test() {
//   let { itin_id } = useParams()
//   return <h1>{itin_id}</h1>
// }

function ItinRoute() {
  return (
    <>
      <Switch>
        <Route path="/itinerary/view/:itin_id">
          <ItinPublishView isEdit={false} isPublish={true} />
        </Route>
        <Route path="/itinerary/publish/:itin_id">
          <ItinPublishView isEdit={true} isPublish={true} />
        </Route>
        <Route path="/itinerary/test">
          <ItinList />
        </Route>
        <Route path="/itinerary/new">
          <ItinEditView />
        </Route>
        <Route path="/itinerary/edit/:itin_id">
          <ItinEditView isNew={false} />
        </Route>
        <Route path="/itinerary/map">
          <BigMap />
        </Route>
        <Route exact path="/itinerary">
          <Itinerary />
        </Route>
      </Switch>
    </>
  )
}

export default ItinRoute
// 檔案負責人: 柯政安
