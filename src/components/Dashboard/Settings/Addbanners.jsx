import React , {useState} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Manage from './Manage';



const Addbanners = () => {

    const [heading, setHeading] = useState('');
    const [image, setImage] = useState('');
    const [subheading, setSubheading] = useState('')
    const [price, setPrice] = useState('')
    const [link, setLink] = useState('')


    const history = useHistory();
    

  

    const saveBanners = async (e) => {
        e.preventDefault();

          const formData =  new FormData()
              formData.append('image', image)
              formData.append('heading', heading)
              formData.append('subheading', subheading)
              formData.append('price', price)
              formData.append('link', link)
              const res = await axios.post( "http://localhost:3003/banners",  formData)
              console.log(res);
            
              history.push("/banners");
              };

  
  
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
                                <div class="card-title mb-3">Add Banners Form</div>
                            <form  onSubmit={saveBanners} >  
                            <div class="row p-4">
     
                                    <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Heading</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="heading" value={heading}  onChange = {(e) => setHeading(e.target.value) } type="text"   />
                                        </div>
                                        <div className="col-md-1"></div> 


                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Sub Heading</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="subheading" value={subheading}  onChange = {(e) => setSubheading(e.target.value) }type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Price</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="price" value={price}  onChange = {(e) => setPrice(e.target.value) } type="number"   />
                                        </div>
                                        <div className="col-md-1"></div> 

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Link</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" name="link" value={link}  onChange = {(e) => setLink(e.target.value) }  type="text"   />
                                        </div>
                                        <div className="col-md-1"></div>

                                        <div className="col-md-1"></div>
                                      <div className="col-md-4">
                                      <label for="charge_name"><b>Image</b></label>
                                       </div>
                                        <div class="col-md-6 form-group mb-3">
                                            <input class="form-control form-control-rounded" type="file" name="image"  onChange={(e) => setImage(e.target.files[0])}  />
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

export default Addbanners;
