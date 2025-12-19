import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const SectionComponent = () => {
  return (
<CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.domingoloro.com/images/portfolio_2024/Julio/render-3D-vilanova-domingo-loro.jpg" />
        <Card.Body>
          <Card.Title align="center">Render clasico</Card.Title>
          <Card.Text align="center">
            Esto es lo que ves cuando pensas en un render
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="../public/1rapersona.jpg" />
        <Card.Body>
          <Card.Title align="center">Render en 1era persona</Card.Title>
          <Card.Text align="center">
            Click en el boton de abajo para visualizar el render en primera persona
            <br/>
            <button onClick={() => window.open('https://vista-primera-persona.netlify.app/', '_blank')}>Render 3D</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

