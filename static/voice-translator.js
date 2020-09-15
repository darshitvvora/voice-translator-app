// AWS configuration
var awsRegion = 'us-east-1';
var requestId;

var source_language = 'en'
var target_language = 'es'

function babel_select(mode,language) {
  if(language === 'hi'){
    document.getElementById(mode + "_" + language).style.border="thick solid green";
    document.getElementById(mode + "_" + language).style.borderRadius = "250px";
    document.getElementById(mode + "_" + language).src = "data:image/jpeg;base64,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";
  } else {
  document.getElementById(mode + "_" + language).src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/" + language + "2.png";
  }
  if (mode == 'source') {
    source_language = language;
  } else {
    target_language = language;
  }

}

function babel_unselect_source() {
  document.getElementById("source_en").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/en.png";
  //document.getElementById("source_gb").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/gb.png";
  document.getElementById("source_es").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/es.png";
  document.getElementById("source_hi").style.border="thick solid transparent";
  //document.getElementById("source_ca").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/ca.png";
  //document.getElementById("source_fr").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/fr.png";
}

function babel_unselect_target() {
  document.getElementById("target_en").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/en.png";
  document.getElementById("target_gb").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/gb.png";
  document.getElementById("target_de").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/de.png";
  document.getElementById("target_pl").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/pl.png";
  document.getElementById("target_es").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/es.png";
  document.getElementById("target_ca").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/ca.png";
  document.getElementById("target_fr").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/fr.png";
  document.getElementById("target_ja").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/ja.png";
  document.getElementById("target_ru").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/ru.png";
  document.getElementById("target_it").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/it.png";
  document.getElementById("target_sv").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/flags/sv.png";
}

function babel_stop() {
  // document.getElementById("stop_button").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/stop2.png";
  // document.getElementById("start_button").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/start.png";
  document.getElementById("stop_button").style.backgroundColor = "gray";
  document.getElementById("start_button").style.backgroundColor = "rgb(236, 114, 17)";

  document.getElementById("stop_button").classList.remove('clickableimage');
  document.getElementById("start_button").classList.add('clickableimage');
}

function babel_start() {
  // document.getElementById("stop_button").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/stop.png";
  // document.getElementById("start_button").src = "https://s3.amazonaws.com/tomash-us-east-1/voice-translator/graphics/start2.png";

  document.getElementById("stop_button").style.backgroundColor = "rgb(236, 17, 53)";
  document.getElementById("start_button").style.backgroundColor = "gray";
  document.getElementById("stop_button").classList.add('clickableimage');
  document.getElementById("start_button").classList.remove('clickableimage');
}





AWS.config.update({
  region: awsRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

// S3 object for storing input and output audio
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: bucketName},
  region: awsRegion
});

// Define variables for audio recorder
var recorder;
var recorderInput;
var getUserMediaStream;
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext;

// Get buttons from DOM
var recordStartButton = document.getElementById('start_button');
var recordStopButton = document.getElementById('stop_button');

// Add click event callbacks to buttons
recordStartButton.addEventListener('click', startRecording);
recordStopButton.addEventListener('click', stopRecording);

// Generate unique identifiers
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// Check if URL returns HTTP 200 OK
function urlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status==200;
}

// Polling for result
function poll(fn, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    var checkCondition = function(resolve, reject) {
        // If the condition is met, we're done!
        var result = fn();
        if(result) {
            resolve(result);
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime) {
            setTimeout(checkCondition, interval, resolve, reject);
        }
        // Didn't match and too much time, reject!
        else {
            reject(new Error('timed out for ' + fn + ': ' + arguments));
        }
    };

    return new Promise(checkCondition);
}

// Adjust buttons and message for processing
function processingView() {
  // Show processing message
  document.getElementById('processing').style.display = 'inline';
  // Disable all buttons
  recordStartButton.disabled = true;
  recordStopButton.disabled = true;
}

// Adjust buttons and message for recording
function recordingView() {
  // Hide processing message
  document.getElementById('processing').style.display = 'none';
  // Disable all buttons
  recordStartButton.disabled = true;
  recordStopButton.disabled = false;
}

// Reset buttons and hide messages
function resetView() {
  // Hide processing message
  document.getElementById('processing').style.display = 'none';
  // Disable all buttons
  recordStartButton.disabled = false;
  recordStopButton.disabled = true;
}

// Generate request ID
function generateRequestId() {
  return guid();
}

// Record audio with device microphone
function startRecording() {


  audioContext = new AudioContext;

  // Adjust buttons and message for recording
  recordingView();

  // Define constraints object for MediaStream
  var constraints = { audio: true, video: false }

  // Access MediaDevices to get audio stream
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    getUserMediaStream = stream;
    recorderInput = audioContext.createMediaStreamSource(stream);
    // Create Recorder.js object and start recording
    recorder = new Recorder(recorderInput, { numChannels: 1 })
    recorder.record()
  }).catch(function(err) {
    alert(err);
    // Reset buttons and message in case of failure
    resetView();
    // Inform user that recording failed (most likely was blocked by browser due
    // to insecure origin)
    alert("....Recording failed, try using Firefox or local copy of the app from your machine.");
  });
}

function stopRecording() {

  // Reset buttons and message
  resetView();

  // Stop recording with Recorder.js object
  recorder.stop();

  // Stop microphone and get recorded audio
  getUserMediaStream.getAudioTracks()[0].stop();

  // Pass blob with audio data to callback
  recorder.exportWAV(uploadAudioRecording)

}



function uploadAudioRecording(blob) {

  // Show processing phase in the UI
  processingView();

  // Generate unique ID for upload audio file request
  requestId = generateRequestId();

  // Create key for S3 object and upload input audio file
  var inputKey = 'input/' + requestId + '.wav'

  s3.upload({
    Key: inputKey,
    Body: blob
  }, function(err, data) {
    if (err) {
      return alert('There was an error uploading your recording: ', err.message);
    } else {

      var lambda = new AWS.Lambda({region: awsRegion, apiVersion: '2015-03-31'});
      var input = {
         FunctionName : lambdaFunction,
         InvocationType : 'RequestResponse',
         LogType : 'None',
         Payload: JSON.stringify({"bucket": bucketName, "key": inputKey, "sourceLanguage": source_language, "targetLanguage" : target_language})
      };

      lambda.invoke(input, function(err, data) {
             if (err) {
               console.log(err);
               alert("There was a problem with Lambda function!!! ");
             } else {
               var resultUrl = data.Payload.replace(/['"]+/g, '');
               resetView();
               document.getElementById('audio-output').innerHTML = '<audio controls autoplay style="display:inline"><source src="' + resultUrl + '" type="audio/mpeg"></audio><br/>';
             }
          });
    }
  });

}
