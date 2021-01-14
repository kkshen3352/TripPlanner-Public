import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './buy-products.scss'

import MyBreadCrumb from '../../../components/main/MyBreadCrumb/MyBreadCrumb'

// icon
import { FiClock } from 'react-icons/fi'
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'
import { RiSurgicalMaskFill } from 'react-icons/ri'
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineHeart,
} from 'react-icons/ai'

function BuyProducts() {
  // 這是modal
  const [smShow, setSmShow] = useState(false)
  const handleShow = () => setSmShow(true)

  // 計數器
  const [early, setEarly] = useState(1)
  const [single, setSingle] = useState(1)
  const [group, setGroup] = useState(1)

  // 換頁
  let history = useHistory()
  function InTheCar() {
    history.push('/shoppingcar/1')
  }
  const pageUrl = '/images/classPhoto/'
  const teacherUrl = '/images/teacher/'

  let { id } = useParams()
  // const [isLoading, setIsLoading] = useState(1)

  //資料庫
  const [buyClass, setBuyClass] = useState([])
  async function getBuyClass(props) {
    try {
      const response = await fetch(`http://localhost:5000/productList/${id}`, {
        method: 'get',
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)

        setBuyClass(data)
        // setTimeout(() => {
        //   if (data.length === 0) {
        //     setIsLoading(3)
        //   } else {
        //     setIsLoading(0)
        //   }
        // }, 0)
      }
    } catch (err) {
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(err)
    }
  }

  const dispalyBuy = buyClass.length > 0 && (
    <>
      <div className="container">
        <MyBreadCrumb />
        {/* 麵包屑 */}
        <figure className="heroPhoto">
          <img src={pageUrl + buyClass[0].classPhoto} alt="圖片替代文字" />
        </figure>
        <div className="title">
          <h2>{buyClass[0].className}</h2>
          <Button variant="info">收藏</Button>
        </div>
        <div className="buyTheTicket">
          {/* 上半部買票區 */}

          <div className="aboutClass">
            {/* 上半部左邊 資訊區 */}

            <div className="aboutIcon">
              <FiClock />
              <div>
                <p>活動時間</p>
                <p>
                  {buyClass[0].classDate} {buyClass[0].classTimeStart}-
                  {buyClass[0].classTimeEnd}
                </p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaMapMarkerAlt />
              <div>
                <p>活動地點</p>
                <p>{buyClass[0].location}</p>
                <p>{buyClass[0].address}</p>
              </div>
            </div>

            <div className="aboutIcon">
              <FaDollarSign />

              <div>
                <p>價格</p>
                <div className="ticketAndPrice">
                  <ul>
                    {buyClass[0].ticket_type.split(',').length > 0 &&
                      buyClass[0].ticket_type
                        .split('-')
                        .map((v, i) => <li>{v}</li>)}
                  </ul>
                  <ul>
                    {buyClass[0].ticket_price.split(',').length > 0 &&
                      buyClass[0].ticket_price
                        .split('-')
                        .map((v, i) => <li>{v}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            <div className="aboutIcon">
              <RiSurgicalMaskFill />
              <div className="tag">
                <p>{buyClass[0].warning}</p>

                {/*  <p>標籤:</p>
                  <Button variant="light">這是七個字字字</Button>
                  <Button variant="light">這是四字</Button>
                  <Button variant="light">是二</Button>*/}
              </div>
            </div>
            <hr />
          </div>

          <div className="IWantBuy">
            {/* 上半部右邊選擇區 */}

            <p>{buyClass[0].className}</p>
            <div className="clock-time">
              <FiClock />
              <p>
                {buyClass[0].classDate} {buyClass[0].classTimeStart}-
                {buyClass[0].classTimeEnd}
              </p>
            </div>

            <div className="ticketBuy">
              <p>早鳥票</p>
              <div className="plusAndMinus">
                <Button variant="light" onClick={() => setEarly(early - 1)}>
                  <AiFillMinusCircle />
                </Button>
                <p>{early}</p>
                <Button variant="light" onClick={() => setEarly(early + 1)}>
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="ticketBuy">
              <p>單人票</p>
              <div className="plusAndMinus">
                <Button variant="light" onClick={() => setSingle(single - 1)}>
                  <AiFillMinusCircle />
                </Button>
                <p>{single}</p>
                <Button variant="light" onClick={() => setSingle(single + 1)}>
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="ticketBuy">
              <p>雙人票</p>
              <div className="plusAndMinus">
                <Button variant="light" onClick={() => setGroup(group - 1)}>
                  <AiFillMinusCircle />
                </Button>
                <p>{group}</p>
                <Button variant="light" onClick={() => setGroup(group + 1)}>
                  <AiFillPlusCircle />
                </Button>
              </div>
            </div>
            <div className="buttonAndHeart">
              {/* 上半部右邊下面按鈕 */}

              <Button variant="info" onClick={InTheCar}>
                加入購物車
              </Button>
              <div className="followMyHeart">
                <Button variant="light">
                  <AiOutlineHeart />
                </Button>
                <p>12345</p>
              </div>
            </div>
          </div>
        </div>
        {/* 上半部結束 */}
        <div className="aboutClassDetails">
          <div className="introduction">
            <p className="classTitel">活動介紹</p>
            <p className="calssInside">{buyClass[0].classValue}</p>
          </div>
          <div className="introduction">
            <p className="classTitel">活動大綱</p>
            <ul>
              {buyClass[0].classOutline.split(',').length > 0 &&
                buyClass[0].classOutline.split('-').map((v, i) => <li>{v}</li>)}
            </ul>
          </div>
          <div className="introduction">
            <p className="classTitel">活動資訊</p>
            <ul>
              <li>日期：{buyClass[0].classDate}</li>
              <li>
                時間：{buyClass[0].classTimeStart}-{buyClass.classTimeEnd}
              </li>
              <li>地點：{buyClass[0].location}</li>
              <li>講師：{buyClass[0].teacher_name}</li>
            </ul>
          </div>

          <div className="introduction">
            <p className="classTitel">活動地點－{buyClass[0].location}</p>
            <p className="calssInside">地點：{buyClass[0].address}</p>
          </div>
          <div className="introduction">
            <p className="classTitel">報名須知</p>

            <ul className="shouldKnow">
              {buyClass[0].needToKnow.split(',').length > 0 &&
                buyClass[0].needToKnow.split('-').map((v, i) => <li>{v}</li>)}
            </ul>
          </div>
          <div className="introduction">
            <p className="classTitel">關於講師</p>
            <Button variant="link" onClick={handleShow}>
              <img
                src={teacherUrl + buyClass[0].teacher_photo}
                alt="圖片替代文字"
              />
            </Button>
            <Modal
              size="400x400"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
              className="modalPage"
            >
              <Modal.Header closeButton>
                <Modal.Title
                  id="example-modal-sizes-title-sm"
                  className="modalPhoto"
                >
                  <img
                    src={teacherUrl + buyClass.teacher_photo}
                    alt="圖片替代文字"
                  />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="nameAndTitle">
                <h1>{buyClass[0].teacher_name}</h1>
                <p>{buyClass[0].teacher_title}</p>
                <p className="teacher_history">{buyClass[0].teacher_history}</p>
              </Modal.Body>
            </Modal>
          </div>
          <hr />
          <div className="introduction">
            <p className="classTitel">活動地圖</p>

            <iframe
              src={buyClass[0].mapSrc}
              width="700px"
              height="300px"
              frameborder="0"
              aria-hidden="false"
              tabindex="0"
              className="thisIsMap"
              title="Map"
            />
          </div>
        </div>
      </div>
    </>
  )
  useEffect(() => {
    getBuyClass()
  }, [])

  // if (isLoading === 0) {
  return dispalyBuy
  // } else if (isLoading === 1) {
  // return <h1>404</h1>
  // } else {
  // return <h1>查無此商品</h1>
  // }
}
export default BuyProducts
