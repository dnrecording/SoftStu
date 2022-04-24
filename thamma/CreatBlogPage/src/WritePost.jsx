import React from 'react';
import {Button, Form, Input,Upload, Tooltip} from 'antd'
import './WritePost.css';
import {PlusCircleOutlined} from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea';

const App = () => {
    return(
      <div className = "write">
        <form className='writeForm'>
          <div className = 'writeFormGroup'>
            <Form.Item name={['Title']}>
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
                <Input style={{width: '20%', left: '100px'}} placeholder="Title" size="large" bordered={false} maxLength={30} />
            </Form.Item>
          </div>
          <div className='writeFormGroup'>
            <TextArea rows={10} placeholder="Tell your story.." bordered={false}
              style = {{width: '85%', left:'100px'}} />
          </div>
          <Button className='writeSubmit' type='primary' shape='round' size='large'>Submit</Button>
        </form>
      </div>
    );
  };