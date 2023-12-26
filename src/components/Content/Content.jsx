import "./Content.css";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/todoSelectors";
import Login from "../Login/Login";
import Main from "./Main/Main";

const Content = () => {
  const auth = useSelector(selectAuth);

  return (
    <main className='main'>
      {auth ? <Main /> : <Login />}
    </main>
  )
};

export default Content;

