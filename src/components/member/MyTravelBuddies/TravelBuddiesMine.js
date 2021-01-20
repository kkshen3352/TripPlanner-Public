import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import Pages from '../../main/Pages'
import TBButtonRead from './TBButtonRead'
import TBMineButtonEdit from './TBMineButtonEdit'
import TBMineButtonMembersSelect from './TBMineButtonMembersSelect'
import TBButtonChatroom from './TBButtonChatroom'
import TBMineButtonDelete from './TBMineButtonDelete'
import TBMineButtonDeleteNoMembers from './TBMineButtonDeleteNoMembers'
import TBMembersSelect from './TBMembersSelect'

function TravelBuddiesMine() {
  const [tbMine, settbMine] = useState([])
  async function gettbMine(props) {
    try {
      const response = await fetch('http://localhost:5000/tbmyaccount/tbmine', {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        settbMine(data)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }
  useEffect(() => {
    gettbMine()
  }, [])

  return (
    <tbody>
      <div className="travelbuddiesmine-outbox">
        <Table>
          <thead>
            <tr>
              <th width="60px">No.</th>
              <th width="180px">旅行揪團名稱</th>
              <th width="120px">日期</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {tbMine.length > 0 &&
              tbMine.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{v.tb_themeName}</td>
                    <td>
                      {v.tb_dateBegin.slice(0, 4) +
                        '/' +
                        v.tb_dateBegin.slice(5, 7) +
                        '/' +
                        v.tb_dateBegin.slice(8, 10) +
                        ' ' +
                        '-' +
                        ' ' +
                        v.tb_dateEnd.slice(0, 4) +
                        '/' +
                        v.tb_dateEnd.slice(5, 7) +
                        '/' +
                        v.tb_dateEnd.slice(8, 10)}
                    </td>
                    <td>
                      <TBButtonRead id={v.id} /> <TBMineButtonEdit />{' '}
                      <TBMineButtonMembersSelect id={v.id} />{' '}
                      <TBButtonChatroom
                        id={v.id}
                        tb_themeName_={v.tb_themeName}
                      />{' '}
                      <TBMineButtonDelete
                        gettbMine={gettbMine}
                        id={v.id}
                        tb_themeName_={v.tb_themeName}
                      />{' '}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </Table>
      </div>
      <div className="tb-pages">
        <Pages />
      </div>
    </tbody>
  )
}

export default TravelBuddiesMine
