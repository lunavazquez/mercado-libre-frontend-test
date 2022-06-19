import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import searchService from '../../common/search-service';
import ProductCard from '../../components/ProductCard';
export default function ProductList() {
  const [items, setItems] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    searchService({ searchText: searchParams.get('search') }).then(setItems);
  }, [searchParams]);

  // console.log(searchParams.get('search'));

  return (
    <div className="view">
      {items.map(item => {
        console.log(item);
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            seller={item.seller_address.state.name}
            image={item.thumbnail}
            status={
              item.attributes.find(
                attribute => attribute.id === 'ITEM_CONDITION'
              ).value_name
            }
          />
        );
      })}
    </div>
  );
}
