import Card from 'react-bootstrap/Card';
import React from 'react';

// import CustomTag from '../../CustomTag/CustomTag';

import './MenuItem.scss';

const MenuItem = props => {
  // let tagDisplay = '';
  // if (props.data.tags) {
  //   tagDisplay = props.data.tags.map((t, i) => {
  //     return <CustomTag text={t} key={i} />
  //   });
  // }
  console.log(props.src);
  return (
    <div className='menu-item'>
      <Card className='box-shadow'>
        {/* <Card.Header>{props.data.id}</Card.Header> */}
        <Card.Body>
          {/* <Card.Title>{props.data.name}</Card.Title> */}
          <Card.Img src={props.src} />
          <Card.Text>
            {props.name}
          </Card.Text>
          {/* <BigButton text='Learn More' href={props.data.url} /> */}
        </Card.Body>
        {/* <Card.Footer className='text-muted'>{props.name}</Card.Footer> */}
      </Card>
    </div>
  )
}

export default MenuItem;