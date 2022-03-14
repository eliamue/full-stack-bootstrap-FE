import { useState } from "react";

export const useCreateItem = () => {
  const [title, setTitle] = useState('');
  const [textfield, setTextfield] = useState('');
  const [website, setWebsite] = useState('');
  const [logo, setLogo] = useState('');
  const [truthy_thing, setTruthyThing] = useState('');
  const [number_thing, setNumberThing] = useState('');

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
