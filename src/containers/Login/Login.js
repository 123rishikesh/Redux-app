import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css';
import {NavLink} from 'react-router-dom';


const Login = () => {

    const [formdata, setFormdata] = useState({username: "", password: ""});
    const [name, setName] = useState({})
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();

    const {username, password} = formdata;

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(validate(formdata));
        setIsSubmit(true)
        // const data = JSON.parse(localStorage.getItem('form'))
        // console.log(data.password)
        // if(username === data.email && password === data.password)
        // {
        //     setFlag(true);
        //     navigate("/ProductListing")
        //     alert("sucessfully login")
        // }else {
            
        //     alert("Wrong Username or Password")
        // }
    }

    const validate = (  value) => {
        console.log("Inside validate method",value.username)
        
        const errors = {}
         const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g; 

             if(!value.username){
                    
                errors.username = "field is required"
           
                } 
               else if(
                    !pattern.test(value.username)
                ){
                    
                    errors.username= 'Enter a valid email address'
                } 
               
                    if(
                        !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value.password)
                    ){
                        
                        
                            errors.password='Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                        
                    }
                
                    return errors;
                 
        

    }

    const handleChange = (e) => {

        const name = e.target.name;
        const val = e.target.value;

        setName(name);
        setFormdata({...formdata, [name]: val})
    }

    useEffect( () => {
        if(Object.keys(error).length === 0 && isSubmit){
            const data = JSON.parse(localStorage.getItem('form'))
            console.log(data)
           const auth = data.filter((ele) => {
                if (ele.email === username && ele.password === password){
                    return true;
                } 
                })

                console.log(auth)
            if(auth.length > 0)
            {
                console.log("inside if")
                setFlag(true);
                navigate("/ProductListing")
                alert("sucessfully login")
            }else {
                console.log("inside else block")
                
                alert("Wrong Username or Password")
            }
        
        }
   

    }, [error])

    return (

        <div className='container-fluid main'>
            <div className='row'>
                <div className="col-md-4 m-auto ">
            <form onSubmit={handleSubmit}>
                    
                        <div className='form-group mt-3 p-3'>
                        <h1>Login</h1>
                        <label className='form-label font-weight-bold'>Username</label>
                        <input className='form-control ' placeholder="Username" type="text" name="username" value={formdata.username} onChange={handleChange}/>
                         <p className='text-danger'>{error.username}</p>
                    </div>
                  
                
                   
                    <div className='form-group mb-3 p-3'>
                            <label className='form-label font-weight-bold'>Password</label>
                            <input className='form-control ' placeholder="Password" type="password" name="password" value={formdata.password} onChange={handleChange}/>
                            <p className="text-danger">{error.password}</p>
                    </div>
                   
                    <div className='form-group p-3'>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                    <NavLink to="/Registration" className="link-item mx-3">Create an account</NavLink>
                    </div>
                    
            </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
