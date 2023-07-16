import React, { Component } from 'react'

export default class LoginPage extends Component {

    state = {
        firstname:'',
        lastnamename:'',
        username: '',
        password: '',
        confirm:'',

    }
    handleChange = (evt)=>{
        const fields = Object.assign({}, this.state);
        fields[evt.target.name]= evt.target.value;
        this.setState({...fields})
    }


    render() {
        return (
            <div className='flex justify-center'>
                <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] p-5 w-[60%] rounded-lg'>
                    <text className='text-2xl'>Register</text>
                    <div className='flex mt-3'>
                        <input className='border-[2px] rounded-lg w-[100%] p-2 outline-blue-700 focus:border-blue-700 ease-linear duration-200'
                            placeholder='firstname' value={this.state.firstname} onChange={this.handleChange} name='firstname' required/>

                        <input className='border-[2px] rounded-lg w-[100%] p-2 outline-blue-700 focus:border-blue-700 ease-linear duration-200'
                            placeholder='lastname' value={this.state.lastname} onChange={this.handleChange} name='lastname' required/>
                    </div>

                    <div className='flex mt-3'>
                        <input className='border-[2px] rounded-lg w-[100%] p-2 outline-blue-700 focus:border-blue-700 ease-linear duration-200'
                            placeholder='username' value={this.state.username} onChange={this.handleChange} name='username' required/>
                    </div>
                    <div className='flex mt-3'>
                        <input className='border-[2px] rounded-lg w-[100%] p-2 outline-blue-700 focus:border-blue-700 ease-linear duration-200'
                            placeholder='password' value={this.state.password} onChange={this.handleChange} name='password' required/>
                   
                        <input className='border-[2px] rounded-lg w-[100%] p-2 outline-blue-700 focus:border-blue-700 ease-linear duration-200'
                            placeholder='confirm' value={this.state.confirm} onChange={this.handleChange} name='confirm' required/>
                    </div>
                    <input  type="button" value='Register' className='btn mt-7 hover:scale-[1.02]'/>
                </div>
            </div>
        )
    }
}
