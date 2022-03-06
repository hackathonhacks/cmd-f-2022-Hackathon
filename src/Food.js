import React,{Component} from 'react';

export class Food extends Component{

    constructor(props){
        super(props);
        this.state={foods:[]}

    }

    refreshList(){ 
        fetch(process.env.REACT_APP_API+'food')
        .then(response=>Rrsponse.json())
        .then(date=>{
            this.setState({foods: data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {foods}=this.state;
        return(
        <div className='mt-5 d-flex justify-content-left'>
            This is a food page.
        </div>
        )
    }
} 