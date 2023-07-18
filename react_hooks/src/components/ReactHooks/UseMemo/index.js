import React, {useState, useMemo} from 'react'

function SortedList({list, sortFunction}){
    console.log("Running Sorted")

    const sortedList = useMemo(()=>{console.log("Already Sorted"); return [...list].sort(sortFunction)}, [list, sortFunction]);

    return <div>SortedNames: {sortedList.join(", ")}</div>
}

function UseMemo(){
const [numbers] = useState([10, 20, 30])

const total=  useMemo(() => numbers.reduce((a,b)=>a+b,0), [numbers])

const [names] = useState(['Satya', 'Sai', 'Naga', 'Lakshmi'])

const sortFunc = (a,b) => a.localeCompare(b)

const [count1, setCount1] = useState(0)

const [count2, setCount2] = useState(0)

const totalCount = count1 + count2 

return (
    <>
<div>Total:{total}</div>
<div>Names: {names.join(", ")}</div>
<SortedList list={names} sortFunction={sortFunc}/>
<button type="button" onClick={()=>setCount1(count1+1)}>Count1: {count1}</button>
<button type="button" onClick={()=>setCount2(count2+1)}>Count2: {count2}</button>
<div>{totalCount}</div>
</>
)
}

export default UseMemo 