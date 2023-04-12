import React, {Component} from "react";
import './style.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: 'Zerado!',
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    let state = this.state;
    state.contador +=1
    state.nome = 'Aumentando...'
    this.setState(state);
  }

  diminuir(){
    let state = this.state
    if(state.contador === 0){
      alert('Opa, chegou a zero, não é possível diminuir mais que isso!')
      return;
    }
    
    state.contador -= 1
    state.nome = 'Diminuindo...'
    this.setState(state);
  }
  
  render(){
    return(
      <div className="container">
        
        <h1 className="title">Contador</h1>
        <img src={require('./assets/counter.png')} className="img"/>
          {this.state.nome}
        <h3 className="areaBtn">
        <button onClick={this.diminuir} className="botao"> - </button>
          {this.state.contador}
        <button onClick={this.aumentar} className="botao"> + </button>
        </h3>
      </div>
    );
  }
}

export default App;