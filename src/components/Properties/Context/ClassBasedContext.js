import React, {Component, createContext, useState } from 'react';

const BookingContext = React.createContext();

export const BookingConsumer=BookingContext.Consumer;

export class BookingProvider extends Component {

   
    state={
        address:'Florida Mall Avenue',
        guests:5
    }

    // this.setState({guests:7});

    // this.setState({address:"Florida Mall Avenue"});




    render() {

         const {address}= this.state;

        const {guests}=this.state;

        return (
            <BookingContext.Provider value={{address,guests}}>

            {this.props.children}
            
            
            </BookingContext.Provider>
        );
    }
}


export default BookingContext;