import React,{useState, useEffect} from 'react';
import './ProfilePage.css';
import { Toast } from 'react-bootstrap';

const ProfilePage = () => {

    const [state, setState] = useState(false);
    const [show, setShow] = useState(false);
    const [error, setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [index, setIndex] = useState();
    const [data, setData] = useState({name: '', mobile: '', pincode: '', locality: '', area: '', city: '', state: '', addressType: "" })

    const viewdata = JSON.parse(localStorage.getItem('Address'))
   

    const onEdit = (i) => {
        setState(true);
        setIndex(i)
        console.log(index)
    }

    const onRemove = (i) => {
        console.log(i, "inside onRemove")
        const datas = JSON.parse(localStorage.getItem('Address'));
        datas.splice(i,1);
        localStorage.setItem('Address',JSON.stringify(datas));
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        setError(onValidate(data));
        setIsSubmit(true)
       
        const datas = JSON.parse(localStorage.getItem('Address') || "[]")
        // if(index == null && data !== " "){
        //     datas.push(data)
        //     localStorage.setItem('Address',JSON.stringify(datas));

        // }
          if(index !== undefined && data !== " "){
            console.log(index, "inside else if")
            
            datas.splice(index,1,data)
            localStorage.setItem('Address',JSON.stringify(datas));
        }
        
    }

    const onValidate = (values) => {

      const errors={};

        if(!values.name){
            errors.name="field is required"
        }
        if(!values.mobile){
            errors.mobile="field is required"
        }
        if(!values.pincode){
            errors.pincode="field is required"
        }
        if(!values.locality){
            errors.locality="field is required"
        }
        if(!values.area){
            errors.area="field is required"
        }
        if(!values.city){
            errors.city="field is required"
        }
        if(!values.state){
            errors.name="field is required"
        }
        if(!values.addressType){
            errors.addressType="field is required"
        }
        return errors;
    }

    const onChangeHandler = (e) => {
        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;

        
        setData( {
            ...data, [name]:value
        })
    }

    useEffect(() => {
        if(Object.keys(error).length === 0 && isSubmit)
        {
            setState(false);
            setShow(true)
            const datas = JSON.parse(localStorage.getItem('Address') || "[]")
            if(index == null && data !== " "){
                datas.push(data)
                localStorage.setItem('Address',JSON.stringify(datas));
    
            }
            console.log(data)
        }

    }, [error])

    return (

        <>
            <div className='container'>
                {Object.keys(error).length === 0 && isSubmit ?  <p className='container sticky-top ' style={{ position: "fixed", left: "500px", top: "115px" }} >
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="border border-success rounded text-primary my-3 h2 ">

                    <Toast.Body className="bg-info p-0">Address added successfully.</Toast.Body>
                </Toast>
            </p> : null}
                <h1> Manage address </h1>
                <form onSubmit={handleSubmit}>
                <div className='text-primary' style={{cursor: "pointer"}} onClick={() => setState(true)}> ADD A NEW ADDRESS</div>
                {state ?
                    <div className='row m-auto'>
                         <div className='col-lg-5 mt-3 mb-3'>
                             
                            <div className='form-group'>
                                <input className='form-control' placeholder="Name" name='name' value={data.name} onChange={onChangeHandler}/>
                                 <p className='text-danger'>{error.name}</p> 
                            </div>
                            
                        </div>
                        <div className='col-lg-5 mt-3 mb-3'>
                             
                             <div className='form-group'>
                                 <input className='form-control' placeholder="10 digit mobile number" name='mobile' value={data.mobile} onChange={onChangeHandler}/>
                                 {error.mobile && <p className='text-danger'>{error.mobile}</p>}
                             </div>
                             
                         </div>
                         <div className='col-lg-5 mb-3'>
                             
                             <div className='form-group'>
                                 <input className='form-control' placeholder="pincode" name='pincode' value={data.pincode} onChange={onChangeHandler}/>
                                 {error.pincode && <p className='text-danger'>{error.pincode}</p>}
                             </div>
                             
                         </div>
                         <div className='col-lg-5 mb-3'>
                             
                             <div className='form-group'>
                                 <input className='form-control' placeholder="Locality" name='locality' value={data.locality} onChange={onChangeHandler}/>
                                 {error.locality && <p className='text-danger'>{error.locality}</p>}
                             </div>
                             
                         </div>
                         <div className='col-lg-10 mb-3'>
                             
                             <div className='form-group'>
                                 <input className='form-control input-lg' placeholder="Address(Area and street)" name='area' value={data.area} onChange={onChangeHandler}/>
                                 {error.area && <p className='text-danger'>{error.area}</p>}
                             </div>
                             
                         </div>
                         <div className='col-lg-5 mb-3'>
                             
                             <div className='form-group'>
                                 <input className='form-control input-lg' placeholder="City/District/Town" name='city' value={data.city} onChange={onChangeHandler}/>
                                 {error.city && <p className='text-danger'>{error.city}</p>}
                             </div>
                             
                         </div>
                         <div className='col-lg-5 mb-3'>
                             
                             <div className='form-group'>
                             <select id="dropdown-item-button" name='state' value={data.state} onChange={onChangeHandler}>
                             <option>Select</option>    
                            <option>Bihar</option>
                            <option>Assam</option>
                            <option>Jharkhand</option>
                            <option>West Bengal</option>
                            <option>U.P</option>
                            <option>Uttarakhand</option>
                            </select>
                            {error.state && <p className='text-danger'>{error.state}</p>}
                             </div>
                             
                         </div>
                         <div className='col-lg-5 mb-3'>
                             
                            <div><label className='form-label'>Address Type</label></div>
                             <div className="form-check form-check-inline" >
                                <input className="form-check-input" type="radio" name='addressType' id="inlineRadio1" value="Home"  onChange={onChangeHandler}/>
                                <label className="form-check-label" for="inlineRadio1">Home</label><br/>
                            
                            
                                <input className="form-check-input" type="radio" name='addressType' id="inlineRadio2" value="Work" onChange={onChangeHandler}/>
                                <label className="form-check-label" for="inlineRadio2">Work</label>
                                {error.addressType && <p className='text-danger'>{error.addressType}</p>}
                            </div>
                             
                         </div>

                         <div className='col-lg-8'>
                             <button className='btn btn-primary mt-3 w-25' type="submit">SAVE</button>
                             <button className='btn btn-light mx-3 mt-3 text-primary outline-sucess'>CANCEL</button>
                         </div>
                    </div> : null }
                    </form>
            </div>

                    <div className='container mt-5'>
                        <div className='row'>
                            <div className='col-lg-10 mt-3'>
                                {viewdata && viewdata.map((el,i) => {
                                    return(
                                        <div className='row'>
                                            <div className = " col-lg-10 card mt-3 mb-3" key={i}>{ <p>Name: {el.name},  Mobile: {el.mobile}, state: {el.state}, city: {el.city},  area: {el.area}, locality: {el.locality}, Pincode: {el.pincode}, AddressType: {el.addressType}</p>}</div>
                                            <div className='col-lg-5'><button id="btn1" className='btn btn-primary w-20 ms-5' onClick={() => onEdit(i)}>Edit</button><button id="btn2" className="btn btn-danger w-25 ms-5" onClick={() => onRemove(i)}  style={{width: "30px"}}>Remove</button></div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                    </div>
            </>
    );
}

export default ProfilePage;