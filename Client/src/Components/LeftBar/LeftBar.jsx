import React, { useState, useEffect } from 'react';
import './style.css';
import { IoMdAddCircle } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';






const LeftBar = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => { 
    axios.get('http://localhost:3000/todos/api/getpro')
   .then((res) => {
        setProjects(res.data);
      })
   .catch((err) => {
        console.log(err);
      });
  }, []);
  const addProject = async (e) => {
    e.preventDefault(); 
    const title = document.querySelector('.input-add').value;
    if (!title) {
      alert('Please enter a title');
      return;
    }
    try {
      await axios.post('http://localhost:3000/todos/api/projects', {
        title: title
      });
      document.querySelector('.input-add').value = '';
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };




  const deleteProject = (id) => {
    axios.post('http://localhost:3000/todos/api/delete' , {id} ).then(() => {
      location.reload();
    }).catch(() => {
      alert('error');
    })
  }



  return (
    <div className='left'>
      <h2 className='h2'>المشاريع</h2>
      <div className="addpro">
        <input type="text" placeholder='اسم الملف' className='input-add' />
        <button onClick={addProject}><IoMdAddCircle /></button> 
      </div>
      <div className="contairproject">
        {projects.map((project, index) => (
          <div key={index}>
            <Link  to={`/${index}`}>  <span><FaFolder /></span>  {project.title}</Link>
            <button className='delete' onClick={ () => deleteProject(project._id)}><MdDelete className='svg'/></button>
          </div>
      
        ))}
      </div>
    </div>
  );
};

export default LeftBar;