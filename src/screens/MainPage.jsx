import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;

const Tasarim2 = () => {
  return (
    <View>
      <SafeAreaView>
        <View
          style={{
            width: winWidth * 0.75,
            alignItems: 'flex-start',
            flexDirection: 'row',
            margin: 30,
          }}>
          <Image
            source={require('./left-arrow.png')}
            style={{
              width: winWidth * 0.05,
              height: winWidth * 0.05,
            }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: '800',
              color: '#525186',
              marginLeft: 130,
            }}>
            X
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '800',
              color: '#BAD1DE',
            }}>
            E
          </Text>
          <View>
            <View
              style={{
                backgroundColor: '#E44D55',
                borderRadius: 100,
                height: winWidth * 0.09,
                width: winWidth * 0.09,
                marginLeft: 130,
              }}>
              <Image
                source={require('./heart.png')}
                style={{
                  height: winWidth * 0.05,
                  width: winWidth * 0.05,
                  margin: 8,
                }}
              />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#A8DDF7',
              height: 30,
              width: 45,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
                margin: 4,
                marginLeft: 8,
              }}>
              30%
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#E29CA0',
              height: 180,
              width: 180,
              borderRadius: 100,
              margin: 20,
              marginTop: 40,
            }}>
            <Image
              source={require('./ayakkabi.png')}
              style={{
                height: winWidth * 0.4,
                width: winWidth * 0.4,
                borderRadius: 100,
                margin: 12,
              }}></Image>
          </View>
          <View
            style={{
              width: winWidth * 1,
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 300,
            }}>
            <View
              style={{
                backgroundColor: '#D6ECF5',
                height: winWidth * 0.02,
                width: winWidth * 0.02,
                borderRadius: 20,
              }}></View>
            <View
              style={{
                backgroundColor: '#D6ECF5',
                height: winWidth * 0.02,
                width: winWidth * 0.02,
                borderRadius: 20,
                marginLeft: 3,
              }}></View>
            <View
              style={{
                backgroundColor: '#9DDBF4',
                height: winWidth * 0.02,
                width: winWidth * 0.06,
                borderRadius: 20,
                marginLeft: 3,
              }}></View>
            <View
              style={{
                backgroundColor: '#D6ECF5',
                height: winWidth * 0.02,
                width: winWidth * 0.02,
                borderRadius: 20,
                marginLeft: 3,
              }}></View>
            <View
              style={{
                backgroundColor: '#D6ECF5',
                height: winWidth * 0.02,
                width: winWidth * 0.02,
                borderRadius: 20,
                marginLeft: 3,
              }}></View>
          </View>
          <View
            style={{
              height: winWidth * 2,
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}>
            <View
              style={{
                backgroundColor: '#F0F0F0',
                height: winWidth * 3,
                width: winWidth * 1,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginTop: 40,
              }}>
              <View
                style={{
                  width: winWidth * 0.75,
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginTop: 30,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    color: '#2F3294',
                    fontSize: 25,
                    fontWeight: '700',
                  }}>
                  Air Joardan
                </Text>
                <Image
                  source={require('./star.png')}
                  style={{
                    width: winWidth * 0.05,
                    height: winWidth * 0.05,
                    marginLeft: 80,
                  }}></Image>
                <Text style={{marginLeft: 5}}>(4.5)</Text>
              </View>
              <Text style={{color: '#22255F', marginLeft: 10, marginTop: 10}}>
                Bild your shoes
              </Text>
              <View
                style={{
                  width: winWidth * 0.75,
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 17, marginLeft: 10, marginTop: 10}}>
                  Size :
                </Text>
                <View
                  style={{
                    backgroundColor: '#A8DDF7',
                    height: winWidth * 0.1,
                    width: winWidth * 0.15,
                    borderRadius: 15,
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '800',
                      color: 'black',
                      margin: 9,
                    }}>
                    US 6
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    color: 'black',
                    margin: 9,
                    marginLeft: 20,
                  }}>
                  US 7
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    color: 'black',
                    margin: 9,
                    marginLeft: 20,
                  }}>
                  US 8
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    color: 'black',
                    margin: 9,
                    marginLeft: 20,
                  }}>
                  US 9
                </Text>
              </View>
              <View
                style={{
                  width: winWidth * 0.75,
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginTop: 30,
                  marginLeft: 15,
                }}>
                <Text>Available Color:</Text>
                <View
                  style={{
                    backgroundColor: '#F5EFB4',
                    height: 28,
                    width: 28,
                    borderRadius: 100,
                    marginLeft: 15,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FDD247',
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      margin: 4,
                    }}></View>
                </View>
                <View
                  style={{
                    backgroundColor: '#E88079',
                    height: 26,
                    width: 26,
                    borderRadius: 100,
                    marginLeft: 15,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#F25B50',
                      height: 17,
                      width: 17,
                      borderRadius: 100,
                      margin: 4,
                    }}></View>
                </View>
                <View
                  style={{
                    backgroundColor: '#EFBCD4',
                    height: 28,
                    width: 28,
                    borderRadius: 100,
                    marginLeft: 15,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FF9EDE',
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      margin: 4,
                    }}></View>
                </View>
                <View
                  style={{
                    backgroundColor: '#C7E5F3',
                    height: 28,
                    width: 28,
                    borderRadius: 100,
                    marginLeft: 15,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#6CA1FE',
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      margin: 4,
                    }}></View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  height: winWidth * 1,
                  width: winWidth * 1,
                  borderRadius: 40,
                  marginTop: 40,
                }}>
                <View
                  style={{
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    margin: 30,
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
                    $360.00
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#F8F7F6',
                      height: winWidth * 0.12,
                      width: winWidth * 0.35,
                      borderRadius: 20,
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginLeft: 100,
                    }}>
                    <Image
                      source={require('./cart.png')}
                      style={{
                        height: winWidth * 0.06,
                        width: winWidth * 0.06,
                        margin: 10,
                      }}
                    />
                    <Text style={{color: '#4044B0', fontWeight: '500'}}>
                      Add to Cart
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Tasarim2;

const styles = StyleSheet.create({});
