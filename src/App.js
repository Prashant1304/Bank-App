import React,{Component} from "react"
import "./bank.css"
class Bank extends Component {
state={
  toggleUp:false,
  toggleIn:false,
  toggleLog:false,
  toggleBal:false,
  toggleWithdraw:false,
  toggleDeposite:false,
  toggle:true,
  balance:100,
  depositeValue:"",
  withdrawValue:0,
  toggleStatement:false,
  D:"",
  W:"",
  usernameValue:"",
  passwoerValue:"",
  username:"new",
  password:123456
}
handleSighUp=()=>{
  this.setState({toggleUp:!false})
}
handleSighIn=(e)=>{
  this.setState({toggleIn:!false})
  this.setState({usernameValue:e.target.value})
}
handlePassword=(e)=>{
  this.setState({passwoerValue:e.target.value})

}
handleLogin=(e)=>{
  if(this.state.username==this.state.usernameValue&&this.state.password==this.state.passwoerValue){
    this.setState({toggleLog:!false})
    this.setState({toggleUp:false})
    this.setState({toggleIn:false})
    this.setState({toggle:false})
  }else if(this.state.username!=this.state.usernameValue||this.state.password!=this.state.passwoerValue) {
    alert("username or password is wrong\n\nPlease enter username: new and password: 123456")
  }
  this.setState({usernameValue:""})
  this.setState({passwoerValue:""})
}
handleLogOut=()=>{
  this.setState({toggleLog:false})
  this.setState({toggle:true})
}
handleBalance=()=>{
  this.setState({toggleBal:!false})
  
}
handleWithdraw=(e)=>{
  this.setState({toggleWithdraw:!false})
  this.setState({withdrawValue:e.target.value})
}
handleDeposite=(e)=>{

  this.setState({toggleDeposite:!false})
  this.setState({depositeValue:e.target.value})
}
handleBalanceIncrement=()=>{
  var num=parseInt(this.state.depositeValue)
  this.setState({balance:this.state.balance+num})
  this.setState({D:this.state.depositeValue})
  this.setState({depositeValue:""})
  this.setState({W:""})
  // console.log(typeof this.state.num)
}
handleBalanceDecrement=()=>{
  if(this.state.balance-this.state.withdrawValue<0){
    alert("Not Sufficient Balance")
  }else{
    this.setState({balance:this.state.balance-this.state.withdrawValue})

  }
  this.setState({W:this.state.withdrawValue})
  this.setState({withdrawValue:""})
  this.setState({D:""})
}
handleStatement=()=>{
  this.setState({toggleStatement:!false})
}
render() {
  return(
    <div className="all">
          <div className="header">
          <h1>Banking App</h1>
        </div>
        <div className="sign">
           <div className="signUp">
             {/* {this.state.usernameValue}{this.state.passwordValue}{this.state.usernameData} */}
         {this.state.toggle&& <button className="button" onClick={this.handleSighUp}>Sign up</button>}
          {this.state.toggleUp&& <div>
          <input placeholder="new"  ></input>
          <input placeholder="123456" ></input>
          {/* <button >Done</button> */}
          </div>}
        </div>
        <div className="signIn">
        {this.state.toggle&&  <button className="button" onClick={this.handleSighIn} >Sign in</button>}
          {this.state.toggleIn&&  <div>
          <input onChange={this.handleSighIn} placeholder="user name" value={this.state.usernameValue} ></input>
          <input onChange={this.handlePassword} placeholder="password" type="password" value={this.state.passwoerValue} ></input>
          <button className="button" onClick={this.handleLogin}>Login</button>
          </div>}
          </div>
        </div>
        {this.state.toggleLog&&<div className="bottom">  
        <div>
          <p>Some Bank Of India</p>
          <button className="button" onClick={this.handleBalance} >Check Balance</button>

         {this.state.toggleBal&& <p>Balance: {this.state.balance} </p>}
        </div>
        <div>
          <button className="button1" onClick={this.handleWithdraw} >Withdraw</button>
          {this.state.toggleWithdraw&&<div>
          <input value={this.state.withdrawValue} onChange={this.handleWithdraw} placeholder="Enter Amount" type="number" />
          <button className="button" onClick={this.handleBalanceDecrement}>OK</button>
          </div>}
        </div>
        <div>

        <button className="button2" onClick={this.handleDeposite} >Deposite</button>
            {this.state.toggleDeposite&&<div>
          <input onChange={this.handleDeposite} placeholder="Enter Amount" value={this.state.depositeValue} type="number"/>
          <button className="button" onClick={this.handleBalanceIncrement} >OK</button>
          </div>}
        </div>
        <div>
          <button className="button" onClick={this.handleStatement}>Statement</button>
          {this.state.toggleStatement&&<div>
            <p>Only Recent Transaction</p>
          <p> <div className="D"> D: {this.state.D}</div><div className="W" >W:{this.state.W}</div>Balance:{this.state.balance}</p>
          </div>}
        </div>
        <div>
          <button className="button" onClick={this.handleLogOut}>Log Out</button>
        </div>
        </div>}
      </div>
      )
    }
}

export default Bank