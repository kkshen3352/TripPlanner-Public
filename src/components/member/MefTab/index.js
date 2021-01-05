//我的收藏標籤頁元件
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MeFavoritesgroup from '../MeFavoritesgroup'
import MeFavoritesLecture from '../MeFavoritesLecture'
import MeFavoritesstroke from '../MeFavoritesstroke'
import './MeTab.scss'
function MeTabs() {
  return (
    <>
      <div className="Mef-Tab-style">
        <Tabs
          defaultActiveKey="mefavoritesstroke"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="mefavoritesstroke" title="我的行程">
            <MeFavoritesstroke />
          </Tab>
          <Tab eventKey="mefavoritesgroup" title="我的揪團">
            <MeFavoritesgroup />
          </Tab>
          <Tab eventKey="mefavoritesLecture" title="我的講座">
            <MeFavoritesLecture />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}
export default MeTabs
