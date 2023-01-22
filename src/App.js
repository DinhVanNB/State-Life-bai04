import './App.css';
import React, {Component} from 'react';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      id: '',
      passWord: '',
      isRemember: false
    }
  }
  onLogIn = () => {
    this.setState({isLogin: true})
  }
  onLogOut = () => {
    this.setState({
      isLogin: false,
      id: this.state.isRemember
        ? this.state.id
        : '',
      passWord: this.state.isRemember
        ? this.state.passWord
        : '',
      isRemember:this.state.isRemember
    })
  }
  onChange = (e) => {
      this.setState({
        id: e.target.id==="floatingInput"?e.target.value: this.state.id,
        passWord: e.target.id==="floatingPassword"?e.target.value: this.state.passWord,
        isRemember: e.target.id==="ckbRemember"?!this.state.isRemember:this.state.isRemember
      })
  }
  onSubmit = (e) => {
    e.preventDefault();
    let additional = this.state.id ==='Admin' && this.state.passWord==="123456" ;
    additional?this.onLogIn():this.onLogOut();
    if(!additional){
      window.confirm('Sai thông tin đăng nhập!!!')
    }
  }
  render() {
    let {isLogin, isRemember,id,passWord} = this.state;
    let formHome = <Home onLogOut={this.onLogOut}/>;
    let formLogin =  <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form onSubmit={this.onSubmit}>
        <img
          className="mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
          alt=""
          width="72"
          height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            required
            defaultValue={isRemember? id:''}
            onChange={this.onChange}
            type="text"
            className="form-control email"
            id="floatingInput"
            placeholder="name@example.com"/>
          <label>Id</label>
        </div>
        <div className="form-floating">
          <input
            required
            defaultValue={isRemember? passWord:''}
            onChange={this.onChange}
            type="password"
            className="form-control password"
            id="floatingPassword"
            placeholder="Password"/>
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input checked={isRemember} onChange={this.onChange} id="ckbRemember" type="checkbox"/>
            Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </div>
  </div>

    return (
      <>
         {!isLogin?formLogin:null}
         {isLogin? formHome:null}
      </>
    );
  }

}

export default App;
