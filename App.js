import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.header}>
      <Text>RAkib Bal Kahn</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    header:{
        marginTop:40
    }
});
