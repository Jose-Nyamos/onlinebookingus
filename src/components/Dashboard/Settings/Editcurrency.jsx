import React , {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import Manage from './Manage';


const Editcurrency = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [symbol, setSymbol] = useState('');
    const [rate, setRate] = useState('');
 
    const history = useHistory();

    const {id} = useParams("id");

    const EditCurrency = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/currency/${id}`,{
            name: name,
            code: code,
            symbol: symbol,
            rate: rate,
                 
        });
                history.push("/currency");
            }
        
            useEffect(() => {
            getCustomerById(id);
        }, []);
        
        const getCustomerById = async (id) => {
            const response = await axios.get(`http://localhost:3003/currency/${id}`);
            setName(response.data.name);
            setCode(response.data.code);
            setSymbol(response.data.symbol);
            setRate(response.data.rate);

        }

  return <div class='text-left'>


    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
            {/* <!-- ============ Body content start ============= --> */}
            <div class='main-content'>
       

    
          <div class="row mb-4">
         <Manage />

            <div class="col-md-9">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="card-title mb-3">Add Currency Form</div>
                                
                            <form onSubmit={EditCurrency}>
                            <div class="row p-4">
     
                            <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Name</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}  />
                                        </div>
                                        <div className="col-md-1"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Code</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="code" value={code} onChange={(e) => setCode(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Symbol</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Rate</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="rate" value={rate} onChange={(e) => setRate(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div> 


                                       <div className="col-md-1"></div>
                                        <div className="col-md-4">
                                        <label for="charge_value"><b>Status</b></label>
                                        </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <select class="form-control form-control-rounded">
                                              <option value="Active">Active</option>
                                              <option value="Inactive">Inactive</option>
                                            </select>
                                        </div>
                                       <div className="col-md-1"></div>
                                                      
                              <div class="col-md-12">
                                <button class="btn btn-grey">Reset</button>
                                <button class="btn btn-primary float-right" onClick={() => history.push("/currency")}>Submit</button>
                            </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
          
          </div>
       </div>
       </div>
       
    
</div>
  ;
}

export default Editcurrency;
