import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { matchMenu } from "services/menuManagement.service";
import FoodDetailsContent from "components/foodDetails/FoodDetailsContent";
const FoodDetails = () => {
  const { type, menuId } = useParams();
  const [menu, setMenu] = useState({});
  useEffect(() => {
    const init = () => {
      const result = matchMenu(type, menuId);
      console.log("result is", result);
      setMenu(result);
    };
    init();
  }, [type, menuId]);
  return (
    <div className="food-details">
      <FoodDetailsContent type={menu.thisType} details={menu.thisMenu} />
    </div>
  );
};

export default FoodDetails;
