import React, { Component } from 'react';
import { Text, View, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';

import styles from './style';


class Panel extends Component {
    constructor(props) {
        super(props);

        this.icons = {
            'up': require('./arrow up.png'),
            'down': require('./arrow down.png')
        };

        this.state = { 
            title: props.title,
            desc: props.desc,
            expanded: false }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        };
    };


    changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded });
    }


    render() {
        let icon = this.icons['down'];

        if (this.state.expanded) {
            icon = this.icons['up'];   //Step 4
        }

        return (
            <View style={styles.container}>
                <View style={styles.btnTextHolder}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
                        <Text style={styles.btnText}>{this.state.title}</Text>
                    </TouchableOpacity>
                    <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                        <Text style={styles.text}>{this.state.desc}</Text>
                    </View>
                </View>
            </View>);
    }

}
export default Panel;