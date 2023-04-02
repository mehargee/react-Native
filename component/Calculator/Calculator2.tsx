import React from 'react';
import { useState, } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// Note: Its totally working on equal operator. 
const Calculator2 = () => {

    const [displayValue, setDisplayValue] = useState("0");
    const [firstOperand, setFirstOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const [decimalAdd, setDecimalAdd] = useState(false);


    const setValue = (value) => {
        if (displayValue === "0"  ) {
            setDisplayValue(value.toString())
        }
        else if (displayValue.length < 20) {
            setDisplayValue(`${displayValue}${value.toString()}`)
        }
    }

    //     const setPoint = (point) => {
    //         const newPoint = displayValue.toString().split('')
    //         console.log("newPoint", newPoint)
    //         for (let i = 0; i <= newPoint.length; i++) {
    //             if (newPoint[i] == ".") {
    //                 setDisplayValue(displayValue)
    //             }
    //             else {
    //                 setDisplayValue(`${displayValue}${point}`)
    //             }
    //         }
    // }
    const clearValue = () => {
        setDisplayValue('0');
        setDecimalAdd(false);
    }

    const squareRoot = () => {
        setDisplayValue(Math.sqrt(parseFloat(displayValue)).toString());
    }

    const backValue = () => {
        if (displayValue.length > 1)
            setDisplayValue(displayValue.toString().slice(0, -1))
        else {
            setDisplayValue('0')
        }
    }

    const pointHandler = () => {
        if (!decimalAdd) {
            setDisplayValue(displayValue + '.');
            setDecimalAdd(true);
        }
    }

    const handleOperator = (op) => {
        if (op === "+") {
            setFirstOperand(parseFloat(displayValue));
            setOperator("+");
            setDisplayValue("0");
            setDecimalAdd(false);
        } else if (op === "-") {
            setFirstOperand(parseFloat(displayValue));
            setOperator("-");
            setDisplayValue("0");
            setDecimalAdd(false);
        } else if (op === "x") {
            setFirstOperand(parseFloat(displayValue));
            setOperator("*");
            setDisplayValue("0");
            setDecimalAdd(false);
        } else if (op === "/") {
            setFirstOperand(parseFloat(displayValue));
            setOperator("/");
            setDisplayValue("0");
            setDecimalAdd(false);
        } else if (op === "=") {
            if (operator === "+") {
                setDisplayValue(`${firstOperand + parseFloat(displayValue)}`);
            } else if (operator === "-") {
                setDisplayValue(`${firstOperand - parseFloat(displayValue)}`);
            } else if (operator === "*") {
                setDisplayValue(`${firstOperand * parseFloat(displayValue)}`);
            } else if (operator === "/") {
                setDisplayValue(`${firstOperand / parseFloat(displayValue)}`);
            }
            setFirstOperand(null);
            setOperator(null);
        }
    };

    return (
        <View>
            <Text style={styles.output}>{displayValue}</Text>
            <View style={styles.container}>
                <View style={styles.row}>
                    < TouchableOpacity onPress={() => { clearValue() }} >
                        <Text style={styles.column}>AC</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { backValue() }} >
                        <Text style={styles.column}>back</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { squareRoot() }} >
                        <Text style={styles.column}>SQRT</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { handleOperator('/') }} >
                        <Text style={styles.column}>/</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.row}>
                    < TouchableOpacity onPress={() => { setValue(7) }} >
                        <Text style={styles.column}>7</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { setValue(8) }} >
                        <Text style={styles.column}>8</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { setValue(9) }} >
                        <Text style={styles.column}>9</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { handleOperator('x') }} >
                        <Text style={styles.column}>x</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.row}>
                    < TouchableOpacity onPress={() => { setValue(4) }} >
                        <Text style={styles.column}>4</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { setValue(5) }} >
                        <Text style={styles.column}>5</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { setValue(6) }} >
                        <Text style={styles.column}>6</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { handleOperator('-') }} >
                        <Text style={styles.column}>-</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.row}>
                    < TouchableOpacity onPress={() => { setValue(1) }} >
                        <Text style={styles.column}>1</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { setValue(2) }} >
                        <Text style={styles.column}>2</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { setValue(3) }} >
                        <Text style={styles.column}>3</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { handleOperator('+') }} >
                        <Text style={styles.column}>+</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.row}>
                    < TouchableOpacity onPress={() => { setValue(0) }} >
                        <Text style={styles.column}>0</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { setValue(`${0}${0}`) }} >
                        <Text style={styles.column}>00</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => pointHandler()} >
                        <Text style={styles.column}>.</Text>
                    </TouchableOpacity>

                    < TouchableOpacity onPress={() => { handleOperator('=') }} >
                        <Text style={[styles.column, styles.equal]}>=</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    output: {
        color: 'black',
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
        backgroundColor: "gray",
        borderColor: 'black',
        borderWidth: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 80,

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,


    },
    column: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        width: 80,
        fontSize: 18,
        backgroundColor: 'yellow',
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    equal: {
        color: 'white',
        backgroundColor: "red",
    }
});

export default Calculator2;
