import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image,
  } from 'react-native';
  import React from 'react';
  const winWidth = Dimensions.get('window').width;
  const ShoeList = () => {
    return (
      <SafeAreaView>
        <ScrollView>
        <View
          style={{
            width: winWidth * 0.75,
            alignItems: 'flex-end',
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
              color: 'black',
              fontSize: 20,
              fontWeight: '800',
              marginLeft: 100,
            }}>
            My Cart
          </Text>
          <Image
            source={require('./heart.png')}
            style={{
              height: winWidth * 0.05,
              width: winWidth * 0.05,
              marginLeft: 130,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#EDEFF4',
            height: winWidth * 5,
            width: winWidth * 1,
            borderRadius: 20,
          }}>
          <View style={{height: winWidth * 5, flexDirection: 'column'}}>
            <View
              style={{
                backgroundColor: 'white',
                height: winWidth * 0.25,
                width: winWidth * 0.88,
                marginTop: 10,
                marginLeft: 20,
                borderRadius: 30,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./ayakkabi.png')}
                  style={{
                    height: winWidth * 0.17,
                    width: winWidth * 0.17,
                    borderRadius: 100,
                    margin: 14,
                  }}></Image>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 15,
                      fontWeight: '600',
                      marginTop: 20,
                    }}>
                    Air Joardan 7
                  </Text>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 16,
                      fontWeight: '600',
                      margin: 5,
                    }}>
                    $240.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 75,
                    marginTop: 20,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: winWidth * 0.008,
                      width: winWidth * 0.03,
                      marginLeft: 5,
                    }}></View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 17,
                      fontWeight: '400',
                      marginTop: 10,
                      marginLeft: 5,
                    }}>
                    1
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#A8D8F2',
                      height: winWidth * 0.06,
                      width: winWidth * 0.06,
                      borderRadius: 100,
                      marginTop: 7,
                    }}>
                    <Image
                      source={require('./plus2.png')}
                      style={{
                        height: winWidth * 0.03,
                        width: winWidth * 0.03,
                        margin: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: winWidth * 0.25,
                width: winWidth * 0.88,
                borderRadius: 30,
                marginTop: 10,
                marginLeft: 25,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./ayakkabi.png')}
                  style={{
                    height: winWidth * 0.17,
                    width: winWidth * 0.17,
                    borderRadius: 100,
                    margin: 14,
                  }}></Image>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 15,
                      fontWeight: '600',
                      marginTop: 20,
                    }}>
                    Air Joardan 7
                  </Text>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 16,
                      fontWeight: '600',
                      margin: 5,
                    }}>
                    $240.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 75,
                    marginTop: 20,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: winWidth * 0.008,
                      width: winWidth * 0.03,
                      marginLeft: 5,
                    }}></View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 17,
                      fontWeight: '400',
                      marginTop: 10,
                      marginLeft: 5,
                    }}>
                    1
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#A8D8F2',
                      height: winWidth * 0.06,
                      width: winWidth * 0.06,
                      borderRadius: 100,
                      marginTop: 7,
                    }}>
                    <Image
                      source={require('./plus2.png')}
                      style={{
                        height: winWidth * 0.03,
                        width: winWidth * 0.03,
                        margin: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: winWidth * 0.25,
                width: winWidth * 0.88,
                marginTop: 10,
                borderRadius: 30,
                marginLeft: 25,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./ayakkabi.png')}
                  style={{
                    height: winWidth * 0.17,
                    width: winWidth * 0.17,
                    borderRadius: 100,
                    margin: 14,
                  }}></Image>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 15,
                      fontWeight: '600',
                      marginTop: 20,
                    }}>
                    Air Joardan 7
                  </Text>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 16,
                      fontWeight: '600',
                      margin: 5,
                    }}>
                    $240.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 75,
                    marginTop: 20,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: winWidth * 0.008,
                      width: winWidth * 0.03,
                      marginLeft: 5,
                    }}></View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 17,
                      fontWeight: '400',
                      marginTop: 10,
                      marginLeft: 5,
                    }}>
                    1
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#A8D8F2',
                      height: winWidth * 0.06,
                      width: winWidth * 0.06,
                      borderRadius: 100,
                      marginTop: 7,
                    }}>
                    <Image
                      source={require('./plus2.png')}
                      style={{
                        height: winWidth * 0.03,
                        width: winWidth * 0.03,
                        margin: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: winWidth * 0.25,
                width: winWidth * 0.88,
                marginTop: 10,
                borderRadius: 30,
                marginLeft: 25,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./ayakkabi.png')}
                  style={{
                    height: winWidth * 0.17,
                    width: winWidth * 0.17,
                    borderRadius: 100,
                    margin: 14,
                  }}></Image>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 15,
                      fontWeight: '600',
                      marginTop: 20,
                    }}>
                    Air Joardan 7
                  </Text>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 16,
                      fontWeight: '600',
                      margin: 5,
                    }}>
                    $240.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 75,
                    marginTop: 20,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: winWidth * 0.008,
                      width: winWidth * 0.03,
                      marginLeft: 5,
                    }}></View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 17,
                      fontWeight: '400',
                      marginTop: 10,
                      marginLeft: 5,
                    }}>
                    1
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#A8D8F2',
                      height: winWidth * 0.06,
                      width: winWidth * 0.06,
                      borderRadius: 100,
                      marginTop: 7,
                    }}>
                    <Image
                      source={require('./plus2.png')}
                      style={{
                        height: winWidth * 0.03,
                        width: winWidth * 0.03,
                        margin: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: winWidth * 0.25,
                width: winWidth * 0.88,
                marginTop: 10,
                borderRadius: 30,
                marginLeft: 25,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./ayakkabi.png')}
                  style={{
                    height: winWidth * 0.17,
                    width: winWidth * 0.17,
                    borderRadius: 100,
                    margin: 14,
                  }}></Image>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 15,
                      fontWeight: '600',
                      marginTop: 20,
                    }}>
                    Air Joardan 7
                  </Text>
                  <Text
                    style={{
                      color: '#3E42AD',
                      fontSize: 16,
                      fontWeight: '600',
                      margin: 5,
                    }}>
                    $240.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 75,
                    marginTop: 20,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: winWidth * 0.008,
                      width: winWidth * 0.03,
                      marginLeft: 5,
                    }}></View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 17,
                      fontWeight: '400',
                      marginTop: 10,
                      marginLeft: 5,
                    }}>
                    1
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#A8D8F2',
                      height: winWidth * 0.06,
                      width: winWidth * 0.06,
                      borderRadius: 100,
                      marginTop: 7,
                    }}>
                    <Image
                      source={require('./plus2.png')}
                      style={{
                        height: winWidth * 0.03,
                        width: winWidth * 0.03,
                        margin: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, marginTop: 20, marginLeft: 60}}>
                SubTotal:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginTop: 20,
                  fontWeight: '700',
                  marginLeft: 5,
                }}>
                $1250
              </Text>
              <Text style={{fontSize: 16, marginTop: 20, marginLeft: 70}}>
                Taxes
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  marginTop: 20,
                  fontWeight: '700',
                  marginLeft: 5,
                }}>
                $40
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: winWidth * 1,
                width: winWidth * 1,
                borderRadius: 40,
                marginTop: 20,
              }}>
              <View
                style={{
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  margin: 30,
                }}>
                <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
                  $1250.00
                </Text>
                <View
                  style={{
                    backgroundColor: '#4044B0',
                    height: winWidth * 0.1,
                    width: winWidth * 0.3,
                    borderRadius: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginLeft: 100,
                  }}>
                  <Text
                    style={{
                      color: '#B3DBFE',
                      fontWeight: '500',
                      marginLeft: 25,
                    }}>
                    Check Out
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ShoeList;
  
  const styles = StyleSheet.create({});
  