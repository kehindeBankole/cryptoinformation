import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeapicall } from '../redux/people api/actions'
function People() {
    const data = useSelector(state => state.data)
    const dispa = useDispatch()

      useEffect(() => {
          dispa(makeapicall())
         
      }, [])
      console.log(data)
    return (
        <div>
            {
                data.map((d)=>{
                     return d.id
                })
            }
        </div>
    )
}

export default People
