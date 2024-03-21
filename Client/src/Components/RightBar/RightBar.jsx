import React, { useEffect } from 'react'
import './Rightstyle.css';
import  axios  from 'axios';

const RightBar = ({materialIndex}) =>{
  const [Tasts, setTasts] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/todos/api/getpro').then((res) => {
      setTasts(res.data[materialIndex]);
    } )
  },[])

  console.log(Tasts);
  return (
    <div className='right'>
      <h2 className='h2'>Tasks </h2>

      <div className="con">
        <div className='one-task'>
          <input type="checkBox" className='check' id= 'ahmed' name= 'projests' />
          <label htmlFor="ahmed">علينا العمل بجد في كل يوم</label>
        </div>


      </div>

      <div className="addTask">
        <input type="text" placeholder='اضافة مهمة هنا' />
        <button className='addt'>أضافة مهمة</button>
      </div>
    </div>
  )
}

export default RightBar