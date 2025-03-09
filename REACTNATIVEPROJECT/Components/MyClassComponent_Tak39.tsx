import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from '../store';

interface MyClassComponentProps {
    textView: string;
}

interface MyClassComponentState {
    TextState: string;
}

export class MyClassComponent_Tak39 extends Component<MyClassComponentProps, MyClassComponentState> {
    constructor(props: MyClassComponentProps) {
        super(props);

        this.state = {
            TextState: props.textView,
        };
    }

    componentDidUpdate(prevProps: Readonly<MyClassComponentProps>, prevState: Readonly<MyClassComponentState>): void {
        if (prevProps.textView !== this.props.textView) {
            this.setState({ TextState: this.props.textView });
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.Text}>{this.state.TextState}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    textView: state.textView.textView,
});

export default connect(mapStateToProps)(MyClassComponent_Tak39);

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
});