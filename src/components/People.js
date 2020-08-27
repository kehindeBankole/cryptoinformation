import React, { useEffect , useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeapicall } from '../redux/people api/actions'
function People() {
    const data = useSelector(state => state)
    const dispa = useDispatch()
    useEffect(() => {
        dispa(makeapicall())

    }, [])
    console.log(data)
    return (
        <div className="table-responsive  table-responsive-sm table-responsive-md">
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">s/n</th>
                        <th scope="col">symbol</th>
                        <th scope="col">coin</th>
                        <th scope="col">current price</th>
                        <th scope="col">total volume</th>
                        <th scope="col">total supply</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((d , index)=>{
                      return(
                        <tr>
                        <th scope="row">{index}</th>
                      <td><img src={d.image} alt="coin symbol" width="40" height="40"/></td>
                      <td>{d.name}</td>
                      <td>{d.current_price}</td>
                      <td>{d.total_volume}</td>
                      <td>{d.total_supply === null ? 'not available' : d.total_supply}</td>
                    </tr> 
                      )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default People
