var config = {
  apiKey: "AIzaSyCZCs7PIno3eKWR1u-CR5Ua9AqPLPFwluw",
  authDomain: "tolc-b0fa5.firebaseapp.com",
  databaseURL: "https://tolc-b0fa5.firebaseio.com",
  projectId: "tolc-b0fa5",
  storageBucket: "tolc-b0fa5.appspot.com",
  messagingSenderId: "62715960283"
};
firebase.initializeApp(config);


//Adding event listener to the close button
$('#closePopUp').click(function(event) {
  window.close();
});

// auto suggest Tags

var tags;

// var ms = $('#ms').magicSuggest({
//         data: [{"id":1,"Title":"javascript"},
//         {"id":2,"Title":"jquery"},
//         {"id":3,"Title":"HTML"},
//         {"id":4,"Title":"css"},
//         {"id":5,"Title":"angularjs"},
//         {"id":6,"Title":"php"},
//         {"id":7,"Title":"python"},
//         {"id":8,"Title":"django"},
//         {"id":9,"Title":"panda"},
//         {"id":10,"Title":"numpy"}],
//         valueField: 'id',
//         displayField: 'Title',
//         highlight: false
//  });
//
//  $(ms).on('selectionchange', function(){
//   //alert(JSON.stringify(this.getSelection()));
//   tags = this.getSelection();
//   console.log(tags);
//  });

// end auto suggest Tags


var textarea = document.getElementById("notes") ;
textarea.onfocus = function() {
  if(document.getElementById('question').checked)
  {
    document.getElementById("prompt_question").removeAttribute("hidden");
  }
  if(document.getElementById('explanation').checked)
  {
    document.getElementById("prompt_explanation").removeAttribute("hidden");
  }
  if(document.getElementById('example').checked)
  {
    document.getElementById("prompt_example").removeAttribute("hidden");
  }
};

textarea.onblur = function() {
  document.getElementById("prompt_question").setAttribute("hidden","true");
  document.getElementById("prompt_example").setAttribute("hidden","true");
  document.getElementById("prompt_explanation").setAttribute("hidden","true");
};

//Adding event listener to source buttons
document.getElementById('addSource-button').addEventListener('click', addSource);
document.getElementById('dontaddSource-button').addEventListener('click', dontaddSource);

//Display source url depending on user's option
function addSource(event)
{
  event.preventDefault();
  document.getElementById("bookmark").removeAttribute("hidden");
}

function dontaddSource(event)
{
  event.preventDefault();
  document.getElementById("bookmark").setAttribute("hidden", "true");
}

function getURL()
{
  chrome.runtime.getBackgroundPage(function(eventPage) {
    // Call the getPageInfo function in the background page, passing in
    // our onPageDetailsReceived function as the callback. This injects
    // content.js into the current tab's HTML
    eventPage.getPageDetails(onPageDetailsReceived);
  });
}

function onPageDetailsReceived(pageDetails)  {
  console.log(pageDetails.url)
  url = pageDetails.url;
  document.getElementById('url').value = pageDetails.url;
}


function addPost(e)
{
  e.preventDefault();
  const url = document.getElementById('url').value;
  const title = document.getElementById('title1').value;
  const tags = document.getElementById('ms').value;
  const note = document.getElementById('notes').value;
  const inp_topic = document.getElementById("inputTopic");
  const topic = inp_topic.options[inp_topic.selectedIndex].value;
  const type = document.querySelector('input[name="posttyp"]:checked').value;
  var path = topic+"/"+type;

  firebase.database().ref(path)
  .push({
    user: firebase.auth().currentUser.displayName,
    url: url,
    title: title,
    tags: tags,
    note: note,
    userProfileImg: firebase.auth().currentUser.photoURL,
    topic: topic,
    type: type,
    date: Date(),
    useful: 0,
    notuseful: 0
  })
  .then(() => {
    console.log("Post has been added");

    //create notification
    if (Notification.permission !== "granted")
    Notification.requestPermission();
    else {
      var notification = new Notification('Notification', {
        icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
        body: "Hey there! A Reference has been added!",
      });

      notification.onclick = function () {
        window.open(url);
      };

    }
    window.location.href = "main.html";


  })
  .catch(() => {
    console.log("Error adding Post :(")
  });

}

window.onload = function() {
  document.getElementById('addPost-button').addEventListener('click', addPost);
  getURL();

};

document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted")
  Notification.requestPermission();
});
