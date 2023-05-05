import React, {useState} from 'react';
import {styles} from './Styles';
import {Text, View, Pressable} from 'react-native';

export default function Notepad() {
  const [letter, setLetter] = useState([]);

  return (
    <View>
      <Text style={styles.textStyle}>Hello, Welcome to Main Activity!</Text>

      <View style={styles.containerText}>
        <Text style={styles.textStyle}>{letter}</Text>
      </View>

      <View style={styles.containerButtons}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, 'a']);
          }}>
          <Text style={styles.textStyle}> A</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, 'w']);
          }}>
          <Text style={styles.textStyle}> W</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, 's']);
          }}>
          <Text style={styles.textStyle}> S</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, 'd']);
          }}>
          <Text style={styles.textStyle}> D</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, ' ']);
          }}>
          <Text style={styles.textStyle}> whitespace</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '1']);
          }}>
          <Text style={styles.textStyle}> 1</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '2']);
          }}>
          <Text style={styles.textStyle}> 2</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '3']);
          }}>
          <Text style={styles.textStyle}> 3</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '!']);
          }}>
          <Text style={styles.textStyle}> !</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '@']);
          }}>
          <Text style={styles.textStyle}> @</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '#']);
          }}>
          <Text style={styles.textStyle}> #</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '+']);
          }}>
          <Text style={styles.textStyle}> +</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '-']);
          }}>
          <Text style={styles.textStyle}> -</Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '*']);
          }}>
          <Text style={styles.textStyle}> *</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setLetter([...letter, '/']);
          }}>
          <Text style={styles.textStyle}> /</Text>
        </Pressable>
      </View>
    </View>
  );
}
