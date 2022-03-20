import { useEffect, useState } from 'react';
import dummydata from "../components/items/dummydata";

const fetchDummyData = async (id) => {
  const user = await dummydata.find(user => user.id === id);
  return user;
};

export default function useDummyData(id) {
  const [dumbObject, setDumbObject] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchDummyData(id)
      .then((user) => setDumbObject(user))
      .finally(() => setloading(false));
  }, [id]);


  return { dumbObject, loading };
}
