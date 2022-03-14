import request from 'superagent';

const URL = "https://YOUR-HEROKU-URL.herokuapp.com/api/v1/items";

export const createItem = async (data) => {
  try {
    const res = await fetch(`${URL}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    const {
      id,
      title,
      textfield,
      website,
      logo,
      truthy_thing,
      number_thing
    } = await res.json();

    return {
      id,
      title,
      textfield,
      website,
      logo,
      truthy_thing,
      number_thing
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchAllItems = async () => {
  try {
    const res = await fetch(`${URL}`);

    const items = await res.json();
    return items.map((item) => ({
      id: item.id,
      name: item.title,
      website: item.website,
      logo: item.logo,
      textfield: item.textfield,
      truthy_thing: item.truthy_thing,
      number_thing: item.number_thing
    }));
  } catch (error) {
    console.error(error.message);
  }
};


export const fetchOneItem = async (itemId) => {
  try {
    const res = await fetch(
      `${URL}/${itemId}`
    );
    const {
      id,
      title,
      website,
      logo,
      textfield,
      truthy_thing,
      number_thing,
    } = await res.json();
    
    return {
      id,
      title,
      website,
      logo,
      textfield,
      truthy_thing,
      number_thing
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const updateItem = async (itemId, updatedItem) => {
  const res = await fetch(
    `${URL}/${itemId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }
  );
  return res.json();
};

export async function deleteItem(itemId) {
  const { body } = await request.delete(
    `${URL}/${itemId}`
  );

  return body;
}
