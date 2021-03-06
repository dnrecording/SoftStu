import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import "./ContentPage.css";
import { Layout } from "./components/Layout";
import { Card } from 'react-bootstrap';

function ContentPage() {
    const navigate = useNavigate();

    const items = [...Array(100)].map((val, i) => `Item ${i}`);

    return (
        <Layout>
            <div className='row no-gutters'>
                <div class="col-auto">
                    <Card className='contentPageCard'>
                        {/* <img className='contentImage' src="temple1.jpg" /> */}
                        <Card.Img className="contentPageImage" variant="top" src="temple1.jpg" />
                        <Card.Body>
                            <Card.Title>สิบปากว่า</Card.Title>
                            <Card.Text>
                                นิทานเรื่องนี้ พระอาจารย์พรหม เล่าไว้ในชวนม่วนชื่น ธรรมะบันเทิงหลายเรื่องเล่า เล่มแรก ท่านขึ้นต้นเหมือนนิทานทั่วไป ต่างกันที่ท่านขึ้นต้นว่า ครั้งหนึ่งเมื่อหลายศตวรรษที่แล้ว ในบ้านเมืองหนึ่งซึ่งปกครองด้วยระบอบราชาธิปไตย พระราชาเป็นใหญ่ แต่พระราชาพระองค์นี้ทรงเป็นคนหนุ่ม มีสติปัญญา ทุกปัญหาในบ้านเมือง ทรงเอาเข้าที่ประชุมคณะเสนาบดี ใช้เสียงส่วนใหญ่ตัดสิน

                                แต่ปัญหาคือ แต่ละเสนาบดี ล้วนแต่เป็นขุนนางเก่า รอบรู้และยึดถือธรรมเนียมเก่า ทุกคนล้วนเชื่อมั่นความคิดเห็นเขาถูกต้องหมด ความเห็นของคนอื่นผิดทั้งหมด

                                หลายปีเต็มที ที่การบริหารราชการแผ่นดินไม่ก้าวหน้า เพราะหาข้อสรุปจากที่ประชุมเสนาบดีไม่ได้

                                พระราชาทรงครุ่นคิดพักใหญ่ ก็ได้ทางออก ทรงประกาศให้จัดงานฉลองใหญ่ในวาระพิเศษ...ในสนามกีฬาใหญ่ของเมือง แน่ละ คณะเสนาบดีเป็นเป้าหมาย...ทรงจัดที่นั่งให้หน้าเวทีการแสดง ใกล้ชิดทุกกิจกรรม การแสดงเริ่มต้น ที่กายกรรม สลับการเล่นตลก ตามด้วยการเต้นระบำรำฟ้อน การร้องรำทำเพลง และแล้ว ก็ถึงการแสดงชุดสุดท้าย ไม่มีใครคาดคิด การแสดงชุดล่า...พระราชาทรงจะแสดงนำเอง

                                พระราชาทรงเดินนำช้างหลวง...เข้ากลางสนาม ตามด้วยชายตาบอดเจ็ดคน

                                ชายตาบอดทุกคนถูกเลือกมาด้วยคุณสมบัติ ตาบอดมาแต่กำเนิด ไม่รู้จักช้างมาก่อน

                                พระราชาดึงมือชายตาบอดคนแรกจับที่งวงช้าง ทรงบอก “นี่คือช้าง”

                                ตาบอดคนที่สอง ทรงนำไปจับงาช้าง คนที่สามจับหู คนที่สี่จับหัว คนที่ห้าจับลำตัว คนที่หกจับขา และคนที่เจ็ดจับหาง ...แน่นอน ทรงบอก “นี่คือช้าง” เหมือนกันทุกคน

                                จากนั้นพระราชาก็ย้อนมาเริ่มต้นตาบอดคนแรกที่ได้จับงวงช้าง...แล้วทรงถาม “ช้างคืออะไร”

                                “ข้าพเจ้าไตร่ตรองจากประสบการณ์มั่นใจเต็มร้อย” ตาบอดคนแรกกราบทูล “ช้างคืองูเหลือม”

                                คิวตาบอดคนที่สอง ที่ได้จับงา “เหลวไหล” เขาพูดเสียงดัง ช้างเป็นงูได้ยังไง ข้าพเจ้าเชื่อว่า “ช้างคือคันไถ”

                                ตาบอดคนที่สาม ที่ได้จับหู “ช้างคือพัดที่ทำจากใบตาล” “ช้างคือตุ่มน้ำ ดีๆนี่เอง” เป็นคำทูลของตาบอคนที่สี่ ที่ได้จับหัวช้าง การแสดงเริ่มต้น ที่กายกรรม สลับการเล่นตลก ตามด้วยการเต้นระบำรำฟ้อน การร้องรำทำเพลง และแล้ว ก็ถึงการแสดงชุดสุดท้าย ไม่มีใครคาดคิด การแสดงชุดล่า...พระราชาทรงจะแสดงนำเอง

                                พระราชาทรงเดินนำช้างหลวง...เข้ากลางสนาม ตามด้วยชายตาบอดเจ็ดคน

                                ชายตาบอดทุกคนถูกเลือกมาด้วยคุณสมบัติ ตาบอดมาแต่กำเนิด ไม่รู้จักช้างมาก่อน

                                พระราชาดึงมือชายตาบอดคนแรกจับที่งวงช้าง ทรงบอก “นี่คือช้าง”

                                ตาบอดคนที่สอง ทรงนำไปจับงาช้าง คนที่สามจับหู คนที่สี่จับหัว คนที่ห้าจับลำตัว คนที่หกจับขา และคนที่เจ็ดจับหาง ...แน่นอน ทรงบอก “นี่คือช้าง” เหมือนกันทุกคน

                                จากนั้นพระราชาก็ย้อนมาเริ่มต้นตาบอดคนแรกที่ได้จับงวงช้าง...แล้วทรงถาม “ช้างคืออะไร”

                                “ข้าพเจ้าไตร่ตรองจากประสบการณ์มั่นใจเต็มร้อย” ตาบอดคนแรกกราบทูล “ช้างคืองูเหลือม”

                                คิวตาบอดคนที่สอง ที่ได้จับงา “เหลวไหล” เขาพูดเสียงดัง ช้างเป็นงูได้ยังไง ข้าพเจ้าเชื่อว่า “ช้างคือคันไถ”

                                ตาบอดคนที่สาม ที่ได้จับหู “ช้างคือพัดที่ทำจากใบตาล” “ช้างคือตุ่มน้ำ ดีๆนี่เอง” เป็นคำทูลของตาบอคนที่สี่ ที่ได้จับหัวช้าง
                            </Card.Text>
                            <Button className='like-button'>Like</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col">
                    <Card className='contentPageComment'>
                        <Card.Body>
                            <Card.Title>Comment</Card.Title>
                            <div className="center-col">
                                <ul>
                                    {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
                                </ul>
                            </div>
                            <div className="myComment">
                            <div class="col-auto">
                                <input
                                    type="name"
                                    class="form-control"
                                    id="comment"
                                ></input>
                            </div>
                            <div class="col">
                                <Button className='ContentpageLike-button'>Send</Button>
                            </div>
                            </div>
                        </Card.Body>
                    </Card>
                    
                </div>
            </div>
        </Layout>
    );
}

export default ContentPage;
