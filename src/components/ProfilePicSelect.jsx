import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Modal, Pressable, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import PencilIcon from '../assets/Icons/pencil.jsx';
import CameraIcon from '../assets/Icons/camera.jsx';
import GalleryIcon from '../assets/Icons/gallery.jsx';

const ProfilePicSelect = ({ data, setData }) => {
  const [showImageSelect, setShowImageSelect] = useState(false);
  const selectImage = () => {
    if (!showImageSelect) {
      setShowImageSelect(true);
    }
  };

  const pickImageAsyncLibrary = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setData({ ...data, profileImage: result.assets[0] })
      setShowImageSelect(false)
    } else {
      console.log('You did not select any image.');
    }
  };

  const pickImageAsyncCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setData({ ...data, profileImage: result.assets[0] })
      setShowImageSelect(false)
    } else {
      console.log('You did not select any image.');
    }
  };

  const RenderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showImageSelect}
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setShowImageSelect(!showImageSelect);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.tabs} onPress={pickImageAsyncCamera}>
                <CameraIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabs} onPress={pickImageAsyncLibrary}>
                <GalleryIcon />
              </TouchableOpacity>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowImageSelect(!showImageSelect)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <View style={styles.imageSelectHeader}>
      <View style={styles.imageSelectHeader}>
        <TouchableOpacity onPress={selectImage} style={styles.imageSelect}>
          <PencilIcon />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          style={styles.profileImage}
          source={!data?.profileImage ? require("../assets/Images/sample_profile.png") : { uri: data?.profileImage?.uri }}
        />
      </View>
      <RenderModal />
    </View>
  );
};

export default ProfilePicSelect;

const styles = StyleSheet.create({
  profileImage: {
    height: 130,
    width: 130,
    borderRadius: 65,
    alignSelf: 'center',
    marginTop: 20,
  },
  imageSelect: {
    height: 35,
    width: 35,
    borderRadius: 40,
    backgroundColor: '#FF0000',
    position: 'absolute',
    top: '14%',
    left: '70%',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSelectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 5
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
