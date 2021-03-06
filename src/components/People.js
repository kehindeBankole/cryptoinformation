import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeapicall } from '../redux/people api/actions'
import { nextapipage, prevapipage } from '../redux/people api/actions'
import { Loading } from './Loading'
function People() {
    const data = useSelector(state => state)
    const dispa = useDispatch()
    useEffect(() => {
        dispa(makeapicall(data.currentpage))
    }, [data.currentpage])

    if (data.load) return (
        <Loading />
    )
    return (
<div className="container">

<div className="table-responsive table-responsive-sm table-responsive-md">
            <table className="table table-hover" id="myTable">
                <thead className="thead-dark" style={{textTransform : 'capitalize'}}>
                    <tr>
                        <th scope="col">symbol</th>
                        <th scope="col">coin</th>
                        <th scope="col">current price</th>
                        <th scope="col">total volume</th>
                        <th scope="col">total supply</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((d, index) => {
                        return (
                            <tr key={index}>
                                <td><img src={d.image} alt="coin symbol" width="40" height="40" /></td>
                                <td>{d.name}</td>
                                <td>${d.current_price}</td>
                                <td>{d.total_volume}</td>
                                <td>{d.total_supply === null ? 'not available' : d.total_supply}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${data.currentpage > 1 ? '' : 'd-none'}`} onClick={() => dispa(prevapipage())}>
                        <p className="page-link" tabIndex="-1" aria-disabled="true">Previous</p>
                    </li>
                    <li className="page-item" onClick={() => dispa(nextapipage())}>
                        <p className="page-link" >Next</p>
                    </li>
                </ul>
            </nav>
        </div>
</div>
    )
}

export default People
