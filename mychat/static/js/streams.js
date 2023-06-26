// const APP_ID='c3dfe7dfb0b34716a26cdb0eaaa02475'
// const CHANNEL='main'
// const TOKEN='007eJxTYFjU+0zDxWxa0UIR89BNUtpy975c+8r93NN+RcmTWYlVNzUUGJKNU9JSzVPSkgySjE3MDc0SjcySU5IMUhMTEw2MTMxNy6pnpjQEMjIczG1lZmSAQBCfhSE3MTOPgQEAboYgQw=='
// let UID;

// const client=AgoraRTC.createClient({mode:'rtc',codec:'vp8'})
// let localTracks=[]
// let remoteUsers={}
// let joinAndDisplayLocalStream=async()=>{
//     UID=await client.join(APP_ID,CHANNEL,TOKEN,null)

//     localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()
//     let player=`<div class="video-container" id="user-container-${UID}">
//                     <div class="username-wrapper"><span class='user-name'>My Name:</span></div>
//                          <div class="video-player" id="user-${UID}">
//                      </div>
//                 </div>`
//     document.getElementById('video-streams').insertAdjacentHTML('beforeend',player)
//     localTracks[1].play(`user-${UID}`)
//     await client.publish([localTracks[0],localTracks[1]])

// }
// joinAndDisplayLocalStream()
const APP_ID = 'c3dfe7dfb0b34716a26cdb0eaaa02475';
const CHANNEL = 'main';
const TOKEN = '007eJxTYFjU+0zDxWxa0UIR89BNUtpy975c+8r93NN+RcmTWYlVNzUUGJKNU9JSzVPSkgySjE3MDc0SjcySU5IMUhMTEw2MTMxNy6pnpjQEMjIczG1lZmSAQBCfhSE3MTOPgQEAboYgQw==';
let UID;

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
let localTracks = [];
let remoteUsers = {};

let joinAndDisplayLocalStream = async () => {
  UID = await client.join(APP_ID, CHANNEL, TOKEN, null);

  localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
  let player = `<div class="video-container" id="user-container-${UID}">
                  <div class="username-wrapper"><span class='user-name'>My Name:</span></div>
                  <div class="video-player" id="user-${UID}"></div>
                </div>`;
  document.getElementById('video-streams').insertAdjacentHTML('beforeend', player);
  localTracks[1].play(`user-${UID}`);
  await client.publish([localTracks[0], localTracks[1]]);
};

joinAndDisplayLocalStream();

