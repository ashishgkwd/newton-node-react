const userData = [
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Aravind",
    message: "ddaal0",
    time: "09:10",
    contactName: "Aravind_NW",
    phoneNumber: 8975642310,
    callType: "In"
  },
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Shaurya",
    message: "bwolledge1",
    time: "09:10",
    contactName: "Shaurya_NW",
    phoneNumber: 8975642310,
    callType: "Out"
  },
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Sithi",
    message: "ccogley2",
    time: "09:10",
    contactName: "Sithi_NW",
    phoneNumber: 8975642310,
    callType: "In"
  },
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Rahul",
    message: "foswick3",
    time: "09:10",
    contactName: "Rahul_NW",
    phoneNumber: 8975642310,
    callType: "Out"
  },
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Nibedan",
    message: "rmunning4",
    time: "09:10",
    contactName: "Nibedan_NW",
    phoneNumber: 8975642310,
    callType: "In"
  },
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Kushagra",
    message: "lodoireidh5",
    time: "09:10",
    contactName: "Kushagra_NW",
    phoneNumber: 8975642310,
    callType: "Out"
  },
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Rishabh",
    message: "ftownsend6",
    time: "09:10",
    contactName: "Rishabh_NW",
    phoneNumber: 8975642310,
    callType: "In"
  },
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Riya",
    message: "wgabbat7",
    time: "09:10",
    contactName: "Riya_NW",
    phoneNumber: 8975642310,
    callType: "Out"
  },
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Niraj",
    message: "dstenett8",
    time: "09:10",
    contactName: "Niraj_NW",
    phoneNumber: 8975642310,
    callType: "In"
  },
  {
    profileImage: "https://www.w3schools.com/howto/img_avatar2.png",
    username: "Rakesh",
    message: "adeye9",
    time: "09:10",
    contactName: "Rakesh_NW",
    phoneNumber: 8975642310,
    callType: "Out"
  }
]


function getUserData() {
  // Fetch the user data from the database and hide all password before returning.
  return userData;
}

module.exports = {
  getUserData
}