import React from 'react';
import { PageHeader, Divider, Card, Button} from 'antd';
import '../styles/DesignLesson.scss';
import HomeHeader from './Home/HomeHeader';

export default function DesignLesson({ history }) {
  return (
    <>
       <HomeHeader/>
        <div className="title">
          <p> Jornada dos códigos | 01</p>
          <h1> Soma Simples </h1>
        </div>
        <Divider />
        <div className="body">
          <p>
            Leia 2 valores inteiros e armazene-os nas variáveis A e B. 
            Efetue a soma de A e B atribuindo o seu resultado na variável X. 
            Imprima X conforme exemplo apresentado abaixo. 
            Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de 
            imprimir o fim de linha após o resultado, caso contrário, você receberá "Erro de apresentação".
          </p>
          <h2> Entrada </h2>
          <p>
            A entrada contém 2 valores inteiros.
          </p>
          <h2> Saída </h2>
          <p>
            Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final
            de linha. Cuide para que tenha um espaço antes e depois do sinal de igualdade, 
            conforme o exemplo abaixo.
          </p>
          <Divider style={{ margin: 0}}></Divider>
          <div className="examples">
            <div className="title-examples">
              <h3> Entrada</h3>
              <h3> Saída </h3>
            </div>
              <Divider style={{ margin: 0}}></Divider>
              <div className="title-examples">
                <Card style={{ border: 'none', margin: '0'}}>
                  10 <br/>
                  9
                </Card>
                <Card style={{ border: 'none', margin: '0'}}>
                X = 19
                </Card>
              </div>
              <div className="title-examples">
              <Card style={{ border: 'none', margin: '0'}}>
                -10 <br />
                  4
                </Card>
                <Card style={{ border: 'none', margin: '0'}}>
                X = -6
                </Card>
              </div>
              <Divider style={{ margin: 0}}></Divider>
              <Button 
                    type="default" 
                    size="default" 
                    style={{ marginTop: '5px',  background: '#7baa4a'}}
                    onClick={() => history.push('code-lesson')}
              > 
              Enviar resolução 
            </Button>
          </div>
        </div>
    </>
  );
}
