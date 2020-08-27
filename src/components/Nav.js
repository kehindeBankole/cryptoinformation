import React from 'react'
export const Nav = () => {

    function myFunction() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }


    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-3 py-3">
                <h1 className="text-white">KRYPTO</h1>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" onKeyUp={() => myFunction()} id="myInput" placeholder="Search" aria-label="Search" />
                </form>
            </nav>
        </div>
    )
}
