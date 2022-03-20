import { useEffect, useState } from 'react';
import dummydata from "../components/items/dummydata";

const fetchDummyData = async (id) => {
  const item = await dummydata.find(item => item.id === id);
  return item;
};

export default function useDummyData(id) {
  const [dumbObject, setDumbObject] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchDummyData(id)
      .then((item) => setDumbObject(item))
      .finally(() => setloading(false));
  }, [id]);


  return { dumbObject, loading };
}
