// TODO(DEVELOPER): Change the values below using values from the initialization snippet: Firebase Console > Overview > Add Firebase to your web app.
// Initialize Firebase
var config = {
   apiKey: "AIzaSyCZCs7PIno3eKWR1u-CR5Ua9AqPLPFwluw",
   authDomain: "tolc-b0fa5.firebaseapp.com",
   databaseURL: "https://tolc-b0fa5.firebaseio.com",
   projectId: "tolc-b0fa5",
   storageBucket: "tolc-b0fa5.appspot.com",
   messagingSenderId: "62715960283"
 };
firebase.initializeApp(config);


firebase.database().ref('/web').on('value', function(snapshot) {
  if(snapshot.val()!=null)
  {
   var data = snapshot.val();
   var q_count, exp_count, exa_count;
   q_count = exp_count = exa_count = 0;
   if(data["question"])
   {
   	for(var x in data["question"])
   	{
   		q_count++;
   	}
   }
   if(data["explanation"])
   {
	for(var x in data["explanation"])
   	{
   		exp_count++;
   	}
   }
   if(data["example"])
   {
   	for(var x in data["example"])
   	{
   		exa_count++;
   	}
   }
  document.getElementById("web").innerHTML = q_count + " questions, "+exp_count+" explanations, "+exa_count+" examples";
  }
});

firebase.database().ref('/inlearning').on('value', function(snapshot) {
  if(snapshot.val()!=null)
  {
   var data = snapshot.val();
   var q_count, exp_count, exa_count;
   q_count = exp_count = exa_count = 0;
   if(data["question"])
   {
   	for(var x in data["question"])
   	{
   		q_count++;
   	}
   }
   if(data["explanation"])
   {
	for(var x in data["explanation"])
   	{
   		exp_count++;
   	}
   }
   if(data["example"])
   {
   	for(var x in data["example"])
   	{
   		exa_count++;
   	}
   }
  document.getElementById("inlearning").innerHTML = q_count + " questions, "+exp_count+" explanations, "+exa_count+" examples";
  }
});

firebase.database().ref('/reptool').on('value', function(snapshot) {
 if(snapshot.val()!=null)
  {
   var data = snapshot.val();
   var q_count, exp_count, exa_count;
   q_count = exp_count = exa_count = 0;
   if(data["question"])
   {
   	for(var x in data["question"])
   	{
   		q_count++;
   	}
   }
   if(data["explanation"])
   {
	for(var x in data["explanation"])
   	{
   		exp_count++;
   	}
   }
   if(data["example"])
   {
   	for(var x in data["example"])
   	{
   		exa_count++;
   	}
   }
  document.getElementById("reptool").innerHTML = q_count + " questions, "+exp_count+" explanations, "+exa_count+" examples";
  }
});

firebase.database().ref('/iescript').on('value', function(snapshot) {
 if(snapshot.val()!=null)
  {
   var data = snapshot.val();
   var q_count, exp_count, exa_count;
   q_count = exp_count = exa_count = 0;
   if(data["question"])
   {
   	for(var x in data["question"])
   	{
   		q_count++;
   	}
   }
   if(data["explanation"])
   {
	for(var x in data["explanation"])
   	{
   		exp_count++;
   	}
   }
   if(data["example"])
   {
   	for(var x in data["example"])
   	{
   		exa_count++;
   	}
   }
  document.getElementById("iescript").innerHTML = q_count + " questions, "+exp_count+" explanations, "+exa_count+" examples";
  }
});

firebase.database().ref('/thinkaloud').on('value', function(snapshot) {
  if(snapshot.val()!=null)
  {
   var data = snapshot.val();
   var q_count, exp_count, exa_count;
   q_count = exp_count = exa_count = 0;
   if(data["question"])
   {
   	for(var x in data["question"])
   	{
   		q_count++;
   	}
   }
   if(data["explanation"])
   {
	for(var x in data["explanation"])
   	{
   		exp_count++;
   	}
   }
   if(data["example"])
   {
   	for(var x in data["example"])
   	{
   		exa_count++;
   	}
   }
  document.getElementById("thinkaloud").innerHTML = q_count + " questions, "+exp_count+" explanations, "+exa_count+" examples";
  }
});

firebase.database().ref('/abtest').on('value', function(snapshot) {
 if(snapshot.val()!=null)
  {
   var data = snapshot.val();
   var q_count, exp_count, exa_count;
   q_count = exp_count = exa_count = 0;
   if(data["question"])
   {
   	for(var x in data["question"])
   	{
   		q_count++;
   	}
   }
   if(data["explanation"])
   {
	for(var x in data["explanation"])
   	{
   		exp_count++;
   	}
   }
   if(data["example"])
   {
   	for(var x in data["example"])
   	{
   		exa_count++;
   	}
   }
  document.getElementById("abtest").innerHTML = q_count + " questions, "+exp_count+" explanations, "+exa_count+" examples";
  }
});


//Adding event listener to the close button
$('#closePopUp').click(function(event) {
window.close();
});
