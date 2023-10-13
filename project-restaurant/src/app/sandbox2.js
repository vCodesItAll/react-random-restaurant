// <!-- HTML code for the popup -->
<div id="video-popup">
    <video autoplay controls>
        <source src="project-restaurant\public\C0014.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </source>
    </video>
</div>

{/* <!-- JavaScript code to show the popup and play the video on page load --> */}
window.onload = function() {
    // Get the popup element
    var popup = document.getElementById("video-popup");
    
    // Show the popup
    popup.style.display = "block";
    
    // Get the video element
    var video = popup.getElementsByTagName("video")[0];
    
    // Play the video
    video.play();
};
