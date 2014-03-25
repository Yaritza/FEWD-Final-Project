<script language="JavaScript1.1">
var photos=new Array()
var which=0

/*Change the below variables to reference your own images. You may have as many images in the slider as you wish*/
photos[0]="/img/largeCrowdpic.jpg" alt="Image of me deejaying on stage before a large crowd for the opening of the JukeBox the Ghost Concert"
photos[1]="../img/weddingPic1.jpg" alt="Picture of happy wedding guests dancing with a bride and groom at an indoor reception in New Jersey"
photos[2]="../img/poolParty.jpg" alt="Image of a party crowd around a large pool as seen from my DJ booth set up on the 2nd story balcony - Atlantic City New Jersey"
photos[3]="../img/highlineFundraiser.jpg" alt="Gathering of people at the HighLine Park Fundraiser in New York City"
photos[4]="../img/schoolDance.jpg"


function backward(){
if (which>0){
window.status=''
which--
document.images.photoslider.src=photos[which]
}
}

function forward(){
if (which<photos.length-1){
which++
document.images.photoslider.src=photos[which]
}
else window.status='End of gallery'
}
</script>