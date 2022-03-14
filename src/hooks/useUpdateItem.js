import { useEffect, useState } from "react";
import { updateItem } from "../services/apiServices";

export const useUpdateItem = (id) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [textfield, setTextfield] = useState('');
  const [website, setWebsite] = useState('');
  const [logo, setLogo] = useState('');
  const [truthy_thing, setTruthyThing] = useState('');
  const [number_thing, setNumberThing] = useState('');

  useEffect(() => {
    updateItem(id)
      .then((item) => {
        setTitle(item.title);
        setTextfield(item.textfield);
        setWebsite(item.website);
        setLogo(item.logo);
        setTruthyThing(item.truthy_thing);
        setNumberThing(item.number_thing);

      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleTextfield = ({ target }) => {
    setTextfield(target.value);
  };

  const handleWebsite = ({ target }) => {
    setWebsite(target.value);
  };

  const handleLogo = ({ target }) => {
    setLogo(target.value);
  };

  const handleTruthyThing = ({ target }) => {
    setTruthyThing(target.value);
  };

  const handleNumberThing = ({ target }) => {
    setNumberThing(target.value);
  };

  return {
    loading,
    title,
    textfield,
    website,
    logo,
    truthy_thing,
    number_thing,
    handleTitle,
    handleTextfield,
    handleWebsite,
    handleLogo,
    handleTruthyThing,
    handleNumberThing
  };
};
