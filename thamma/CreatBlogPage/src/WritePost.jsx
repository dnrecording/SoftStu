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
    <div className = "write">
        <div className = 'writeFormGroup'>
          <Form name= "head" 
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete = "off">
              <Upload name="logo" action="/upload.do">
                <Tooltip title = "Picture" placement='bottom'>
                <Button icon={<PlusCircleOutlined/>} 
                  type={'text'} 
                  id={'fileInput'} 
                  style={{left: '55px', top: '93px'}}>
                </Button> 
                </Tooltip>
                <Tooltip title = 'Link' placement='bottom'>
                <Button icon={<PlusCircleOutlined/>} 
                  type={'text'} 
                  id={'fileInput'} 
                  style={{top: '130px', left: '23px'}}>
                </Button>
                </Tooltip> 
              </Upload>
              <Form.Item 
                name = "title"
                rules={[{ required: true, message: 'Please Enter Title'}]} 
                requiredMark='hidden'
                >
                <Input style={{width: '20%', left: '100px'}} placeholder="Title" size="large" bordered={false} maxLength={30} />
              </Form.Item>
          </Form>
        </div>
        <div className='writeFormGroup'>
          <TextArea rows={10} placeholder="Tell your story.." bordered={false}
            style = {{width: '85%', left:'100px'}} />
        </div>
        <Button className='writeSubmit' type='primary' shape='round' size='large' htmlType='submit'>Submit</Button>
    </div>
  )
}