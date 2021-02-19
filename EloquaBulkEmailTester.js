var t, x, d, z = 0,

  ar = new Array;
x = open();
d = x.document;
d.open();
xsrf = getXsrfToken();

t = "https://" + window.location.host + "/";
d.write(`<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>Eloqua Test Email Sender</title>

<!--
                                        
               @@@     @@@              
           @@@ @@@    ,@@@ @@@          
        @@@@@@ @@@@   @@@@ @@@@@@       
      @@@  @@@ @@@@, @@@@@ @@@  @@@     
    %@@    @@@ @@@@@ @@@@@ @@@   &@@    
    @@     @@@ @@@@@@@@@@@ @@@    *@@   
   @@@     @@@ @@@@@@@&@@@ @@@     @@@  
   @@@@@@@@@@@ @@@ @@@ @@@ @@@     @@@  
   @@@     @@@ @@@ #@  @@@ @@@     @@#  
    @@@    @@@ @@@  @  @@@ @@@    @@@   
           @@@ @@@     @@@ @@@  *@@@    
           @@@ @@@     @@@ @@@@@@@      
           @@@ @@@     @@@ @@@@         
               @@@     @@@              
                                        

		Eloqua Test Email Sender
		version 0.3a
		02/18/2021
		Andrew Domalik                         
	
		v0.3a
		~~~~~~~~~
		Added a field to input the Eloqua POD number for the URL.
	
		v0.2a
		~~~~~~~~~
		Improvements include auto population of the XSRF Token by utilizing a bookmarklet. Also added support for sending multiple emails (up to 5 at a time) to multiple recipients. 
		
		v0.1a
		~~~~~~~~~
		This app utilizes Eloqua's Test Email functionality by appending form fields to the test email ASPX page URL.
-->

<!-- Bootstrap core CSS -->
<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<!-- Custom styles for this template --> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
<link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
<style type="text/css">
body {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 90px;
    background-color: lightslategray
}
.bodyCard {
    background-color: white;
    border-radius: 2em;
    padding: 1em;
    margin-top: 7rem;
}
footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 40px;
    color: darkslategray;
    font-size: 12px
}
.table-wrapper-scroll-y {
    display: block;
    max-height: 40rem;
    overflow-y: auto;
    -ms-overflow-style: -ms-autohiding-scrollbar;
</style>
<script language="javascript" type="text/javascript">
			function CallEmailTest() {
			var emailId = [];
            var strTestingEmailAddress = $("#recEmlAdr").val();            
            var sendURL;
			var elqPod = $("#podNum").val();
     
			  
			for (var i = 0; i <= ($(".assetIdGroup").length); i++){
			  emailId[i] = document.getElementsByClassName("assetId")[i].value;
			  
			  
               if (strTestingEmailAddress!= '') {       
                    sendURL = "https://secure.p0"+ elqPod + ".eloqua.com/agent/Email/QuickSendEmailExecute2.aspx?xsrfToken="`+ xsrf +`"&EmailDefnID=" + emailId[i] + "&TypeOverride=0&WireFramePersonalization=-1" + "&EmailAddress=" + encodeURIComponent(strTestingEmailAddress) 
						+ "&draft=1&FromUser=-1";
					window.open(sendURL,'new_window');
					console.log(sendURL);
		        }
		        else {
			        alert("Please select an email address to send a test to.");
		        }
				
			}
		  
        }
    </script>`);


d.write(`<body>

<!-- Page Content -->
<div class="container bodyCard align-middle">
  <div class="row"> 
    
    <!-- Page Heading -->
    <div class="col-lg-12">
      <h1 style="margin: 30px 0 40px 0;" class="text-center"><span style="color: red;font-weight: 600;">Eloqua</span> Test Email Sender</h1>
      <hr>
      <form>
        <div class="form-group row pb-5">
          <label for="xsrfToken" class="col-sm-3 col-form-label text-right">XSRF Token</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="xsrfToken" value="`+xsrf+`">
          </div>
        </div>
		<div class="form-group row pb-5">
          <label for="podNum" class="col-sm-3 col-form-label text-right">Eloqua POD #</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="podNum">
          </div>
        </div>
        <div class="form-group row assetIdGroup">
          <label for="elqEmlId" class="col-sm-3 col-form-label text-right">Email Asset ID</label>
          <div class="col-sm-8">
            <input type="text" class="form-control assetId" id="elqEmlId">
          </div>
          <div class="col-sm-1">
            <button class="btn-sm btn-success" id="addBtn"><span style="font-size: 18px">+</span></button>
          </div>
        </div>
        <div class="form-group row emlIdGroup">
          <label for="recEmlAdr" class="col-sm-3 col-form-label text-right">Recipient Email Addresses</label>
          <div class="col-sm-8">
            <input type="text" class="form-control emlField" id="recEmlAdr">
          </div>
        </div>
        <hr class="end">
        <div class="form-group row justify-content-center py-2">
          <div class="col-sm-6">
            <button class="btn-lg btn-block btn-dark" id="submitBtn" onClick="CallEmailTest()">Send Test Email</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /.container --> 
<!-- Footer -->
<footer class="py-3">
  <div class="container">
    <p class="text-center">Andrew Domalik - 2021</p>
  </div>
  <!-- /.container --> 
</footer>

<!-- Bootstrap core JavaScript --> 
<script src="vendor/jquery/jquery.min.js"></script> 
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>`);
