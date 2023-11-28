import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Post from './Components';
import TextInputComponent from './Input';

export default function Feed({ navigation }) {
  const [id, setId] = useState(4);
  const [posts, setPosts] = useState([
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
    },
  ]);

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const addToPosts = (user, text) => {
    setPosts([...posts, { _id: id, username: user, body: text }]);
    setId(id + 1);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      {posts.map((text) => (
        <Post
          key={text._id}
          username={text.username}
          body={text.body}
        />
      ))}
      <TextInputComponent storeFunction={addToPosts} />
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
