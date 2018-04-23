function VideoSportReview(url,autoplay,width,height,mute,repeat,videoid,poster){

  //Librerie JS is mobile
  !function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/Windows Phone/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");if("undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);
  //Librerie JS is mobile

  // Varibili
  if(autoplay === "false") { autoplay = false; } else { autoplay = true; }
  if(repeat === "false") { repeat = false; } else { repeat = true; }
  if(mute === "false") { mute = false; } else { mute = true; }

  if(DebugCustom) { console.log("ARTICLE autoplay"+autoplay); }
  if(DebugCustom) { console.log("ARTICLE repeat"+repeat); }
  if(DebugCustom) { console.log("ARTICLE mute"+mute); }


  //By Riccardo Mel
  //V1.7.5

  console.log("Engine by Riccardo Mel:  Engine Articolo - Versione 1.7.5 ");


  //Variabili utenti
  var DebugCustom = false;
  var attivaLoop = repeat;
  var attivaPostRoll = true;
  var permanentMuted = false;
  var mobileAudioChanger = false;
  var autoplayMobile = autoplay;
  var mutedAudio = mute;
  var hoverAudio = false;

  //console.log(url);
  var res = url.split("|");
  var counterlenght = res.length;
  if (counterlenght == 1){

    if(DebugCustom) { console.log("Single: "+url); }
    //Url Singolo - Retrocompatibilità
    var video_playlists =[
      url
    ];

  } else {

    var video_playlists = res;
    if(DebugCustom) { console.log("Multiple: "+video_playlists); }

  }// Check url singolo o multiplo


  if (!isMobileNewtek) {
    var tagpreroll = '';
    var tagpostroll = '';
    var tagprerollrepeat = tagpreroll;
    var dfp = tagpreroll;
  } else {
    var tagpreroll = '';
    var tagpostroll = '';
    var tagprerollrepeat = tagpreroll;
    var dfp = tagpreroll;
  }

    console.log("ARTICLE - Tag preroll: "+tagpreroll);
    console.log("ARTICLE - Tag preroll REP: "+tagprerollrepeat);
    console.log("ARTICLE - postroll: "+tagpostroll);
    console.log("ARTICLE - dfp: "+dfp);

  //Imposto array Waterfall - Metterne almeno due in quanto fallback parte da 1
  var waterfallArray = [
    dfp,
    dfp
  ];


  //Url video qui.
  //Nel caso usi adaptive usa questo codice:
  //var bitrates = { hls: 'video_playlists[0]' };

  var bitrates = {
    hls: ''+video_playlists[0]+'' // url video
  };

  var settings = {
    logo: 'http://www.sportreview.it/wp-content/themes/detube_child/images/sportreview-per-player.png',
    logoLoc: 'http://www.sportreview.it/',
    pathToRmpFiles: '//cdn.sportreview.it/radiantmp/latest/',
    licenseKey: 'Kl8lMGdlbzdvdjlzdjQyczc/cm9tNWRhc2lzMzBkYjBBJV8q',
    bitrates: bitrates,
    autoHeightMode: true,
    permanentMuted: permanentMuted,
    muted: mutedAudio,
    mutedAutoplayOnMobile: autoplayMobile,
    delayToFade: 3000,
    autoplay: autoplay,
    ads: false,
    adTagUrl: tagpreroll,
    adCountDown: true,
    labels: {
      ads: {
        controlBarCustomMessage: 'Messaggio promozionale'
      },
      hint: {
        sharing: 'Condividi',
        quality: 'Qualità',
        speed: 'Velocità',
        captions: 'Sottotitoli',
        audio: 'Audio',
        cast: 'Cast',
        playlist: 'Playlist'
      },
      error: {
        customErrorMessage: 'Il contenuto video non è al momento disponibile.',
        noSupportMessage: 'Manca il supporto per la riproduzione dei video.',
        noSupportDownload: 'Puoi scaricare il video qui.',
        noSupportInstallChrome: 'E\' necessario aggiornare Google Chrome per visualizzare questo contenuto.'
      }
    },
    endOfVideoPoster: poster,
    poster: poster
  };
  var elementID = 'rmpPlayer-'+videoid;
  console.log(elementID);
  var rmp = new RadiantMP(elementID);
  var rmpContainer = document.getElementById(elementID);


  //NON MODIFICARE DA QUI IN POI
  //Inizio Engine by Riccardo Mel
  //Set up Variabili di sistema
  var postRoll = 0;
  var videoEnded  = 0;
  var waterfallIndex  = 0;
  var adError = false;
  var playlistItem = 0;
  var lastItem = 0;
  var closedPlayer = false;

  //Debug opzionale
  for (var i = 0; i < video_playlists.length; i++) {
    if(DebugCustom) { console.log("Video playlist item: "+video_playlists[i]); }
  }

  //trigger Events
  rmpContainer.addEventListener('adcontentresumerequested', function () {
    if (adError) {
      return;
    }
   if(DebugCustom) { console.log("Engine by Riccardo Mel: ENGINE resume request"); }
  });

  rmpContainer.addEventListener('adcontentpauserequested', function () {
  adError = false;
  if(DebugCustom) { console.log("Engine by Riccardo Mel: pause request"); }
  });

  //AllAdsCompleted
  rmpContainer.addEventListener('adalladscompleted', function () {
    if(videoEnded == 1 &&  postRoll==1){
      videoEnded =0; postRoll=0;
      rmp.setLoop(false); //abilito postroll successivo intercettando workflow del player loop
      if(DebugCustom) { console.log("Engine by Riccardo Mel: RECALL PREROLL"); }
      rmp.loadAds(tagpreroll);
    }
    if(DebugCustom) { console.log("Engine by Riccardo Mel: adalladscompleted"); }
    if (isMobile.any) { rmp.setMute(mute); }
  });
  //AllAdsCompleted

  //Ended events
  rmpContainer.addEventListener('ended', function () {
    //Setto video ended
    videoEnded=1;
      // Playlist Custom
      playlistItem++;
      if(DebugCustom) { console.log(playlistItem); }
      if (typeof video_playlists[playlistItem] !== 'undefined') {
        rmp.setSrc(video_playlists[playlistItem]);
        if(DebugCustom) { console.log("Play:"+video_playlists[playlistItem]); }
      } else {
        lastItem = 1;
        playlistItem = 0;
        rmp.setSrc(video_playlists[0]);
        if(DebugCustom) { console.log("playdefault video"); }
      }
      // Playlist Custom
  });
  //Ended

  //srcchanged
  rmpContainer.addEventListener('srcchanged', function () {
  //Se Loop non attivo
  if(!attivaLoop && lastItem == 1){ lastItem = 0; rmp.stop(); }else{

  if(attivaPostRoll){
    if(postRoll == 0){
      postRoll=1;
      if(DebugCustom) { console.log("Engine by Riccardo Mel: POSTROLL"); }
      rmp.loadAds(tagpostroll);
    }//postRoll isset
  } else {
    rmp.loadAds(tagprerollRepeat);
  }//attivaPostRoll

  }//else
  //Se Loop non attivo
  if(DebugCustom) { console.log("Engine by Riccardo Mel: srcchanged"); }
  });
  //srcchanged

  //AdError
  rmpContainer.addEventListener('aderror', function () {
    if(DebugCustom) { console.log("Engine by Riccardo Mel: aderror: "); }
    adError = true;
    waterfallIndex++;
      if (typeof waterfallArray[waterfallIndex] !== 'undefined') {
        if(DebugCustom) { console.log('new waterfall index is ' + waterfallIndex); }
        if(DebugCustom) { console.log('loadAds waterfall ad at ' + waterfallArray[waterfallIndex]); }
        rmp.loadAds(waterfallArray[waterfallIndex]);
      } else {
        waterfallIndex = 0;//Fai ciclare di nuovo da 0 i fallback il prossimo adcall
        if(DebugCustom) { console.log("Fallback finiti"); }
        if (isMobile.any) { rmp.setMute(mute); }
      }

  });
  //AdError

  rmpContainer.addEventListener('adloaded', function () {
    if(DebugCustom) { console.log("Engine by Riccardo Mel: adloaded"); }
  });

  rmpContainer.addEventListener('pause', function () {
    if(DebugCustom) { console.log("Engine by Riccardo Mel: pause"); }
    if(!attivaLoop) { rmp.showPoster(); }
  });

  if(mobileAudioChanger){
    rmpContainer.addEventListener('ready', function() {
      if(DebugCustom) { console.log('player ready'); }
          if (isMobile.any) {
            //Mobile
            if(DebugCustom) { console.log('Mobile'); }
            rmp.setVolume(1);//imposto volume
          } else {
            //Desktop
            if(DebugCustom) { console.log('Desktop'); }
            rmp.setVolume(0.5);//imposto volume
          }//if mobile
    });//playerReady
  }//mobileAudioChanger

  //Fix completion rate - Opzionale ma consigliato
  rmpContainer.addEventListener('adclick', function () {
    rmp.play();
    if(DebugCustom) { console.log('Engine by Riccardo Mel: adclick'); }
  });
  //Fix completion rate - Opzionale ma consigliato

  if(hoverAudio){
    jQuery(document).ready(function() {
              jQuery("#Ajax_VideoHolder").mouseenter(
              function(){
              if(DebugCustom) { console.log('Hover: Audio ON'); }
              rmp.setVolume(1);
              });

              jQuery("#Ajax_VideoHolder").mouseleave(
              function(){
              if(DebugCustom) { console.log('Leave: Audio OFF'); }
              rmp.setVolume(0);
              });
    });//FINE DOM
  }//hoverAudio

  //Start!!!!!
  rmp.init(settings);
  //Vietata la riproduzione
  //Info: info@riccardomel.com


}// function VideoSportReview
