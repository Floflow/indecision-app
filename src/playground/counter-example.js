class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne=this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0// step one setting up the default state
    };
  }

  componentDidMount () {
    const countActuel = localStorage.getItem('count');
    const count = parseInt(countActuel, 10);

    if (!isNaN(count)){
      this.setState(()=>({count}));
    }
  }

  componentDidUpdate (prevState, prevProps) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne(){
    this.setState((prevState)=>{
       return {
          count: prevState.count + 1
       };
    });
  }
  handleMinusOne(){
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset(){
    this.setState(()=>{
      return {
        count: 0
      };
    });
  }
  render(){
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));







  //let count = 0;

  //const addOne = () => {
    //count
    //renderCounterApp();
  //}

  //const minusOne = () => {
    //count --;
    //renderCounterApp();
  //}

  //const setupReset = () => {
    //count = 0;
    //renderCounterApp();
  //}


  // make button "-1" - setup minusOne function and register - log "minusOne"
  // make reset button "reset" - setup reset function - log "reset"



  //const renderCounterApp = () => {
    //const templateTwo = (
      //<div>
        //<h1>Count: {count}</h1>
        //<button onClick={addOne}>+1</button>
        //<button onClick={minusOne}>-1</button>
        //<button onClick={setupReset}>Reset</button>
      //</div>
    //);

    //ReactDOM.render(templateTwo, appRoot);
  //};

  //renderCounterApp();

