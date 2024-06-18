import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guessNumber }) => {
    return (
        <View style={styles.guessLogItem}>
            <Text style={styles.itemText}># {roundNumber}</Text>
            <Text style={styles.itemText}>Opponenents Guess: {guessNumber}</Text>
        </View>
    );
    }

    export default GuessLogItem;


const styles = StyleSheet.create({
    guessLogItem: {
        backgroundColor: colors.secondary500,
        borderColor: colors.primary800,
        borderRadius: 40,
        borderWidth: 1,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 8,
        padding: 12,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        width: '100%',
      },
      itemText: {
        fontFamily: 'OpenSans-Regular',
      }
    });