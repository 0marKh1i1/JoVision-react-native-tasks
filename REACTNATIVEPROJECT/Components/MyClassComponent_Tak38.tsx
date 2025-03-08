import React, { Component, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextContext } from '../custom_hooks/TextContext';

interface MyClassComponentProps {
    TextProp: string;
}
interface MyClassComponentState {
    TextState: string;
}

export class MyClassComponent_Tak38 extends Component<MyClassComponentProps , MyClassComponentState> {
   static contextType = TextContext;

    constructor(props : MyClassComponentProps) {
        super(props)
      
        this.state = {
           TextState : '',
        }
    }
    componentDidMount(): void {
        const contextValue:string = String(this.context);
        this.setState({TextState: contextValue});
    }
    componentDidUpdate(prevProps: Readonly<MyClassComponentProps>, prevState: Readonly<MyClassComponentState>, prevContext: any): void {
        const contextValue:string = String(this.context);
        if (prevContext !== contextValue) {
            this.setState({TextState: contextValue});
        }
    }
    shouldComponentUpdate(nextProps: Readonly<MyClassComponentProps>, nextState: Readonly<MyClassComponentState>): boolean {
        return nextState.TextState !== this.state.TextState;
    }
    render() {
    return (
        <View>
            <Text style={styles.Text}>{this.state.TextState}</Text>
        </View>
    )
  }
}

export default MyClassComponent_Tak38;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
    },
    Text: {
        padding: 10,
        margin: 10,
        maxWidth:300,
        maxHeight:300,
        color:'#24a',
    },
});