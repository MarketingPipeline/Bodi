// Clock 
 window.onload = function() {
  clock();  
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var mid = 'PM';
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'AM';
    }     
  document.getElementById('Clock').innerHTML =     hour+':'+min+mid ;
      
        document.getElementById('MovieClock').innerHTML =     hour+':'+min+' '+mid ;
      
       document.getElementById('PhotoGalleryClock').innerHTML =     hour+':'+min+mid ;
      
      
    setTimeout(clock, 1000);
    }
}

// Right Click Menu



const menu = document.getElementById('context-menu')
const outClick = document.getElementById('out-click')


outClick.addEventListener('click', () => {
  menu.classList.remove('show')
  outClick.style.display = "none"
})


  const clickable = document.getElementById('swipe_card_item')




clickable.addEventListener('contextmenu', (e) => {

   e.preventDefault()
  var Style = e.clientY - 150
  menu.style.top = `${Style}px`
  menu.style.left = `${e.clientX}px`
  menu.classList.add('show')

  outClick.style.display = "block"
 
});


// Progress Bar Animation 
  function ProgressBarAnimation() {

var ProgressBar = document.querySelector('.Dialog-Menu-1-slider span[role="position"]'); 

 
var ProgressBar_Percentage = document.querySelector('.progress_slider_animation');     
    ProgressBar.classList.add("ProgressBar_Animation");

    ProgressBar.addEventListener( "animationend",  function() {

      setTimeout(function(){
    ProgressBar.classList.remove("ProgressBar_Animation");    
}, 2000);
     

    } );

  }

// Swiper for Libray Items 
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: false,
  slidesPerView: 4.5,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1.5
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2.5
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3.5
    },
    1200: {
      slidesPerView: 4.5
    }
  }
});










/// Video Player Functions 

// Subtitles Settings Menu Functions





// Subtitles 

// Detect Toggle Check On / Off  



function ToggleSubtitles() {
  var Toggle = document.getElementById("SubtitlesToggleSwitch");
  if (Toggle.checked) {
     for (var i = 0; i < video.textTracks.length; i++) {
   video.textTracks[i].mode = 'showing';
}
  } else {
   		for (var i = 0; i < video.textTracks.length; i++) {
   video.textTracks[i].mode = 'hidden';
}
  }
}
// Show Subtitle Menus

function ShowSubtitlesSettingsMenu(){
    var SubtitlesSettingsMenu = document.getElementById("SubtitlesSettingsMenu");
      SubtitlesSettingsMenu.style.display = "block"; 
      SubtitlesSettingsMenu.style.opacity = "1";
     SubtitlesSettingsMenu.style.zIndex = "1000";
 
}



// Hide Subttle Menu
function HideSubtitlesSettingsMenu(){
      var SubtitlesSettingsMenu = document.getElementById("SubtitlesSettingsMenu");
  
    SubtitlesSettingsMenu.style.display = "none"; 
      SubtitlesSettingsMenu.style.opacity = "0";
     SubtitlesSettingsMenu.style.zIndex = "0";
 
};






//// End Of Subtitle 



/// Library Items 


var No_Info_Item_Text = document.getElementById('ItemLibrary_NoInfoText');


var No_Info_Item_Icon = document.querySelector('.Icon_Section');
  
 var ShowLibraryItemInfo = document.querySelector('.Library_Item_Details_Section'); 


  
function Show_NoInfo_Item() {
    ShowLibraryItemInfo.style.opacity = "0";
   No_Info_Item_Text.style.opacity = "1";
   No_Info_Item_Icon.style.opacity = "1";
};  





  
function Hide_No_Info_Item() {
   ShowLibraryItemInfo.style.opacity = "1";
   No_Info_Item_Text.style.opacity = "0";
   No_Info_Item_Icon.style.opacity = "0";
};  


// Options Menu Functions

function ShowOptionsMenu(){
    var Options_Menu = document.getElementById("Options_Menu");

      Options_Menu.style.opacity = "1";
  Options_Menu.style.width = "300px";
  Options_Menu.style.zIndex = "10";
     
 
};




function HideOptionsMenu(){
    var Options_Menu = document.getElementById("Options_Menu");

      Options_Menu.style.opacity = "0";
       Options_Menu.style.width = "230px";
  Options_Menu.style.zIndex = "-1";
 
};







// Update Video Card



function UpdateVideoCardInfo(Image, Title, Description) {

    var VideoCard_Image = document.getElementById("VideoCard_Image");
 
    var VideoCard_Title = document.getElementById("VideoCard_ShortTitle");

    var VideoCard_Description = document.getElementById("VideoCard_Description");

   VideoCard_Image.src = Image;
  VideoCard_Title.innerHTML = Title;
  VideoCard_Description.innerHTML = Description;
};


