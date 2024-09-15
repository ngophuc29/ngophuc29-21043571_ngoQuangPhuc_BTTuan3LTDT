import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function giaiPhuongTrinhBacHai(a: number, b: number, c: number): string {
  if (a === 0) {
    if (b === 0) {
      return c === 0 ? 'Vô số nghiệm' : 'Vô nghiệm';
    } else {
      return `Một nghiệm: ${-c / b}`;
    }
  }

  const delta = b * b - 4 * a * c;
  if (delta > 0) {
    const nghiem1 = (-b + Math.sqrt(delta)) / (2 * a);
    const nghiem2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `Hai nghiệm: ${nghiem1}, ${nghiem2}`;
  } else if (delta === 0) {
    const nghiem = -b / (2 * a);
    return `Một nghiệm kép: ${nghiem}`;
  } else {
    return 'Vô nghiệm';
  }
}

export default function App() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [ketQua, setKetQua] = useState<string>('');

  const  GiaiPT = () => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setKetQua('Vui lòng nhập đầy đủ và đúng các giá trị!');
    } else {
      setKetQua(giaiPhuongTrinhBacHai(a, b, c));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chương Trình giải phương trình bậc hai</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => setA(Number(text))}
        value={String(a)}
       
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => setB(Number(text))}
        value={String(b)}
        
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => setC(Number(text))}
        value={String(c)}
        
      />
      <Button
        title="Giải"
        onPress={GiaiPT}
        color="green"
      />
      <Text style={styles.result}>{`Kết quả: ${ketQua}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '70%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#007bff',
    textAlign: 'center',
  }
});
