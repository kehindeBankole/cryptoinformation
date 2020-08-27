import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeapicall } from '../redux/people api/actions'
function People() {
    const data = useSelector(state => state)
    const dispa = useDispatch()
    useEffect(() => {
        dispa(makeapicall())
    }, [])
    console.log(data)
    if (data.load) return (
        <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
    return (
        <div className="table-responsive  table-responsive-sm table-responsive-md">
            <table className="table table-hover">
                <thead className="thead-dark">
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
                    {data.data.map((d, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td><img src={d.image} alt="coin symbol" width="40" height="40" /></td>
                                <td>{d.name}</td>
                                <td>{d.current_price}</td>
                                <td>{d.total_volume}</td>
                                <td>{d.total_supply === null ? 'not available' : d.total_supply}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <p className="page-link" tabIndex="-1" aria-disabled="true">Previous</p>
                    </li>
                    {/* <li className="page-item"><a className="page-link">1</a></li>
                    <li className="page-item"><a className="page-link" >2</a></li>
                    <li className="page-item"><a className="page-link" >3</a></li> */}
                    <li className="page-item">
                        <p className="page-link" >Next</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default People
