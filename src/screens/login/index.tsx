import React, { useCallback } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Logo from 'assets/images/company_logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from 'storage/slices/counterSlice'
import type { RootState } from 'storage/types'
import styles from './styles';

const Login = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const countUp = useCallback(() => {
    dispatch(increment());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <TouchableOpacity style={[styles.button, styles.toggleButton]} onPress={countUp}>
        <Text style={styles.buttonText}>Counter: {count}</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.button, styles.signInButton]}>
        <Text style={styles.buttonText}>SignIn</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
