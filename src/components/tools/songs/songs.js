const songs = [
  {
    id: 1,
    title: "PELI WAAR",
    artist: "Imran Khaan",
    duration: "2:56",
    image:
      "https://i.ytimg.com/vi/2rQWmj4z25E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcmIHA53ImkFMaBMs3DgZrNPVLJw",
    audioUrl:
      "/assets/tools/songs/Peli_Waar_(Remix)_SR_MUZIK_Imran_Khan_DJ+SARFRAZ_(320_kbps).mp3",
    likes: 56,
    views: 230,
  },
  {
    id: 2,
    title: "Hawayein",
    artist: "Arijit Singh",
    duration: "4:05",
    image:
      "https://i.ytimg.com/vi/5iIwxzJ05x8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCU7K-gYatScaQRT9yMz9vifg-xtg",
    audioUrl:
      "/assets/tools/songs/Hawayein_(REMIX)_DJ_Nafizz&Hardik_Raise_Arijit_Singh_Shahrukh_Khan_SRMUZIK(320_kbps).mp3",
    likes: 241,
    views: 500,
  },
  {
    id: 3,
    title: "O Oh Jaane Jaana",
    artist: "Kamaal Khan",
    duration: "2:48",
    image:
      "https://i.ytimg.com/vi/bfjl16pEib8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHNaZEM60OPAny4PLlRaRltZ-pew",
    audioUrl:
      "/assets/tools/songs/OH_OH_JANE_JAANA_REMIX_SR_MUZIK_DJ_SOMAIRAH&DJ_VAGGY_SALMAN_KHAN_KAMAAL_KHAN(128 kbps).mp3",
    likes: 843,
    views: "1k",
  },
  {
    id: 4,
    title: "Teri Mitti",
    artist: "Parineeti Chopra",
    duration: "3:12",
    image:
      "https://i.ytimg.com/vi/3t7CnEJsx7s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhAw6zH5TAll2gmVZa9jJGjGJy1g",
    audioUrl:
      "/assets/tools/songs/TERI_MITTI_SR_MUZIK_SAD_MIX_KESARI_FEMAIL_VIRSON(128 kbps).mp3",
    likes: 287,
    views: 650,
  },
  {
    id: 5,
    title: "Raat Di Gedi",
    artist: "Diljit Dosanjh",
    duration: "3:42",
    image:
      "https://i.ytimg.com/vi/83KP-6E_-Rg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBo1UoaHkIE_6FSNZZw7CpuAva2hg",
    audioUrl:
      "/assets/tools/songs/RAAT_DI_GEDI(REMIX)_DJ_SAN_DILJIT_DOSANJH_SRMUZIK(128 kbps).mp3",
    likes: 983,
    views: "1.2K",
  },
  {
    id: 6,
    title: "Ek Pal Ka Jeena",
    artist: "Lucky Ali",
    duration: "3:48",
    image:
      "https://i.ytimg.com/vi/FyHIw1xayzs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi-rTDJ1vPGlMReYwzeAsDavIryQ",
    audioUrl:
      "/assets/tools/songs/EK_PAL_KA_JEENA_(REMIX)_DJ_KARAN_&_DEEP_SRMUZIK_(320_kbps).mp3",
    likes: 147,
    views: "246",
  },
  {
    id: 7,
    title: "Knightridah",
    artist: "Imran Khaan",
    duration: "3:41",
    image:
      "https://i.ytimg.com/vi/LKvH0jU22pk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFe9a9PwD6bKBOpXsp8tBCqTt9tQ",
    audioUrl:
      "/assets/tools/songs/Knightridah(Remix)_SR_MUZIK_Scorpio_Artiste_imran_Khan_Latest_Punjabi_Songs.mp3",
    likes: 147,
    views: "246",
  },
  {
    id: 8,
    title: "Kamaal HAI",
    artist: "UCHNA AMIT & FAT : BADSHAH",
    duration: "3:31",
    image:
      "https://i.ytimg.com/vi/JkyhjZuiYqw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0q_l3QrBpEfwCEKSEZUGS8pdKfw",
    audioUrl:
      "/assets/tools/songs/Kamaal_HAI_(Remix)_SR_MUZIK_l_DJ_Ravish&Chico.mp3",
    likes: 147,
    views: "246",
  },
  {
    id: 9,
    title: "Tune Mari Entriyaan",
    artist: "KK, Vishal Dadlani, Neeti Mohan, Bappi Lahiri",
    duration: "2:55",
    image:
      "https://i.ytimg.com/vi/5uj4zLWZRwg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6hF2opoXGKCDhDhqS3gVnU3vNvw",
    audioUrl:
      "/assets/tools/songs/Tune_Mari_Entriyaan(REMIX)_DJ_BAPU&SAWSTIK_gunday_SR_MUZIK.mp3",
    likes: 147,
    views: "246",
  },
  {
    id: 10,
    title: "ZAALIMA",
    artist: "Arijit Singh, Harshdeep Kaur",
    duration: "3:41",
    image:
      "https://i.ytimg.com/vi/eNH0jX99tdU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCROlyw-unBoDtZPxDVTmWIumR6xQ",
    audioUrl:
      "/assets/tools/songs/ZAALIMA(REMIX)_DJ_NISHANT_MIX_RAEES_SR_MUZIK.mp3",
    likes: 147,
    views: "246",
  },
  {
    id: 11,
    title: "MERE WALA SARDAR",
    artist: "JUGRAJ SANDHU",
    duration: "4:44",
    image:
      "https://i.ytimg.com/vi/gL6C5xMc58g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvefQitkO7Hbxiw5uGUygssLUHMQ",
    audioUrl:
      "/assets/tools/songs/MERE_WALA_SARDAR_(REMIX)_JUGRAJ_SANDHU_SR_MUZIK.mp3",
    likes: 147,
    views: "246",
  },
  {
    id: 12,
    title: "DILLIWAALI GIRLFRIEND",
    artist: "Arijit Singh, Sunidhi Chauhan",
    duration: "5:07",
    image:
      "https://i.ytimg.com/vi/gDXLB-0jw9c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARofJT_w1dsDGavx80t5LunEkyeg",
    audioUrl:
      "/assets/tools/songs/DILLIWAALI_GIRLFRIEND_(REMIX)_DJ_NISHANT_SR_MUZIK.mp3",
    likes: 147,
    views: "246",
  },
  {
    id: 13,
    title: "Yaad Piya Ki Aane Lagi",
    artist: "Neha Kakkar",
    duration: "3:48",
    image:
      "https://i.ytimg.com/vi/A0nIcMgNSfU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhPIGUoZTAP&rs=AOn4CLBIHpkHYHktxbNUJIsQsm6N7eLUKA",
    audioUrl:
      "/assets/tools/songs/Yaad_Piya_Ki_Aane_Lagi_[ Remix ]_DJ_Mehak_Smoker&DJ_Tejas_TK_SR_MUZIK.mp3",
    likes: 147,
    views: "246",
  },
];

export default songs;
