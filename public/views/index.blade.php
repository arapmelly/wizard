@extends('layouts.login')
@section('content')



<div class="row"  >

	<div class="col-lg-4">

	</div>

	<div class="col-lg-4">

		<img src="{{asset('/assets/images/cvwizard.png') }}">
		
	</div>

</div>
<hr>
@if(!Confide::user())
<div class="row" >
	<div class="col-sm-1">

		
	</div>
	<div class="col-sm-3">
		
		<i class="fa fa-fw fa-5x fa-user"></i>
		<h4>Step 1: Signup / Login</h4>
		<p>
			Create an account or login to your account if already created an account
		</p>
	

	</div>


	<div class="col-sm-3">
		
	<i class="fa fa-fw fa-5x fa-edit"></i>
	<h4>Step 2: Create Resume</h4>
		<p>
			Use the resume wizard equiped with tips and suggestions to create your resume
				</p>

	</div>



	<div class="col-sm-3">
	<i class="fa fa-fw fa-5x fa-download"></i>
	<h4>Step 3: Download</h4>
		<p>
			Assign a template from our library and download your created resume in PDF for use offline.
		</p>
	

	</div>



</div>
@endif

@if(!Confide::user())
<div class="row">
	<div class="col-lg-12 b-b">

	</div>
</div>

<div class="row">
	<br><br><br>
	<div class="col-lg-4">
	</div>

	<div class="col-lg-3">
		
<br>
		<a href="{{URL::to('users/create')}}" class="btn btn-success btn-lg"> Create Your CV now</a>
	</div>	

</div>
@endif


@stop