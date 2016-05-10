function formResponses(e) {
  
  var form = FormApp.openById(' **FORM ID** ');
  var formResponses = form.getResponses();
 
  for (var i = 0; i < formResponses.length; i++) {
   var formResponse = formResponses[i];
   var itemResponses = formResponse.getItemResponses();
     for (var j = 0; j < itemResponses.length; j++) {
         var itemResponse = itemResponses[j];
         var url=itemResponse.getResponse();
         downloadFile(url)
    }
  }
}