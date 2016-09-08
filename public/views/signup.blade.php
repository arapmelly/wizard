@extends('layouts.login')
@section('content')


<div class="row">
	<div class="col-sm-3">

		
	</div>
	<div class="col-sm-6">
		<h2><i class='fa fa-user'></i> Signup</h2>


	<form action="{{URL::to('users')}}" class='form' method="post" accept-charset="utf-8">
	<input type="hidden" name="user_type" value="client"  />
	<input type="text" name="email" value="{{Input::old('email')}}" placeholder='Email' />
<label for="email">Email</label>

<input type="password" name="password" value="" placeholder='Password' />
<label for="password">Password</label>

<input type="password" name="password_confirmation" value="" placeholder='Confirm Password' />
<label for="password">Confirm Password</label>

<input type="submit" name="login" value="Signup" class='btn btn-lg btn-success' />

</form>
<div style='margin-top:15px;'> signed up? <a href="{{URL::to('/')}}">Login</a></div>	

</div>

</div>


@stop