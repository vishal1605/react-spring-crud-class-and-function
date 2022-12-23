import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    
    document.title = 'Function Crud';
    const[formBtn, setFormbtn] = useState('Register')
    // const [userName, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [id, setUserId] = useState(0);

    const [input, setInput] = useState({
        id: 0,
        userName: "",
        email: "",
        password: ""
    });

    const [allData, setAllData] = useState([]);
    const [update, setUpdate] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:8080/all-user')
            .then(function (response) {
                //console.log(response.data);
                setAllData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [update]);

    const formSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        console.log(input);
        if (formBtn == 'Register') {
            axios.post('http://localhost:8080/save-user', formData)
            .then(function (response) {
                console.log(response.data);
                setUpdate(pre => pre + 1);
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            axios.post('http://localhost:8080/update-user', formData)
            .then(function (response) {
                console.log(response.data);
                setUpdate(pre => pre + 1);
                setFormbtn('Register');
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        // e.target.querySelectorAll('input').forEach(element => {
        //     element.value = '';
        // });
        setInput({
            id: 0,
            userName: "",
            email: "",
            password: ""
        })
    }
    const deleteOperation = (e) => {
        axios.get('http://localhost:8080/delete-user/' + e.target.value)
            .then(function (response) {
                console.log(response.data);
                setUpdate(pre => pre + 1);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const editOperation = (e)=>{
        setFormbtn('Update');
        axios.get('http://localhost:8080/get-user/'+e.target.value)
        .then(function (response) {
            //console.log(response.data);
            setInput(response.data);
            console.log(input);
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    const handleName = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handleEmail = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handlePassword = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    return (
        <div className="row home mt-2">
            <div className="col-12">
                <label htmlFor="" className='me-2'>Class Crud</label>
                <Link to={'class-crud'} className="btn btn-dark">Class Crud</Link>
            </div>
            <div className="col-sm-9 col-md-6 col-lg-5 m-auto shadow py-1 bg-light rounded">
                <h3 className='text-center bg-dark text-light py-1'>chat-app</h3>
                <h4 className="text-center">Register</h4>
                <form className="mb-3" onSubmit={formSubmit}>
                    <div className="mb-3">

                        <input type="number" className="form-control" name="id" value={input.id} hidden readOnly />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="userName" value={input.userName} onChange={handleName} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={input.email} onChange={handleEmail} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" value={input.password} onChange={handlePassword} />
                    </div>

                    <button type="submit" className="btn btn-primary">{formBtn}</button>
                </form>


            </div>
            <div className="col-12 mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">password</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allData.map(data => {
                            const { id, userName, email, password } = data;
                            return (
                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{userName}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td><button className='btn btn-info' value={id} onClick={editOperation}>Edit</button></td>
                                    <td><button className='btn btn-danger' value={id} onClick={deleteOperation}>Delete</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Home;
