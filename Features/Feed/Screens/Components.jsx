import {Button, Text, View } from 'react-native';

function Post({username, body})
{
  return (
    <View>
      <Text>{username}</Text>
      <Text>{body}</Text>
    </View>
  );
}

export default Post;