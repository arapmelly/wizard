<!DOCTYPE html>
<html lang="en">
  
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
@include('includes.head')

  <body>

    @include('includes.loginbar')

    
    <div class="container content none" id="none">
      @yield('content')
      <!-- message area -->
    </div>
     
    @include('includes.footer')
    


        
    
     
    
    
  </body>


</html>