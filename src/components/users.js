import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';


export default class users extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('http://localhost:8080/api/kudos/users')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {

    const columns = [{  
      Header: 'ID',  
      accessor: 'id',
     }
     ,{  
      Header: 'firstName',  
      accessor: 'firstName' ,
      }
     
     ,{  
     Header: 'lastName',  
     accessor: 'lastName' ,
     }
     ,{  
     Header: 'userName',  
     accessor: 'userName',
     },
     {  
      Header: 'Email',  
      accessor: 'email',
      },
      {  
        Header: 'password',  
        accessor: 'password',
        },
        {  
        Header: 'phone',  
        accessor: 'phone',
        }
  ]
    return (   
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
      />

    )
  }
}

