import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Box from '../Box';

export default function ReadingBooks() {
  const ref = React.useRef<FlatList>(null);
  const [index, setIndex] = React.useState(0);

  const [isLeftIconVisible, setIsLeftIconVisible] =
    React.useState<boolean>(true);
  const [isRightIconVisible, setIsRightIconVisible] =
    React.useState<boolean>(true);

  function Test() {
    if (index === 0) {
      setIsLeftIconVisible(false);
    } else {
      setIsLeftIconVisible(true);
    }
    if (index === testArr.length - 1) {
      setIsRightIconVisible(false);
    } else {
      setIsRightIconVisible(true);
    }
  }

  const testArr = [
    {name: 'lucas'},
    {name: 'camila'},
    {name: 'emanoel'},
    {name: 'leonardo'},
    {name: 'fernanda'},
    {name: 'rufoino'},
  ];
  const renderItem = ({item, index: findex}) => {
    return (
      <View
        style={{
          width: 180,
          backgroundColor: findex === index ? '#000' : '#fff',
          margin: 15,
        }}
        key={findex}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  React.useEffect(() => {
    Test();
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  });

  return (
    <View>
      <Box
        isIconLeftVisible={isLeftIconVisible}
        isIconRightVisible={isRightIconVisible}
        content={
          <View>
            <FlatList
              ref={ref}
              initialScrollIndex={index}
              keyExtractor={item => item.key}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={testArr}
              renderItem={renderItem}
            />
          </View>
        }
        leftIconFunction={() => {
          if (index === 0) {
            return;
          }
          setIndex(index - 1);
        }}
        rightIconFunction={() => {
          if (index === testArr.length - 1) {
            return;
          }
          setIndex(index + 1);
        }}
      />
    </View>
  );
}
