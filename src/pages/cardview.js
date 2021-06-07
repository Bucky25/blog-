import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
import React from 'react'
import './cardview.css'

function CardWithImage() {
    const items = [
        {
          id: 1,
          header: 'Lorem ipsum',
          description:
            'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat',
          image: 'https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png'
        }
      ]
    return (
        <div className="cardview">
        <CardView
        items={items}
        activeColor='#000'
        imageHeight='250px'
        imageWidth='500px'
      />
      </div>
    );
}

export default CardWithImage;


