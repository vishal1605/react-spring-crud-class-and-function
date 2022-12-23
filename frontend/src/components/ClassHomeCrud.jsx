import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ClassHomeCrud extends Component {
    constructor(props) {
        super(props);
        document.title = 'Class Crud';
        this.formSubmit = this.formSubmit.bind(this);
        this.getData = this.getData.bind(this);
        this.state = {
            userForm: {
                id: 0,
                userName: "",
                email: "",
                password: ""
            },
            updateRender:0,
            allData:[],
            formBtn: 'Register'
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const userRequest = await axios.get('http://localhost:8080/all-user');
        const userData = await userRequest.data;
        this.setState({allData:[...userData]});
            
    }

    formSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        if (this.state.formBtn == 'Register') {
            axios.post('http://localhost:8080/save-user', formData)
            .then( (response) =>{
                console.log(response.data);
                this.getData();
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            // axios.post('http://localhost:8080/update-user', formData)
            // .then(function (response) {
            //     console.log(response.data);
            //     setUpdate(pre => pre + 1);
            //     setFormbtn('Register');
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        }
        
    }
    render() {
        return (
            <div className="row home mt-2">
                <div className="col-12">
                    <label htmlFor="" className='me-2'>Class Crud</label>
                    <Link to={'/'} className="btn btn-dark">Function Crud</Link>
                </div>
                <div className="col-sm-9 col-md-6 col-lg-5 m-auto shadow py-1 bg-light rounded">
                    <h3 className='text-center bg-dark text-light py-1'>chat-app</h3>
                    <h4 className="text-center">Register</h4>
                    <form className="mb-3" onSubmit={this.formSubmit}>
                        <div className="mb-3">

                            {/* <input type="number" className="form-control" name="id" hidden readOnly /> */}

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name="userName" />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary">{this.state.formBtn}</button>
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
                            {this.state.allData.map(data => {
                            const { id, userName, email, password } = data;
                            return (
                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{userName}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td><button className='btn btn-info' value={id} >Edit</button></td>
                                    <td><button className='btn btn-danger' value={id} >Delete</button></td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ClassHomeCrud;