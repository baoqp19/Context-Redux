import { useContext } from "react";
import { MyContext } from "../App";

const Content = () => {
  const { state } = useContext(MyContext);
  const context = useContext(MyContext);
  
  console.log(context);
  return (
    <div className="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quod,
        quam neque illo harum impedit natus debitis voluptates at est quidem
        dolorem, nihil aperiam excepturi aliquam ad odio et? Ea.
      </p>
      <h4>Dang su dung theme: {state.theme}</h4>
    </div>
  );
};

export default Content;
