import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Route, Redirect, useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import MasterLayout from "../AuditionAdmin/MasterLayout";




const AuditionAdminPrivateRoute = ({ component: Component, ...rest })=> {

    const history = useHistory();
    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        
        axios.get(`/api/checkingAuditionAdmin`).then( res => {
            if(res.status === 200)
            {
                if(localStorage.auth_otp === 'yes')
                {
                    setAuthenticated(true);
                }
                else
                {
                    swal("Forbidden","Verify Your Phone Number","warning");
                    history.push('/audition-admin/otp');
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
            swal("Unauthorized",err.response.data.message,"warning");
            history.push('/');
        }
        return Promise.reject(err);
    });



    axios.interceptors.response.use(function (response){
        return response;
        }, function(error){
            if(error.response.status === 403)
            {
                swal("Forbidden",error.response.data.message,"warning");
                history.push('/audition-admin/dashboard');
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
        return <h1>Loading...</h1>
    }

    return (
        <Route {...rest}
            render={ ({props, location}) =>  
                Authenticated ?
                ( <MasterLayout {...props} /> ) : 
                ( <Redirect to= {{pathname: "/audition-admin/dashboard", state: {from: location} }} /> )
                
            } 
        /> 
    );
}

export default AuditionAdminPrivateRoute;

