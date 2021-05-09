import {$authHost, $host} from "./index";

export const addItemToBasket = async ({ itemId, userId }) => {
    const { data } = await $authHost.post('api/basket', { itemId, userId })
    return data;
}

export const getOne = async ({ userId }) => {
  const { data } = await $authHost.get(`api/basket/${userId}`)
  return data;
}
