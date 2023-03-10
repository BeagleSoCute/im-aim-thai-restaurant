import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { matchMenu } from "services/menuManagement.service";
import FoodDetailsContent from "components/foodDetails/FoodDetailsContent";
const FoodDetails = () => {
  const { type, menuId } = useParams();
  const [menu, setMenu] = useState({});
  const [choice, setChoice] = useState();

  useEffect(() => {
    const init = () => {
      const result = matchMenu(type, menuId);
      setMenu(result);
    };
    init();
  }, [type, menuId]);
  const handleSelectChoiceOf = (selectedValue) => {
    setChoice(selectedValue);
  };
  return (
    <div className="food-details">
      <FoodDetailsContent
        type={menu.thisType}
        details={menu.thisMenu}
        choiceOf={menu.thisChoice}
        selectedChoice={choice}
        handleChange={handleSelectChoiceOf}
      />
    </div>
  );
};

export default FoodDetails;
