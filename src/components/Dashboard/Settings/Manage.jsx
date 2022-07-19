import React , {useState , useEffect} from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import {Link} from  'react-router-dom';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';


const Manage = () => {
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
    const [email, setEmail] = useState([]);

	useEffect(() => {
        getEmail();
    }, []);

	const getEmail = async () => {
        const response = await axios.get('http://localhost:3003/email');
        setEmail(response.data);
    }

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
  
  
    return <div class="col-md-3 mb-4">
                        <div class="card text-left">
                            <div class="card-body">
                                <h4 class="card-title mb-2">MANAGE SETTINGS</h4>
                                <div class="list-group">
                                <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/general")}>General</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/preferences")}>Preferences</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/sms_settings")}>Sms Settings</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/banners")}>Banners</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/starting")}>Starting Cities</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/propertytype")}>Property Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/spacetype")}>Space Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/bedtype")}>Bed Type</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/currency")}>Currency</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/country")}>Country</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/amenitytype")}>Amenity Type</button>                                  
                                     {email.map((val) => (
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push(`/emailsettings/${val.id}`)}>Email Settings</button>
                                     ))}
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/fees")}>Fees</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/language")}>Language</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/meta")}>Metas</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/apicredentials")}>Api Credentials</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/paymentmethods")}>Payment Methods</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/sociallinks")}>Social Links</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/privacy")}>Privacy Policy</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/roles")}>Roles and Permissions</button>
                                    <button class="list-group-item list-group-item-action" type="button" onClick={() => history.push("/database")}>Database Backups</button>
                                </div>
                            </div>
                        </div>
                    </div>

    
                
          
        
  
  ;
}

export default Manage;
