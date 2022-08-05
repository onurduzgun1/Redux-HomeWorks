import {useEffect} from 'react';
import "./style.css"
import {fetchText,} from "../../Redux/Text/textSlice";
import {useSelector, useDispatch} from "react-redux";

function Textcontainer() {
  const dispatch = useDispatch();

  //parametrelerimiz
  const paras = useSelector((state) => state.text.paras);
  const format = useSelector((state) => state.text.format);

  //container icinde yazacak olan.
  const text = useSelector(state => state.text.items);

  useEffect(() => {
      dispatch(fetchText({paras: paras, format: format}));
  },[dispatch, paras, format]);


  return (
    <div className='textContainerDiv'> {text} </div>
  )
}

export default Textcontainer;