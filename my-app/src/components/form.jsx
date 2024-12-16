import React from "react";


export class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = { inputValue: 'Some text'};
        this.addForm = this.addForm.bind(this);
    }

    addForm = () =>{
        this.setState({inputValue:'1234567'})
    }

    componentDidMount(){
        console.log('componentDidMount')
    };

    componentWillUnmount(){
        console.log('componentWillUnmount')
    };

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }



    render(){
        const {inputValue} = this.state;
        const addForm = this.addForm

        return(
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text" placeholder={inputValue}/>
                <button onClick={()=>{
                    addForm()
                    console.log('State', inputValue)
                }}>Send</button>
            </form>
        )

    }
}

