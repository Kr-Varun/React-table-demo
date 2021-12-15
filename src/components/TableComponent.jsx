import { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/DataContext";
import TableItemComponent from "./TableItemComponent";
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";
import './TableComponent.scss';

const TableComponent = () => {    
    const [tableData, setTableData] = useState([]);
    const data = useContext(DataContext);
    const [checkedAll, setCheckedAll] = useState(false);

    useEffect(() => {
        setTableData(data);
    }, [data]);

    useEffect(() => {
        if(tableData.every((obj) => obj.selected===true)){
            setCheckedAll(true);
        }else {
            setCheckedAll(false);
        }
    }, [tableData]);

    const updateSelection = (val) => {
        const updatedRecords = tableData.map(obj=> { 
            if(obj.id===val) {
                obj['selected'] = !obj['selected'];
            }
            return obj;
         });
        setTableData(updatedRecords);

    }

    const showTable = tableData.map(ele => {
        return <TableItemComponent item={ele} itemChanged={updateSelection} key={ele.id}/>
    });

    

    const deleteRecord = () => {
        const unselectedRecords = tableData.filter(ele => ele.selected!==true);
        setTableData(unselectedRecords);
        console.log(tableData);
    };

    const selectAll = (ev) => {
        
        const updatedRecords = tableData.map(obj=> ({ ...obj, selected: ev.target.checked }));
        setTableData(updatedRecords );
    }

    return <>
    {tableData.length ? <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th className="text-center"><input type="checkbox" defaultChecked={checkedAll} key={Math.random()} onChange={selectAll} /></th>
                <th className="text-center">id</th>
                <th>Title</th>
                </tr>
            </thead>
            <tbody>
            {showTable}
            </tbody>
            </Table> : 'Zero records'}
            <Button variant="warning" className="button-delete" onClick={deleteRecord}>Delete</Button>
        </>
}

export default TableComponent;