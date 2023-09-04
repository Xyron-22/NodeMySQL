"use client"

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const BookComponent = () => {
    const [books, setBooks] = useState([]);

    const fetchAllBooks = async () => {
        try {
            const {data} = await axios.get("http://localhost:8080/books")
            setBooks(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:8080/books/${id}`)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      fetchAllBooks()
    }, [])

    // console.log(books.data)

  return (
        <>
         <h1 className='h-[100px] flex items-center justify-center font-bold text-5xl'>MySQL BookShop</h1>
        <div className='w-screen flex align-center flex-row justify-evenly'>
          {books.map(({id, title, description, cover, price}) => {
            return <div key={id} className='h-fit w-fit flex flex-col justify-center'>
                {cover && <img src={cover} alt='' className='bg-aqua w-96 h-96'></img>}
                <h2 className='m-1 text-2xl  font-bold'>{title}</h2>
                <p className='m-1'>{description}</p>
                <span className='m-1'>{price}</span>
                <button className='font-bold p-2 bg-aqua rounded-lg m-1' onClick={() => handleDelete(id)}>Delete</button>
                <button className='font-bold p-2 bg-aqua rounded-lg m-1'><Link href={`/update/${id}`}>Update</Link></button>
            </div>
          })}
        </div>
        <button className='h-[100px] flex items-center justify-center text-4xl font-bold bg-aqua p-5 rounded-lg m-1'><Link href="/add">Add New Book</Link></button>
        </>
  )
}

export default BookComponent