import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import UpdateValue from './updatee';
const width = Dimensions.get('window').width;
class RenderItem extends React.Component {
  render() {
    const {item, deleteItem, update} = this.props;
    return (
      <View style={styles.son}>
        <View style={styles.topRow}>
          <View style={styles.kk}>
            <Text style={styles.txt}>ID: {item.id}</Text>
          </View>
          <View style={styles.rowButtons}>
            <View>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => this.props.push(item.id)}>
                <Image
                  style={styles.img}
                  source={{ uri: "https://image.shutterstock.com/image-vector/pencil-flat-icon-single-high-260nw-737037337.jpg"}}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => deleteItem(item.id)}>
              <Image
                style={styles.img}
                source={{uri:"https://image.flaticon.com/icons/png/512/1175/1175343.png"}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.lpk}>
            <Text style={styles.txt}>Title: {item.title}</Text>
          </View>
          <View style={styles.lpk}>
            <Text style={styles.txt}>Body: {item.body}</Text>
          </View>
        </View>
        <UpdateValue 
          visible={this.props.visible}
          close={() => this.props.close()}
          editFunction={this.props.update}
          id={this.props.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  son: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#b1dedb',
    borderColor: '#F8F8F8',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 2,
  },
  kk:{
    marginVertical:10,
  },
  topRow: {
    
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between',
  },
  rowButtons: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: 20,
  },
  img: {
    height: 20,
    width: 20,
  },
  circle: {
    padding: 10,
    borderRadius: 18,
    backgroundColor: '#F2F2F2',
    marginLeft: 5,
    
  },
  lpk:{
    marginVertical:10,
  },
});

export default RenderItem;