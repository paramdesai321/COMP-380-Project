// src/components/Profile.js

import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const Profile = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (postText.trim() !== '') {
      setPosts([...posts, postText]);
      setPostText('');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image URL
          style={{ width: 80, height: 80, borderRadius: 40, marginRight: 16 }}
        />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Username</Text>
          <Text style={{ fontSize: 16 }}>User's Biography</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12 }}>
        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Collaborate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Saved</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <TextInput
          placeholder="Write a Daily Checkin..."
          value={postText}
          onChangeText={(text) => setPostText(text)}
          onSubmitEditing={handlePost}
          multiline
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8 }}
        />
        <ScrollView style={{ marginTop: 8 }}>
          {posts.map((post, index) => (
            <View key={index} style={{ borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 8 }}>
              <Text>{post}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
