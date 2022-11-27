import React from 'react';
import Card from './Card';

const Cards = () => {
   return (
      <div className='grid grid-cols-3 gap-7 mx-2'>
         <Card></Card>
         <Card></Card>
         <Card></Card>
      </div>
   );
};

export default Cards;