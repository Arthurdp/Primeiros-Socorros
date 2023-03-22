import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, Animated } from 'react-native';

import styles from './style';


class Panel2 extends Component {
    constructor(props) {
        super(props);

        this.icons = {
            'up': require('./arrow up.png'),
            'down': require('./arrow down.png')
        };

        this.state = {
            title: props.title,
            expanded: true,
            animation: new Animated.Value(0),
            minHeight: 0,
            maxHeight: 0,
            maxValueSet: false,
            minValueSet: false,
            cardHeight: 'auto'

        };
    }

    toggle() {
        //Step 1
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState((prevState) => {
            expanded: !prevState.expanded  //Step 2
        });

        this.state.animation.setValue(initialValue);  //Step 3 (Remove this line)
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue,
                useNativeDriver: true
            }
        ).start();  //Step 5
    }

    componentDidMount() {
        this.animationId = this.state.animation.addListener(({ value }) => {
            this.setState({
                cardHeight: value
            });
        });
    }

    componentWillUnmount() {
        this.state.animation.removeListener(this.animationId);
    }


    render() {
        let icon = this.icons['down'];

        if (this.state.expanded) {
            icon = this.icons['up'];   //Step 4
        }

        //Step 5
        return (

            <Animated.View
                style={[styles.container,
                <><span style="font-weight: 400;">{'{'}</span><span style="font-weight: 400;">height</span><span style="font-weight: 400;">:</span><span style="font-weight: 400;">this</span><span style="font-weight: 400;">.</span><span style="font-weight: 400;">state</span><span style="font-weight: 400;">.</span><span style="font-weight: 400;">cardHeight</span><span style="font-weight: 400;">{'}'}</span></>]}>

                <View style={styles.container} >
                    <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                        <Text style={styles.title}>{this.state.title}</Text>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.toggle.bind(this)}
                            underlayColor="#f1f1f1">
                            <Image
                                style={styles.buttonImage}
                                source={icon}
                            ></Image>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                        {this.props.children}
                    </View>

                </View>
            </Animated.View>
        );
    }


    _setMaxHeight(event) {
        if (!this.state.maxValueSet) {
            this.setState({
                maxHeight: event.nativeEvent.layout.height,
                maxValueSet: true
            });
        }
    }

    _setMinHeight(event) {
        if (!this.state.minValueSet) {
            this.state.animation.setValue(event.nativeEvent.layout.height);
            this.setState({
                minHeight: event.nativeEvent.layout.height,
                minValueSet: true
            });
        }
    }
}