import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import './models/AppState';
import { AppState } from './models/AppState';
import { actions } from './redux/actions';

const { addStock } = actions;

class App extends React.Component<{addStock: (symbol: string) => void, symbol: string}, AppState> {

  public render() {
    return (
      <div className="App">
        <h1>Portfolio Manager</h1>
        <h2>Stocks</h2>
        <input type="text" onChange={this.handleAddStockNameChange} value={this.props.symbol} />
        <input type="submit" value="Add" onClick={this.handleSubmitClicked}/>
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
      symbol: state.app.symbol
  }), 
  {
    addStock
  })(App);
