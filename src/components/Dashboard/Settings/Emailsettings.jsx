import React , {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import Manage from './Manage';


const Emailsettings = () => {

    const [protocol, setProtocol] = useState('');
    const [host, setHost] = useState('');
    const [from_address, setFrom_address] = useState('');
    const [port, setPort] = useState('');
    const [from_name, setFrom_name] = useState('');
    const [encryption, setEncryption] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const {id} = useParams("id")
  
    const history  = useHistory() 


 

  
   const editEmail = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/email/${id}`,{
            protocol: protocol,
            host: host,
            from_address: from_address,
            port: port,
            from_name: from_name,
            encryption: encryption,
            username: username,
            password: password

                }
                
            );
            history.push("/emailsettings/:id")

            }
            useEffect(() => {
                getEmailById(id);
            }, []);

            const getEmailById = async (id) => {
                const response = await axios.get(`http://localhost:3003/email/${id}`);
                setProtocol(response.data.protocol);
                setHost(response.data.host);
                setFrom_address(response.data.from_address);
                setPort(response.data.port);
                setFrom_name(response.data.from_name);
                setEncryption(response.data.encryption);
                setUsername(response.data.username);
                setPassword(response.data.password);

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
                                <div class="card-title mb-3">Email Settings Form <i class = "i-Check" ></i></div>
                            <form  onSubmit={editEmail}>
                            <div class="row p-4">

                            <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Email Protocol Form </b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                        <select class="form-control form-control-rounded">
                                              <option value={protocol} onChange = {(e) => setProtocol(e.target.value)}>{protocol}</option>
                                              <option value="Email">Email</option>
                                            </select>                    
                                         </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Host</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="host" value={host} onChange = {(e) => setHost(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>PORT</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="port" value={port} onChange = {(e) => setPort(e.target.value)}type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Form Address</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="from_address" value={from_address} onChange = {(e) => setFrom_address(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Form Name</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="from_name" value={from_name} onChange = {(e) => setFrom_name(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Encryption</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="encryption" value={encryption} onChange = {(e) => setEncryption(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Username</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="username" value={username} onChange = {(e) => setUsername(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Password</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="password"  value={password} onChange = {(e) => setPassword(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>
                                                    
                              <div class="col-md-12">
                                <button class="btn btn-grey">Reset</button>
                                <button class="btn btn-primary float-right">Submit</button>
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

export default Emailsettings;