// Audio Settings Menu


// Audio Settings Menu Functions



function ShowAudioSettingsMenu(){
    var AudioSettingsMenu = document.getElementById("AudioSettingsMenu");
      AudioSettingsMenu.style.display = "block";
      AudioSettingsMenu.style.opacity = "1";
     AudioSettingsMenu.style.zIndex = "1000";
 
};




function HideAudioSettingsMenu(){
      var AudioSettingsMenu = document.getElementById("AudioSettingsMenu");
      AudioSettingsMenu.style.display = "none"; 
      AudioSettingsMenu.style.opacity = "0";
     AudioSettingsMenu.style.zIndex = "0";
 
};



 
// Volume Settings 

var ResultVolumeSettings = function(){
     var video = document.getElementById("video");
   
    video.volume = 1.00;
    
  var VolumeStepper = document.getElementById("VolumeStepper");

   var video = document.getElementById("video");

  
   VolumeStepper.value = 0;
  
  
   var target = document.getElementById('VolumeStepper_Value');
  target.innerHTML = "<p>"+ 0 + "</p>";
  
  
};


var rangeValue = function(){
  // Volume Stepper
var VolumeStepper = document.getElementById("VolumeStepper");

   var video = document.getElementById("video");

  
  var newValue = VolumeStepper.value;
    if (newValue == 0) {
    video.volume = 1.00;
  } else {
    video.volume = `0.${newValue}`
  }
  if (newValue == 100){
    video.volume = 0.00;
  }
  
   
   
   if (newValue > 0) {
    var NegativeVolume = "-"
  } else {
   var NegativeVolume = ""
  }
  var target = document.getElementById('VolumeStepper_Value');
  target.innerHTML = "<p>"+ newValue  +NegativeVolume+ "</p>";
};

VolumeStepper.addEventListener("input", rangeValue);




   // Volume Amplification Toggle Switch


   


var VolumeAmplificationValue = function(){
  // Volume Stepper
var Volume_Amplification_Stepper = document.getElementById("Volume_Amplification_Stepper");

   var video = document.getElementById("video");
 
  
  var newValue = Volume_Amplification_Stepper.value;
  var videoplayer = document.getElementById("video");

  
  amplifyMedia(videoplayer, newValue);
  
  var target = document.getElementById('Volume_Amplification_Stepper_Value');
  target.innerHTML = "<p>" +newValue+ "</p>";
};

Volume_Amplification_Stepper.addEventListener("input", VolumeAmplificationValue);





  // Volume Amplification

function amplifyMedia(mediaElem, multiplier) {

   
  var context = new (window.AudioContext || window.webkitAudioContext),
      

      
      result = {
        context: context,
        gain: context.createGain(),
        media: mediaElem,
        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
        getAmpLevel: function() { return result.gain.gain.value; }
      };

            
  if (context.source == undefined) {
  // Build element
result.source = context.createMediaElementSource(mediaElem);
};
  
  
  result.source.connect(result.gain);
  result.gain.connect(context.destination);
  result.amplify(multiplier);
  return result;
};



// Notification 


var Default_Time = 3000; 
var Notification_Count = 0;
function ShowNotification(icon, title, text, background) {
     Notification_Count += 1;
    var x = document.getElementById("Notification_1");
 
  
  
    function ChangeBackgroundColors(){
      if (background){
      x.style.borderLeft = `75px solid ${background}`;
    }  else {
       x.style.borderLeft = `75px solid #1085a8`;
    }
    }
  	if (Notification_Count > 1) {
		setTimeout(function(){
    Default_Time + 9000
    ChangeBackgroundColors()
  x.innerHTML =  `<id class="checkicon"><b>${title}</b> <i class="${icon}"></i> </id><p>${text}</p>`
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}, Default_Time);
	} else {
		ChangeBackgroundColors()
  
  x.innerHTML =  `<id class="checkicon"><b>${title}</b> <i class="${icon}"></i> </id><p>${text}</p>`
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);	
	}
  
  
}
/// Add Items To Playlist 


var VideoGenres, VideoSources, VideoTitles, AlbumCovers;


VideoSources = [];

VideoTitles = [];

VideoGenres = [];

AlbumCovers = [];

function addItemsToPlaylist (src, title, genre, albumCoverArt) {
  VideoSources.push(src);
  VideoTitles.push(title);
  VideoGenres.push(genre);
  if (albumCoverArt) {
    AlbumCovers.push(albumCoverArt);
  }
  
}





 if(VideoSources.length > 0){
          
i = i + 1; // increase i by one
    i = i % VideoSources.length; // if we've gone too high, start from `0` again
 if(i === 0){
   alert("done");
 } 
 





