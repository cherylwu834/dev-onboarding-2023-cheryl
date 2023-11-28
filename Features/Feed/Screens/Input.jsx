import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

function TextInputComponent({storeFunction}) {
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Type username"
      />
      <TextInput
        value={body}
        onChangeText={setBody}
        placeholder="Type post content..."
      />
      <Button
        title="Submit"
        onPress={() => {
          storeFunction(username, body);
          setUsername('');
          setBody('');
        }}
      />
    </View>
  );
}

export default TextInputComponent;
