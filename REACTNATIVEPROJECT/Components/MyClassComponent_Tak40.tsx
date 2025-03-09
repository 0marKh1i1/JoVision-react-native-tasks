import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { RootState, updateTextView } from '../store';

interface MyClassComponentProps {
    textView: string;
    updateTextView: (text: string) => void;
}

interface MyClassComponentState {
    TextState: string;
    InValue: string;
}

export class MyClassComponent_Tak40 extends Component<MyClassComponentProps, MyClassComponentState> {
    constructor(props: MyClassComponentProps) {
        super(props);

        this.state = {
            TextState: props.textView,
            InValue: props.textView,
        };
    }

    componentDidUpdate(prevProps: Readonly<MyClassComponentProps>, prevState: Readonly<MyClassComponentState>): void {
        if (prevProps.textView !== this.props.textView) {
            this.setState({ TextState: this.props.textView, InValue: this.props.textView });
        }
    }

    handleChangeText = (TempText: string) => {
        this.setState({ InValue: TempText });
        this.props.updateTextView(TempText);
    };

    render() {
        return (
            <View style={styles.TextContainer}>
                <Text style={styles.Text}>{this.state.TextState}</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.InValue}
                    onChangeText={this.handleChangeText}
                />
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    textView: state.textView.textView,
});

const mapDispatchToProps = {
    updateTextView,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyClassComponent_Tak40);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    Text: {
        padding: 10,
        margin: 10,
        maxWidth: 300,
        maxHeight: 300,
        color: '#24a',
    },
    TextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: '#aa5544',
        borderWidth: 1,
        borderRadius: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        minWidth: 100,
        maxWidth: 300,
        color: 'lightgray',
    },
});
