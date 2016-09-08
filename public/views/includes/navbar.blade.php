<!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="{{URL::to('/')}}" class='navbar-brand'>

            CV Wizard</a>        </div>
        <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                     
            <li class=""><a href="#levels">Experience Levels</a></li>
            
            <li class=""><a href="#careers">Careers</a></li>
           
            <li class=""><a href="#samples">Samples</a></li>
            <li class=""><a href="#templates">Templates</a></li>
            <li class=""><a href="#payments">Payments</a></li>
             <li class=""><a href="#scaffold">Scaffold</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown active-inverse">
                            
              <a href="{{URL::to('users/logout')}}" class='strong white'><i class='fa fa-user'></i> Logout</span></a>                <ul class="dropdown-menu" role="menu">
                </ul>
                        </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>