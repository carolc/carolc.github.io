$(document).ready(function(){


   function displayGit(){
     $.get('https://api.github.com/users/carolc/events')
       .done(function(data) {
        console.log(data[0]);
         var date=moment(data[0].created_at).fromNow();
         $(".portfolio_content").html("<div>Last commit on Github was " + date+"</div>");
         $(".portfolio_content").append('<a href="'+data[0].payload.commits[0].url+'">See Commit</a>')
       });
   }
  
  $("#getGit").click(displayGit);
    

});