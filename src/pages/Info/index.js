import './Info.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Info (){

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getNewsData() {
    setLoading(true);
    const resp = await axios.get('https://newsapi.org/v2/everything?q=agriculture&apiKey=0041028eb37541c5a3378959176063f0');
    setNewsData(resp.data.articles);
    setLoading(false);
  }

  useEffect(() => {
    getNewsData();
  }, []);
  
  return (
    <div className="conteudo-info">
      <header className="App-header">
        {loading ? "Carregando..." : <Container>

          {newsData.map((newsData, index) =>
            <Row className="d-flex justify-content-center">
              <Col xs={12} className="mt-5 w-500" key={index}>
                <a target="_blank" href={newsData.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card >
                    <Card.Title className="my-3">  {newsData.title}</Card.Title>
                    <Card.Img className='card-img' src={newsData.urlToImage} />
                    <Card.Body>

                      {/* <Card.Text>
                        {newsData.description}
                      </Card.Text> */}
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
          )}

        </Container>
        }
      </header>
    </div>
  );
};

export default Info;
