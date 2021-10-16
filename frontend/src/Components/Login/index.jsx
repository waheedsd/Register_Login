import React, {useState} from "react";

const Index = () => {
    let initialValues = {
        email : '',
        password: ''
    }
    const [obj, setName] = useState(initialValues);
    
    const onhandleChange = (e) =>{
        const {name, value} = e.target;
        console.log({...obj, [name]: value});
        console.log({...obj})
        setName({...obj, [name]: value})
    }
    const onhandleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(obj))
    }
    
    
    return (
        <div className="container  mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                <div className="form">
                <form onSubmit={onhandleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" placeholder="Email" id="email" name="email" value={obj.email} onChange={onhandleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Password" id="password" name="password" value={obj.password}  onChange={onhandleChange}/>
                    </div>
                    
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
          </div>
                </div>
            </div>
        </div>
    )

}
 export default Index;