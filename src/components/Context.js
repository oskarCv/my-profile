import React, { Component } from 'react';
import { MyInfo, MyInfoDetail} from '../Data';

const InfoContext = React.createContext();

class InfoProvider extends Component {
  state = {
    info: MyInfo,
    infoDetails:MyInfoDetail,
    
  };
  render() {
    return (
      <InfoContext.Provider
        value={{
          info: this.state.info,
          infoDetails:this.state.infoDetails,
          
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };