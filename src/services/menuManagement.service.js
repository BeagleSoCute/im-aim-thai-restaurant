import { menuTypes, menuDetails } from "data/menu";

export const matchMenu = (type, id) => {
  const thisType = menuTypes.find((item) => item.type === type);
  const thisMenu = menuDetails.find((item) => item.id === parseInt(id));
  return { thisType, thisMenu };
};
