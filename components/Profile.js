import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const Profile = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (postText.trim() !== '') {
      setPosts([...posts, { type: 'text', content: postText }]); // Add post object with type 'text' to posts array
      setPostText(''); // Clear the input field after posting
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', padding: 16, alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://img.freepik.com/premium-photo/portrait-bride-young-beautiful-woman-green-blurred-background-generative-ai_676620-296.jpg' }} // Placeholder image URL
          style={{ width: 80, height: 80, borderRadius: 40, marginRight: 16 }}
        />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Hannah Mae</Text>
          <Text style={{ fontSize: 16 }}>Bettering myself every day!</Text>
          <Text style={{ fontSize: 16 }}>Dog mom, wife, sister.</Text>
          <Text style={{ fontSize: 16 }}>32 years young!</Text>
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
        <TouchableOpacity
          onPress={handlePost}
          style={{ marginTop: 8, backgroundColor: '#007bff', padding: 8, borderRadius: 8, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Post</Text>
        </TouchableOpacity>
        <ScrollView style={{ marginTop: 16 }}>
          {posts.map((post, index) => (
            <View key={index} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 }}>
              {post.type === 'text' ? (
                <Text>{post.content}</Text>
              ) : post.type === 'image' ? (
                <Image source={{ uri: post.imageUrl }} style={{ width: '100%', height: 200, borderRadius: 8, marginBottom: 8 }} />
              ) : null}
            </View>
          ))}
          {/* Sample Feed */}
          <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 }}>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-photo/portrait-bride-young-beautiful-woman-green-blurred-background-generative-ai_676620-296.jpg' }} // Placeholder image URL
              style={{ width: 35, height: 35, borderRadius: 40, marginRight: 0 }}
            />
            <View style={{ paddingLeft: 16}}>
              <Text style={{fontWeight: 'bold'}}>Hannah Mae</Text>
              <Text>Reset Sunday is all I need to clear my mind. Mental Health!!!</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 }}>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-photo/portrait-bride-young-beautiful-woman-green-blurred-background-generative-ai_676620-296.jpg' }} // Placeholder image URL
              style={{ width: 35, height: 35, borderRadius: 40, marginRight: 0 }}
            />
            <View style={{ paddingLeft: 16}}>
              <Text style={{fontWeight: 'bold'}}>Hannah Mae</Text>
              <Text>Charlie was being such a good boy today :)</Text>
              <View style={{paddingTop: 16}}>  
                <Image source={{ uri: 'https://theanimalkeeper.com/wp-content/uploads/petting-dog.jpeg' }} style={{ width: '100%', height: 200, borderRadius: 8, marginBottom: 8 }} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
