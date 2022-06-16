import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import searchService from '../../common/search-service';
export default function ProductList() {
  const [items, setItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchService({ searchText: searchParams.get('search') }).then(setItems);
  }, []);

  // console.log(searchParams.get('search'));

  return (
    <div>
      {items.map(item => {
        return <span>{item.title}</span>;
      })}
    </div>
  );
}
