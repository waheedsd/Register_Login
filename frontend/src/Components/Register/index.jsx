import React,{useState} from 'react'

function Index() {
    const initialValues = {
        username: '',
        password: '',
        confirmpassword: '',
        email: '',
        gender:'',

    }
    const [values, setValues] = useState(initialValues);

    // setting values for initialObject
    const onhandleChange = (e) =>{
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        
    }

    
    const onhandleSubmit = (e) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: values.username,
                password: values.password,
                confirmpassword: values.confirmpassword,
                email: values.email,
                gender: values.gender,
            })
        };
          fetch('http://localhost:8080/register', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    


    return (
        <div className="container mt-5">
            <h2 className="text-center">Register Form</h2>
            <div className="row justify-content-center  ">
               <div className="col-md-8">
                    <div className="form">
                        <form  onSubmit={onhandleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" placeholder="Username" id="username" name="username" value={values.username} onChange={onhandleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" placeholder="Password" id="password" name="password" value={values.password}  onChange={onhandleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm Password" id="conform-password" name="confirmpassword" value={values.confirmpassword}  onChange={onhandleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" placeholder="Email" id="email" name="email" value={values.email}  onChange={onhandleChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male"  onChange={onhandleChange}/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female"  onChange={onhandleChange}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="Others" onChange={onhandleChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit" >Submit</button>
                        </form>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default Index
