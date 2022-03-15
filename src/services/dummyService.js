import { useEffect, useState } from 'react';
import dummydata from '../components/items/dummydata';

export const fetchData = async () => {
    try {
        const res = await dummydata;
        return res.map((data) => ({
            title: data.title,
            textfield: data.textfield,
            website: data.website,
            logo: data.logo,
            truthy_thing: data.truthy_thing,
            number_thing: data.number_thing
        }));
    } catch (error) {
        console.error(error.message);
    }
}

export function findById(thisArray, someId) {
    const numberId = Number(someId);
    for (let item of thisArray) {
        if (item.id === numberId) 
        console.log("find by id", item)
        return item;
    }
    return null;
}

export const fetchOneDumbItem = async (itemId) => {
    try {
      const singleitem = findById(dummydata, itemId);
      console.log("fetch dummy", dummydata, singleitem);
      return singleitem;

    } catch (error) {
      console.error(error.message);
    }
  };

export const useItems = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetchData()
        .then((res) => setItems(res))
        .finally(() => setLoading(false));
    }, []);
  
    return { loading, items };
  };

