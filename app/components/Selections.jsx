'use client'
import { list } from 'postcss'
import React, { useEffect, useRef, useState } from 'react'

export const Selections = () => {

const [raceArray, setRaceArray] = useState([
    {id:1, image:'Goblin'},
    {id:2,image:'Skeleton'},
    {id:3,image:'Elves'},
    {id:4,image:'Sorcerer'},
    {id:5,image:'Ratmen'},
    {id:6,image:'Ghouls'},
    {id:7,image:'Giants'},])

 const [classArray, setClassArray] = useState([
    {_id:8,class:'Berserker'},
    {_id:9,class:'Mountain'},
    {_id:10,class:'Gold'},
    {_id:11,class:'Hill'},
    {_id:12,class:'Dragon Master'},
    {_id:13,class:'Mounted'},
    {_id:14,class:'Decay'}])
const [choosedSelection, setChoosedSelection] = useState([])
const [listArray, setListArray] = useState([])

console.log(listArray)
useEffect(() => {
    setRaceArray(shuffle(raceArray))
    setClassArray(shuffle(classArray))
    combineArrays()
    function shuffle(array){
        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }

    function combineArrays(){
        
        for (let i = 0; i < raceArray.length; i++) {
            listArray.push([raceArray[i],classArray[i]])
            
        }
        

    }

}, [])

useEffect(() => {

}, [])


function handleRemoveRaceClick(id){    
const findSelection = raceArray.find((items) => items.id === id)    
const removeSelection = raceArray.filter((items) =>  items.id !== id)
setRaceArray(removeSelection)
setChoosedSelection(findSelection)
console.log(removeSelection)
console.log(raceArray)
console.log(choosedSelection)
}


  return (
    <div>
            <div className=''>
                
                    {
                        listArray && listArray.map((array) =>(array.map((item)=>(
                    <div key={item.id || item._id} className='flex flex-col'>
                            <p key={item.id}>{item.image}</p>
                            <p key={item._id}>{item.class}</p>
                    </div>
                        ))))
                            

                        
                        
                    }
               

                {/* <div className='flex flex-col gap-2'>
                    {
                        classArray && classArray.slice(classArray.length-5,classArray.length).map((items)=>{
                        return <p key={item.id}>{item.image}</p> cursor-pointer'>{items.image}</span>
                        })
                    }
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        raceArray && raceArray.slice(raceArray.length-5,raceArray.length).map((items)=>{
                        return <span key={items.id} onClick={() =>handleRemoveRaceClick(items.id)} 
                        className='border p-5 cursor-pointer'>{items.image}</span>
                        })
                    }
                </div>  */}
            </div>
        <div>
           {
                        choosedSelection.length >= 1 && choosedSelection.map((items)=>{
                        return <span key={items.id} 
                        className='border p-5 cursor-pointer'>{items.image}</span>
                        })
           }
        </div>
    </div>
  )
}