function addList({ list} ){

    // let items = list.map( (val , indx) => <li> {val.Task} </li>);

    return(
        <ol>
            {list.map( (val , indx) => <li key = {indx}> {val} </li>)}
        </ol>
    );

}

export default addList;