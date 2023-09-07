import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  let {Title, desc, btnText} = props;
  return (
    <div className='container'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1693432140286-0f527970f256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" />
        <Card.Body>
          <Card.Title>{Title || 'Title here'}</Card.Title>
          <Card.Text>
            {desc || 'Description here'}
          </Card.Text>
          <Button variant="primary">{btnText || 'button text here'}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;