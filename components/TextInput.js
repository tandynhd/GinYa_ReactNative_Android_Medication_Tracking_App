import * as React from 'react';
import { TextInput } from 'react-native-paper';

const MyComponent = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      mode="flat"
      label="Email"
      value={text}
      placeholder="Type something"
      onChangeText={text => setText(text)}
    />
  );
};

export default MyComponent