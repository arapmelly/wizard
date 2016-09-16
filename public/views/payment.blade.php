<!DOCTYPE html>
<html lang="en" >
  
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
@include('includes.head')

  <body ng-app="app">

    @include('includes.client')

    
    <div class="container content none" id="none" >


    	<iframe src="<?php echo $iframe_src;?>" width="100%" height="700px"  scrolling="no" frameBorder="0">
	<p>Browser unable to load iFrame</p>
</iframe>
     
    </div>
     
    @include('includes.footer')
    


        
    
     
    
    
  </body>


</html>