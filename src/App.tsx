import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import './models/AppState';
import { AppState } from './models/AppState';
import { actions } from './redux/actions';

const { addStock } = actions;

class App extends React.Component<{addStock: (symbol: string) => void, symbol: string, stock: any}, AppState> {

  state = {
    symbol: this.props.symbol,
    stock: this.props.stock
  };

  public render() {
    return (
      <div className="App">
        <h1>Portfolio Manager</h1>
        <h2>Stocks</h2>
        <input type="text" onChange={this.handleAddStockNameChange} value={this.state.symbol} placeholder="Stock Name"/>
        <input type="submit" value="Add" onClick={this.handleSubmitClicked}/>
        <p>{JSON.stringify(this.props.stock, null, 2)}</p>
      </div>
    );
  }

  private handleAddStockNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    this.setState({
      symbol: event.target.value
    });
  };

  private handleSubmitClicked = (event: React.MouseEvent<HTMLInputElement>) => {
    this.props.addStock(this.state.symbol);
  };
}

export default connect(
  (state: any) => ({
      symbol: state.app.symbol,
      stock: state.app.stock
  }), 
  {
    addStock
  })(App);
