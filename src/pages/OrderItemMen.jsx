import React, { Fragment } from 'react';
import {useParams} from 'react-router-dom';

import useSingleWomen from '../hooks/useSingleWome';
import Spinner from '../components/Spinner';
import ProductDetails  from '../components/OrderItemDeatils';

const OrderItem =({ params })=>{

  const { id } = useParams();
  const { isLoading, itemWomem } = useSingleWomen(id)

  console.log(isLoading,"fdfkgldkf");

  if (isLoading || (!itemWomem)) {
    console.log("HHHHHHHHHH");
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    )
  }

  console.log(itemWomem[0].description ,"GGG")
  return(
    <div>
      <ProductDetails product={itemWomem}  />
    </div>
  );
};

export default OrderItem;