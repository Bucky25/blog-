import React from 'react'
import './item.css'
import { Card, Button } from 'react-bootstrap';
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'

function Item() {
            const items = [
              {
                id: 1,
                header: 'Lorem ipsum',
                description:
                  'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat',
                image: 'https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png'
              },
              {
                id: 2,
                header: 'Sed cursus',
                description:
                  'in metus quis tempor. Donec at venenatis magna, vel fringilla dui. Curabitur id gravida ipsum. Donec at mollis massa. Nullam metus elit, pret',
                image: 'https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png'
              },
              {
                id: 3,
                header: 'Sed fermentum',
                description:
                  'condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie',
                image: 'https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png'
              },
              {
                id: 4,
                header: 'Proin et urna',
                description:
                  'vitae neque fermentum fringilla. Proin bibendum sollicitudin aliquet. Fusce id magna aliquam, pulvinar metus vitae, bibendum felis.',
                image: 'https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png'
              },
              {
                id: 5,
                header: 'Cras leo velit',
                description:
                  'finibus id eros eu, commodo sollicitudin lacus. Nunc semper enim nec est viverra, at pharetra orci lobortis. Nulla facilisi. Sed non lectus nunc.',
                image: 'https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png'
              }
            ]
            return (
                <>
                <div className="item item_image">
                    <Card style={{ width: '30rem' }}> 
                        <Card.Img variant="top" src="https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content jnknscnks jnjknjksn jnjknsxjkn knsjnkjsnkjsnkn jnjknjxnsjn sjksnjkns snjksnx jknjkxnsx kjnjksnxjkn jksnkksijlknl knskxsxknnj jknkjnuixnjknxjn jknjknnxjksanjkn jnjknnnjkasjk .
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
              <CardView
                items={items}
                activeColor='#000'
                imageHeight='650px'
                imageWidth='800px'
              />
            
          </>
    )
}

export default Item
