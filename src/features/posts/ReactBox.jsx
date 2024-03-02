import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {AnimatePresence, View as MotiView} from 'moti';
import styled from 'styled-components/native';

import CustomButton from './CustomButton';
import BackDrop from './Backdrop';
import items from '../../data/react';
import EmojiItem from './EmojiItem';

const Root = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: #e9e9e9;
  height: 60px;
`;

const Column = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-right: 15px;
`;

const StyledImage = styled.Image`
  width: 18px;
  height: 18px;
`;

const StyledText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #666666;
`;

const EmojiBox = styled.View`
  flex-direction: row;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 3px #000;
  padding: 2px 10px;
  gap: 10px;
`;

function ReactBox({onSetScroll}) {
  const [current, setCurrent] = useState(null);
  const [show, setShow] = useState(false);

  function handlePressEmoji(index) {
    setShow(false);
    setCurrent(index);
  }

  function handleButtonPress() {
    setShow(true);
    onSetScroll(false);
  }

  function handleClose() {
    setShow(false);
    setCurrent(null);
    onSetScroll(true);
  }

  function handleGesture(event) {
    const currentItem = Math.floor(event.nativeEvent.x / 60);
    if (currentItem >= 0 && currentItem < items.length) {
      setCurrent(currentItem);
    } else {
      setCurrent(null);
    }
  }

  function handleGestureEnded() {
    setShow(false);
    onSetScroll(true);
  }

  return (
    <Root>
      <AnimatePresence>
        {show && (
          <PanGestureHandler
            onGestureEvent={handleGesture}
            onEnded={handleGestureEnded}>
            <MotiView
              style={styles.container}
              from={{opacity: 0}}
              animate={{opacity: 1}}>
              <MotiView
                style={styles.floatBox}
                from={{translateY: 40, opacity: 0}}
                animate={{translateY: 0, opacity: 1}}
                exit={{translateY: 40, opacity: 0}}
                transition={{duration: 800}}>
                <EmojiBox>
                  {items.map((item, index) => (
                    <EmojiItem
                      onPress={() => handlePressEmoji(index)}
                      key={item.title}
                      data={item}
                      index={index}
                      scaled={current === index}
                    />
                  ))}
                </EmojiBox>
              </MotiView>
            </MotiView>
          </PanGestureHandler>
        )}
      </AnimatePresence>

      {show && <BackDrop onPress={handleClose} />}
      <CustomButton
        onLongPress={handleButtonPress}
        color={current === null ? '#666' : items[current].color}
        emoji={items[current === null ? 0 : current].emoji}
        text={items[current === null ? 0 : current].title}
      />

      <Column>
        <StyledImage source={require('../../../assets/icons/comment.png')} />
        <StyledText>Comment</StyledText>
      </Column>
      <Column>
        <StyledImage
          style={{
            width: 25,
            height: 20,
          }}
          source={require('../../../assets/icons/repost.png')}
        />
        <StyledText>Repost</StyledText>
      </Column>
      <Column>
        <StyledImage source={require('../../../assets/icons/send.png')} />
        <StyledText>Send</StyledText>
      </Column>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    height: 180,
    justifyContent: 'center',
    zIndex: 10,
  },

  floatBox: {
    alignItems: 'center',
  },
});

export default ReactBox;
