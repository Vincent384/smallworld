'use client'
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
    {_id:13,class:'Mounted'}])
const [choosedSelection, setChoosedSelection] = useState([])
let listArray = []

useEffect(() => {
    setRaceArray(shuffle(raceArray))
    setClassArray(shuffle(classArray))
    combineArrays()
    function shuffle(array){
        let shuffledArray = []
        let usedIndexes = []

        let i = 0
        while (i < array.length){
            let randomNumber = Math.floor(Math.random() * array.length)
            if(!usedIndexes.includes(randomNumber)){
                shuffledArray.push(array[randomNumber])
                usedIndexes.push(randomNumber)
                i++
            }
        }
        return shuffledArray
    }

    function combineArrays(){
        for (let i = 0; i < raceArray.length; i++) {
            listArray.push([raceArray[i],classArray[i]])
            
        }
        console.log(listArray)
    }

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
                        listArray && listArray.map((items)=>
                            
                            <div className='flex'>
                                    <span key={items._id}>{items.class}</span>
                                    <span key={items.id}>{items.image}</span>
                                <div>
                                </div>
                                <div className=''>
                                </div>
                            </div>
                        
                        )
                    }
               

                {/* <div className='flex flex-col gap-2'>
                    {
                        classArray && classArray.slice(classArray.length-5,classArray.length).map((items)=>{
                        return <span key={items.id} className='border p-5 cursor-pointer'>{items.image}</span>
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
                </div> */}
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