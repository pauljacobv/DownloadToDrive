function downloadFile(file_URL) {
  
  var form = FormApp.openById('1m-njsRzqMbQHnZsiOjfHYVWqcQLTO9V3dpclGV_zgbY');
  var formResponses = form.getResponses();
  
  var folderName="Downloads";
  var fileURL=file_URL;;
  var fileName = "";
  var fileSize = 0;
 
  
  var response = UrlFetchApp.fetch(fileURL, {muteHttpExceptions: true});
  var rc = response.getResponseCode();
  
  if (rc == 200) {
    var fileBlob = response.getBlob()
    var folder = DriveApp.createFolder(folderName);
    if (folder != null) {
      var file = folder.createFile(fileBlob);
      fileName = file.getName();
      fileSize = file.getSize();
    }
  }
    
  var fileInfo = { "rc":rc, "fileName":fileName, "fileSize":fileSize };
  form.deleteAllResponses()
  return fileInfo;
}