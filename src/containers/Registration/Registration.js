import React,{useState, useEffect} from 'react';
import './Registration.css';
import {useNavigate} from 'react-router-dom';

const Registration = () => {

        const [data, setData] = useState({name: "", email: "", password: "", pincode: "", state: "", city: "", village: "", landmark: ""});
        const [error, setError] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);
        const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        setError(validate(data))
        setIsSubmit(true)
        console.log(data);
    }

    const handleChange = (e) => {

        setData({...data, [e.target.name]: e.target.value})
    }

    const validate = (values) => {

        const errors =  {};
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
       
        if(!values.name){
                errors.name = "field is required"
        } if(!values.email){
                errors.email = "field is required"
        } else if (!pattern.test(values.email)){
                errors.email = "Please fill valid email address"

        } if(!values.password){
                errors.password = "field is required"
        } else if(values.password.length >= 12) {
                errors.password = "password must not be greater than 12 character"

        } else if(!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(values.password)) {
                errors.password = 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'

        }if(!values.pincode){
                errors.pincode = "field is required"
         } else if(values.pincode.length > 6 || values.pincode.length < 6) {
                 errors.pincode = "pincode must be 6 digit"
         } if(!values.state){
                errors.state = "field is required"
        } if(!values.city){
                errors.city = "field is required"
        } if(!values.village){
                errors.village = "field is required"
        } if(!values.landmark){
                errors.landmark = "field is required"
        }
        return errors;
    }

    useEffect( () => {
        if(Object.keys(error).length === 0 && isSubmit){
                const datas = JSON.parse(localStorage.getItem('form')|| []);
                const auth = datas.filter( (ele) => {
                        if(ele.email === data.email || ele.password === data.password){
                                return true;
                        }})

                        if(auth.length > 0){
                                alert("Either email or password is already exist")

                        }else {
                        datas.push(data)
                        localStorage.setItem('form', JSON.stringify(datas));
                        navigate('/')
                        }
        }

    }, [error])



    return (

        <div className='container-fluid primary'>
            <div className='row'>
                <div className="col-md-4 m-auto ">
            <form onSubmit={handleSubmit}>
                    
                        <div className='form-group mt-3 p-1'>
                        <h1>Registration</h1>
                        <label className='form-label font-weight-bold'>Name</label>
                        <input className='form-control ' placeholder="name" type="text" name="name" value={data.name} onChange={handleChange}/>
                        <p className='text-danger'>{error.name}</p>
                        
                    </div>
                  
                
                   
                    <div className='form-group mb-3 p-1'>
                            <label className='form-label font-weight-bold'>Email</label>
                            <input className='form-control ' placeholder="email" type="email" name="email" value={data.email} onChange={handleChange}/>
                            <p className='text-danger'>{error.email}</p>
                    </div>

                    
                    <div className='form-group mb-3 p-1'>
                            <label className='form-label font-weight-bold'>Password</label>
                            <input className='form-control ' placeholder="Password" type="password" name="password" value={data.password} onChange={handleChange}/>
                            <p className='text-danger'>{error.password}</p>
                    </div>

                    <div className='form-group mb-3 p-1'>
                            <label className='form-label font-weight-bold'>Pincode</label>
                            <input className='form-control ' placeholder="Pincode(Required)" type="number"  name="pincode"  value={data.pincode} onChange={handleChange}/>
                            <p className='text-danger'>{error.pincode}</p>
                    </div>
                    <div className='form-group mb-3 p-1'>
                            <label className='form-label font-weight-bold'>State</label>
                            <input className='form-control ' placeholder="state(Required)" type="text"  name="state" value={data.state} onChange={handleChange}/>
                            <p className='text-danger'>{error.state}</p>
                    </div>
                    <div className='form-group mb-3 p-1'>
                            <label className='form-label font-weight-bold'>city</label>
                            <input className='form-control ' placeholder="city(Required)" type="text"  name="city"  value={data.city} onChange={handleChange}/>
                            <p className='text-danger'>{error.city}</p>
                    </div>
                    <div className='form-group mb-3 p-1'>
                            
                            <input className='form-control ' placeholder="House No, Village" type="text"  name="village" value={data.village} onChange={handleChange}/>
                            <p className='text-danger'>{error.village}</p>
                    </div>

                    <div className='form-group mb-3 p-1'>
                            
                            <input className='form-control ' placeholder="Landmark" type="text"  name="landmark" value={data.landmark} onChange={handleChange}/>
                            <p className='text-danger'>{error.landmark}</p>
                    </div>
                   
                    <div className='form-group p-1'>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                    </div>
                    
            </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;