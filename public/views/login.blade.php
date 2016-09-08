@extends('layouts.login')
@section('content')


<div class="row">
	<div class="col-sm-3">

		
	</div>
	<div class="col-sm-6">
		<h2><i class='fa fa-lock'></i> Login</h2>

	<form action="{{URL::to('users/login')}}" class='form' method="post" accept-charset="utf-8">
<input type="text" name="email" value="{{Input::old('email')}}" placeholder='Email' />
<label for="email">Email</label><input type="password" name="password" value="" placeholder='Password' />
<label for="password">Password</label><input type="submit" name="login" value="Login" class='btn btn-lg btn-success' />
<a href="{{URL::to('users/password_forgot')}}">Forgot Password?</a>
</form>
<div style='margin-top:15px;'>Not signed up? <a href="{{URL::to('users/create')}}">Sign Up</a></div>	

</div>

</div>


@stop