import React, { useContext, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import CameraIcon from '../asset/icons/camera.jsx';
import GalleryIcon from '../asset/icons/gallery.jsx';
import PencilIcon from '../asset/icons/pencil.jsx';
import { COLOR, FONT_SIZE } from '../basic/constants.js';
import ModalView from '../components/PickerModal/ModalView.tsx';
import { UserContext } from '../store/context/userContext.js';

const langs = [
  {
    _id: '1',
    code: '0',
    label: 'Created',
    name: 'Created',
  },
  {
    _id: '2',
    code: '1',
    label: 'Confirmed',
    name: 'Confirmed',
  },
];

const ProfilePicSelect = () => {
  const { newAccountSetupData, setNewAccountSetupData } = useContext(UserContext);
  const [showImageSelect, setShowImageSelect] = React.useState(false);
  const selectImage = () => {
    if (!showImageSelect) {
      setShowImageSelect(true);
    }
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
    })
      .then(image => {
        setNewAccountSetupData({...newAccountSetupData, profilePic: image});
        setShowImageSelect(false);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 325,
      height: 215,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
    })
      .then(image => {
        setNewAccountSetupData({...newAccountSetupData, profilePic: image});
        setShowImageSelect(false);
      })
      .catch(err => {
        console.error(err);
      });
  };
  const RenderSource = () => {
    return (
      <View style={styles.justifyCenter}>
        <TouchableOpacity
          onPress={() => {
            setShowImageSelect(false);
            openCamera();
          }}
          style={styles.selectCamera}>
          <CameraIcon />
          <Text style={styles.cameraText}>Open Camera</Text>
          {/* {imageSource === 1 && <Text>IconCheckBox</Text>} */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            openGallery();
          }}
          style={styles.selectCamera}>
          <GalleryIcon />
          <Text style={styles.cameraText}>Open Gallery</Text>
          {/* {imageSource === 2 && <Text> Chhhheckbox</Text>} */}
        </TouchableOpacity>
      </View>

    );
  };

  return (
    <View style={styles.imageSelectHeader}>
      <ModalView
        type="riderSelect"
        text="English"
        imageSource={''}
        modalHeader="Choose Upload option"
        animationType="slide"
        label={'Language'}
        modalStyle={styles.modalStyle}
        data={langs}
        children={<RenderSource />}
        visible={showImageSelect}
        setVisible={setShowImageSelect}
      />

      <View style={styles.imageSelectHeader}>
        <TouchableOpacity onPress={selectImage} style={styles.imageSelect}>
          <PencilIcon />
        </TouchableOpacity>
        <Image
          resizeMode="cover"
          style={styles.profileImage}
          source={
            newAccountSetupData?.profilePic?.path
              ? { uri: newAccountSetupData?.profilePic?.path }
              : require('../asset/sample_profile.png')
          }
        />
      </View>
    </View>
  );
};

export default ProfilePicSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BG_COLOR,
    paddingHorizontal: 5,
    paddingTop: 10,
    // backgroundColor:'red'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  text: {
    // fontFamily: FONT_FAMILY.urbanistBold,
    fontSize: FONT_SIZE.f16,
    marginLeft: 10,
  },
  item: {
    justifyContent: 'space-between',
    //paddingVertical: 10,
    marginBottom: 1,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GREY,
  },
  profileImage: {
    height: 130,
    width: 130,
    borderRadius: 65,
    alignSelf: 'center',
    marginTop: 20,
  },
  name: {
    // fontFamily: FONT_FAMILY.urbanistBold,
    fontSize: FONT_SIZE.f16,
    textAlign: 'center',
    marginTop: 10,
  },
  number: {
    // fontFamily: FONT_FAMILY.urbanistRegular,
    fontSize: FONT_SIZE.f16,
    color: COLOR.DARK_GREY,
    textAlign: 'center',
  },
  nextBtn: {
    padding: 10,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  countryModal: {
    backgroundColor: '#FAFAFA',
    // width: 0.31 ,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    padding: 10,
    //paddingVertical: 15
  },

  btn: {
    width: '80%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '5%',
  },
  genderModal: {
    // backgroundColor: 'red',
    width: 15,
    // marginHorizontal: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    // marginTop: (20),
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  leftIcon: {
    paddingTop: 7,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-evenly',
    width: 50,
    alignSelf: 'center',
    // borderWidth: 1,
    // alignItems: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  flexOccupy: {
    flex: 1,
  },
  otpTitle: {alignItems: 'center', marginTop: 3},
  genderIcon: {paddingTop: 6},
  genderFont: {fontSize: 16},
  imageSelect: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#FFB200',
    position: 'absolute',
    top: '14%',
    left: '70%',
    zIndex: 99999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSelectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },

  modalStyle: {
    height: '30%',
    //top: '35%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  genderModalStyle: {
    height: '30%',
    // top: '35%',
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
  },

  languageModal: {
    backgroundColor: '#FAFAFA',
    width: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 330,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: '#0000004D',
  },
  nameInput: {
    borderWidth: 0,
  },
  nameField: {
    width: 60,
    alignSelf: 'center',
    marginLeft: -20,
    borderWidth: 0,
  },
  emailField: {
    width: 90,
    alignSelf: 'center',
    marginTop: 20,
  },
  line: {
    borderWidth: 0.3,
    borderBottomColor: COLOR.GREY,
    height: 0.1,
    marginTop: 12,
    opacity: 0.3,
    width: 350,
    alignSelf: 'center',
  },
  selectCamera: {
   
    marginTop: 20,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius :15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20
  },
  cameraText: {
    marginVertical: 10,
    fontSize: 17,
    fontWeight: '400',
    color : "#000000",
    // color: '#161616',
  },
  checkBox: {position: 'absolute', right: 10, top: 0},
  cameraIcon: {opacity: 0.8, marginLeft: 6},
  sourceContainer: {backgroundColor: 'white', flex: 1},
  justifyCenter: { justifyContent: "space-around", flexDirection: 'row'},
});
