import { menuTypes, menuDetails, menuChoiceOf } from "data/menu";

export const matchMenu = (type, id) => {
  const thisType = menuTypes.find((item) => item.type === type);
  const thisMenu = menuDetails.find((item) => item.id === parseInt(id));
  const thisChoice = menuChoiceOf[type]
  return { thisType, thisMenu, thisChoice };
};

