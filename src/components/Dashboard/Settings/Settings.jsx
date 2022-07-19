import React , {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import Manage from './Manage';
// import ImageUploading from "react-images-uploading";




const Settings = () => {
  const history  = useHistory()
  const [name, setName] = useState("Corporate Home Us")
  const [email, setEmail] = useState("email@yourdomain.com")
  const [phone, setPhone] = useState("(305) 555-4446")
  const [address, setAddress] = useState("3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755 Commercial OR 97302")
  const [about, setAbout] = useState("CORPORATEHOMEUS is committed to delivering a high level of expertise, customer service, and attention to detail to the market of accommodation booking.")

  const [currency, setCurrency] = useState([]);
  const [language, setLanguage] = useState([]);
  const {id} = useParams("id")
  



	useEffect(() => {
        getCurrency();
        getLanguage();

    }, []);

	const getCurrency = async () => {
        const response = await axios.get('http://localhost:3003/currency');
        setCurrency(response.data);
    }

  const getLanguage = async () => {
      const response = await axios.get('http://localhost:3003/language');
      setLanguage(response.data);
  }

  useEffect(() => {
    getEmailById(id);
}, []);

const getEmailById = async (id) => {
    const response = await axios.get(`http://localhost:3003/email/${id}`);
    getEmailById(response.id);

}



  
  
  return <div class='text-left'>

  
  

    <div class='app-admin-wrap layout-sidebar-large'>
        <Sidebar />
        <Topbar />
        <div class='main-content-wrap sidenav-open d-flex flex-column'>
           
                <div class='main-content'>
    
          <div class="row mb-4">
            <Manage />

            <div class="col-md-9">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="card-title mb-3">General Settings Form</div>
                            <form>
                            <div class="row p-4">
                            <div className="col-md-1"></div>
                                      <div className="col-md-2">
                                      <label for="charge_name" ><b>Name </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="name" value={name} onChange = {(e) => setName(e.target.value)} type="text"   />
                                        </div>
                                        <div className="col-md-2">
                                          
                                          </div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-2">
                                      <label for="charge_name"><b>Logo </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="description" type="file"  placeholder="Description" rows="3"  />
                                        </div>
                                        <div className="col-md-2"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-2">
                                      <label for="charge_name"><b>Favicon </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="description" type="file"  placeholder="Description" rows="3"  />
                                        </div>
                                        <div className="col-md-2"></div>

                                    <div className="col-md-1"></div>
                                      <div className="col-md-2">
                                      <label for="email"><b>Email </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                        <input class="form-control form-control-rounded" name="email" type="text" value={email} placeholder="email@yourdomain.com"/>
                                       </div>
                                        <div className="col-md-2"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-2">
                                      <label for="email"><b>Phone </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                        <input class="form-control form-control-rounded" value={phone} name="email" type="number"  placeholder="(305) 555-4446"/>
                                       </div>
                                        <div className="col-md-2"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-2">
                                      <label for="email"><b>Address </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                        <textarea class="form-control form-control-rounded" value={address} name="email" type="text"  placeholder=""/>
                                       </div>
                                        <div className="col-md-2"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-2">
                                      <label for="email"><b>About Company </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                        <textarea class="form-control form-control-rounded" value = {about} name="email" type="text"  placeholder=""/>
                                       </div>
                                        <div className="col-md-2"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-2">
                                      <label for="email"><b>Head Code </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                        <textarea class="form-control form-control-rounded" name="email" type="text"  placeholder=""/>
                                       </div>
                                        <div className="col-md-2"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-2">
                                      <label for="email"><b>Default Currency </b></label>
                                       </div>
                                        <div class="col-md-7 form-group mb-3">
                                        <select class="form-control form-control-rounded">
                                          {currency.map((val) => (
                                                 <option>{val.name}</option>
                                          ))}
                                            </select>                                   
                                                </div>
                                        <div className="col-md-2"></div>

                                        <div className="col-md-1"></div>
                                        <div className="col-md-2">
                                        <label for="charge_value"><b>Default Language</b></label>
                                        </div>
                                        <div class="col-md-7 form-group mb-3">
                                            <select class="form-control form-control-rounded">
                                              {language.map((val) => (
                                              <option >{val.name}</option>

                                              ))}

                                            </select>
                                        </div>

                                       <div className="col-md-2"></div>  

        
                                                      
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


}

export default Settings;
