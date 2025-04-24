import React,{useState} from 'react'
import dog from '../assets/dog.jpg'
import cat from '../assets/cat.jpg'
import Card from '../components/Card'
import owl from '../assets/owl.jpg'
import img1 from '../assets/imgcmp1.jpg'

function ListRender() {

  const arr = [
  {
    img : dog,
    title : "dog",
    desc : "desc1",
    color : "blue"
  },
  {
    img : cat,
    title : "cat",
    desc : "desc2",
    color : "green"
  },
  {
    img : owl,
    title : "owl",
    desc : "desc3",
    color : "red"
  },
  {
    img : img1,
    title : "new title",
    desc : "new desc",
    color : "yellow"
  }
];


  return (
    <>
      {
        arr.map(function(value,idx){
          return (<Card img={value.img} title={value.title} desc={value.desc} color={value.color}/>)
        })
      }
    </>
  )
}

export default ListRender;