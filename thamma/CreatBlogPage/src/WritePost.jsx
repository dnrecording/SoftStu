import React from 'react';
import {Button, Form, Input,Upload, Tooltip} from 'antd'
import './WritePost.css';
import {PlusCircleOutlined} from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea';

export default function WritePost() {

  const onFinish = values => {
    console.log('Success:',values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return(
    <Form name = "head"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete = "off" 
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}>
      <Upload name="logo" action="/upload.do">
          <Tooltip title = "Picture" placement='bottom'>
            <Button icon={<PlusCircleOutlined/>} 
              type={'text'} 
              id={'fileInput'} 
              style={{left: '55px', top: '103px'}}>
            </Button> 
          </Tooltip>
          <Tooltip title = 'Link' placement='bottom'>
            <Button icon={<PlusCircleOutlined/>} 
              type={'text'} 
              id={'fileInput'} 
              style={{top: '140px', left: '23px'}}>
            </Button>
          </Tooltip> 
      </Upload>
      <Form.Item className="TitleText"
        name = "title" size = "Large" maxLength = {30}
        rules={[{ required: true, message: 'Please Enter Title'}]} >
        <Input placeholder="Title" size="large" bordered={false} maxLength={30} />
      </Form.Item>
      <Form.Item className = "storyText"
      name = "story"
      rules={[{ required: true, message: 'Please Enter Your Messages' }]}>
        <TextArea rows={15} placeholder="Tell your story.." bordered={false} />  
      </Form.Item>
      <Button type = 'primary' shape = 'round'className="submitButton" htmlType='submit'>
        Submit
      </Button>
    </Form>
  )
}