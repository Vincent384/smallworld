'use client'
import React, { useEffect, useState } from 'react'

export const Selections = () => {

const [raceArray, setRaceArray] = useState(['Goblin','Skeleton','Elves','Sorcerer','Ratmen','Ghouls','Giants'])

 const [classArray, setClassArray] = useState(['Berserker','Mountain','Gold','Hill','Dragon Master','Mounted'])

useEffect(() => {
setRaceArray(shuffle(raceArray))
setClassArray(shuffle(classArray))

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

}, [])


  return (
    <div className='flex justify-center gap-4 pt-10 items-center'>
        <div className='flex flex-col gap-2'>
            {
                classArray && classArray.slice(0,5).map((items,index)=>{
                   return <span key={index} className='border p-5 cursor-pointer'>{items}</span>
                })
            }
        </div>
        <div className='flex flex-col gap-2'>
            {
                raceArray && raceArray.slice(0,5).map((items,index)=>{
                   return <span key={index} className='border p-5 cursor-pointer'>{items}</span>
                })
            }
        </div>
    </div>
  )
}
