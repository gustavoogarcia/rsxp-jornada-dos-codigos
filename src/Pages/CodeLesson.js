import React, { useState } from 'react'
import AceEditor from "react-ace";
import '../styles/CodeLesson.scss';
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";

import { Icon, Button, PageHeader, Input, Divider, Select } from 'antd';

const { Option } = Select;


export default function CodeLesson({ history }) {
    const [code, setCode] = useState('');
    return (
        <>
        <PageHeader
            style={{
            border: '1px solid rgb(235, 237, 240)',
            background: '#7baa4a'
            }}
            onBack={() => history.push('/design-lesson')}
            title="Enviar solução"
        />
        <div className="container">
            <div className="container-inputs">
                <Input placeholder="Número da lição" disabled value="01"/>

                <Select placeholder="Selecione a linguagem" style={{ width: '90%'}}>
                    <Option value="portugol">Portugol</Option>
                    <Option value="python">Python</Option>
                </Select>
            </div>
            
        <Divider> Seu Código </Divider>
            <AceEditor
                    mode="html"
                    style={{ width: '100%'}}
                    theme="github"
                    onChange={() => setCode(code)}
                    value={code}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                />
            <div className="invite-button">
                <Button 
                    size="large" 
                    style={{ background: '#7baa4a', marginTop: '20px', width: '90%'}}
                    onClick={() => history.push('/list-lessons')}
                >
                   Enviar <Icon type="check" />
                </Button>
            </div>
        </div>
        </>
    )
}