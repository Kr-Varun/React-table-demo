import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { useEffect, useState } from 'react';
import {DataContext} from './store/DataContext';
import { AjaxService } from './services/AjaxService';
import TableComponent from './components/TableComponent';
import { Spinner } from 'react-bootstrap';


function App() {
  const [tableData, setTableData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    setShowLoader(true);
    AjaxService.getData('https://jsonplaceholder.typicode.com/todos').then(data=>{
      setShowLoader(false);
      console.log(data);
      setTableData(data);
    }).catch(err => console.log(err));
    
  }, []);
  return (
    
    <DataContext.Provider value={tableData}>
      { showLoader && <Spinner animation="grow" bsPrefix="spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
      <div className="App">
        <TableComponent />
      </div>
    </DataContext.Provider>
  );
}

export default App;
