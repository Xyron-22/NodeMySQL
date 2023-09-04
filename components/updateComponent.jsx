"use client"

import React, {useState} from 'react'
import {useRouter} from "next/navigation";
import axios from 'axios';
import Link from 'next/link';

const UpdateComponent = ({props}) => {
    console.log(props)
    const router = useRouter();
    const [book, setBook] = useState({
        title: "",
        description: "",
        price: null,
        cover: ""
    });
    
    const handleChange = (e) => {
        setBook(prev => ({...prev, [e.target.name]: e.target.value}));
    }
    const handleClick = async (id) => {
        console.log(id)
        try {
            await axios.put(`http://localhost:8080/books/${id}`, book);
            console.log("this reached")
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='mb-[400px] text-3xl text-center'>
        <h1 className='h-[100px] flex items-center justify-center font-bold text-5xl pb-5'>Update Book</h1>
      <input type='text' placeholder='title' name='title' onChange={handleChange}></input>
      <input type='text' placeholder='description' name='description' onChange={handleChange}></input>
      <input type='number' placeholder='price' name='price' onChange={handleChange}></input>
      <input type='text' placeholder='cover' name='cover' onChange={handleChange}></input>
      <div className='w-screen flex justify-center m-5'>
        <button className='block text-center rounded-lg bg-aqua p-3 m-3' onClick={() => handleClick(props)}>Update</button>
        <button className='block text-center rounded-lg bg-aqua p-3 m-3'><Link href={"/"}>Go Home</Link></button>
      </div>
    </div>
  )
}

export default UpdateComponent