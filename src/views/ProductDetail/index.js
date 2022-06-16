import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import detailService from '../../common/detail-service';
export default function ProductDetail() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    detailService({ itemId: id }).then(setItem);
  }, []);
  return <div>{item.title}</div>;
}
