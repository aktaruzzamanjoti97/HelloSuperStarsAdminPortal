import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Route, Redirect, useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import JuryLayout from '../JuryBoard/MasterLayout'
// import MasterLayout from './layouts/admin/MasterLayout';
// import HomePage from "../Pages/Home/HomePages";
import StarLayout from '../SuperStar/MasterLayout'
import logo from '../../assets/images/helloSuperStar.png'

const JuryBoardRoute = ({ component: Component, ...rest })=> {

    const history = useHistory();
    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        
        axios.get(`/api/checkingJurySuperStar`).then( res => {
            if(res.status === 200)
            {
                if(localStorage.auth_otp === 'yes')
                {
                    setAuthenticated(true);
                }
                else
                {
                    swal("Forbidden","Verify Your Phone Number","warning");
                    history.push('/jury-board/otp');
                }
            }
            setloading(false);
        });

        return () => {
            setAuthenticated(false);
        };
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
        if(err.response.status === 401)
        {
            setloading(false);
            history.push('/login');
        }
        return Promise.reject(err);
    });

    axios.interceptors.response.use(function (response){
        return response;
        }, function(error){
            if(error.response.status === 403)
            {
                swal("Forbidden",error.response.data.message,"warning");
                history.push('/jury-board/dashboard');
            }
            else if(error.response.status === 404)
            {
                swal("404 Error","Url/Page Not Found","warning");
                history.push('/404');
            }
            return Promise.reject(error);
        }
    );


    if(loading)
    {
        return <h1 className='text-center'>...</h1>
    }

    return (
        <Route {...rest}
            render={ ({props, location}) =>  
                Authenticated ?
                ( <JuryLayout {...props} /> ) : 
                ( <Redirect to= {{pathname: "/jury-board/dashboard", state: {from: location} }} /> )
                
            } 
        /> 
    );
}

export default JuryBoardRoute;
