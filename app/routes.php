<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::post('scaffold', function(){

	$model = Input::get('model');

	$inputs = Input::get('inputs');

	

	//Scaffold::writeModel($model);
	//Scaffold::appendApproutes($model);
	//Scaffold::writeAppcontroller($model);
	Scaffold::writeService($model);
	Scaffold::writeController($model);
	Scaffold::appendRoute($model);
	//caffold::writeViews($model);
	Scaffold::writeInnerViews($model);
	//Scaffold::writeUpdateForm($inputs, $model);
	//Scaffold::writeCreateForm($inputs, $model);
	//Scaffold::writeHeads($inputs, $model);
	//Scaffold::writeFields($inputs, $model);
	Scaffold::writeIncludes($model);
	//Scaffold::writeModelFields($inputs, $model);


	return Response::json($model);
});




Route::get('/', function()
{
	if(Confide::user()){
		if(Confide::user()->user_type == 'admin'){

			return View::make('admindash');

		} else {
			return View::make('dashboard');
		}
		
	} else {
		return View::make('index');
	}
	
});




// Confide routes
Route::get('users/create', 'UsersController@create');
Route::post('users', 'UsersController@store');
Route::get('users/login', 'UsersController@login');
Route::post('users/login', 'UsersController@doLogin');
Route::get('users/confirm/{code}', 'UsersController@confirm');
Route::get('users/forgot_password', 'UsersController@forgotPassword');
Route::post('users/forgot_password', 'UsersController@doForgotPassword');
Route::get('users/reset_password/{token}', 'UsersController@resetPassword');
Route::post('users/reset_password', 'UsersController@doResetPassword');
Route::get('users/logout', 'UsersController@logout');

Route::resource('levels', 'LevelsController');
Route::get('levels/delete/{id}', 'LevelsController@destroy');
Route::get('levels/show/{id}', 'LevelsController@show');
Route::post('levels/update', 'LevelsController@update');

Route::resource('careers', 'CareersController');
Route::get('careers/delete/{id}', 'CareersController@destroy');
Route::get('careers/show/{id}', 'CareersController@show');
Route::post('careers/update', 'CareersController@update');

Route::resource('themes', 'TemplatesController');
Route::get('themes/delete/{id}', 'TemplatesController@destroy');
Route::get('themes/show/{id}', 'TemplatesController@show');
Route::post('themes/update', 'TemplatesController@update');

Route::resource('resumes', 'ResumesController');
Route::get('resumes/delete/{id}', 'ResumesController@destroy');
Route::get('resumes/show/{id}', 'ResumesController@show');
Route::post('resumes/update', 'ResumesController@update');
Route::get('resumes/fetch/{id}', 'ResumesController@fetch');
Route::get('resumes/download/{id}', 'ResumesController@download');

Route::resource('objectives', 'ObjectivesController');
Route::get('objectives/delete/{id}', 'ObjectivesController@destroy');
Route::get('objectives/show/{id}', 'ObjectivesController@show');
Route::post('objectives/update', 'ObjectivesController@update');
Route::get('objectives/samples/{id}', 'ObjectivesController@samples');

Route::resource('education', 'EducationController');
Route::get('education/delete/{id}', 'EducationController@destroy');
Route::get('education/show/{id}', 'EducationController@show');
Route::post('education/update', 'EducationController@update');


Route::resource('experiences', 'ExperiencesController');
Route::get('experiences/delete/{id}', 'ExperiencesController@destroy');
Route::get('experiences/show/{id}', 'ExperiencesController@show');
Route::post('experiences/update', 'ExperiencesController@update');

Route::resource('skills', 'SkillsController');
Route::get('skills/delete/{id}', 'SkillsController@destroy');
Route::get('skills/show/{id}', 'SkillsController@show');
Route::post('skills/update', 'SkillsController@update');
Route::get('skills/samples/{id}', 'SkillsController@samples');

Route::resource('certifications', 'CertificationsController');
Route::get('certifications/delete/{id}', 'CertificationsController@destroy');
Route::get('certifications/show/{id}', 'CertificationsController@show');
Route::post('certifications/update', 'CertificationsController@update');
Route::get('certifications/samples/{id}', 'CertificationsController@samples');

Route::resource('awards', 'AwardsController');
Route::get('awards/delete/{id}', 'AwardsController@destroy');
Route::get('awards/show/{id}', 'AwardsController@show');
Route::post('awards/update', 'AwardsController@update');
Route::get('awards/samples/{id}', 'AwardsController@samples');

Route::resource('references', 'ReferencesController');
Route::get('references/delete/{id}', 'ReferencesController@destroy');
Route::get('references/show/{id}', 'ReferencesController@show');
Route::post('references/update', 'ReferencesController@update');

Route::resource('achievements', 'AchievementsController');
Route::get('achievements/delete/{id}', 'AchievementsController@destroy');
Route::get('achievements/show/{id}', 'AchievementsController@show');
Route::post('achievements/update', 'AchievementsController@update');
Route::get('achievements/samples/{id}', 'AchievementsController@samples');

Route::resource('publications', 'PublicationsController');
Route::get('publications/delete/{id}', 'PublicationsController@destroy');
Route::get('publications/show/{id}', 'PublicationsController@show');
Route::post('publications/update', 'PublicationsController@update');
Route::get('publications/samples/{id}', 'PublicationsController@samples');

Route::resource('samples', 'SamplesController');
Route::get('samples/delete/{id}', 'SamplesController@destroy');
Route::get('samples/show/{id}', 'SamplesController@show');
Route::post('samples/update', 'SamplesController@update');

Route::resource('payments', 'PaymentsController');
Route::get('payments/delete/{id}', 'PaymentsController@destroy');
Route::get('payments/show/{id}', 'PaymentsController@show');
Route::post('payments/update', 'PaymentsController@update');
Route::get('payments/create/{id}', 'PaymentsController@create');
Route::get('payments/redirect', 'PaymentsController@redirect');

Route::get('report/{id}', function($id){

$resume = Resume::find($id);
$awards = Award::where('resume_id', $id)->get();
$achievements = Achievement::where('resume_id', $id)->get();

$objectives = Objective::where('resume_id', $id)->get();

$skills = Skill::where('resume_id', $id)->get();

$certifications = Certification::where('resume_id', $id)->get();

$publications = Publication::where('resume_id', $id)->get();

$experiences = Experience::where('resume_id', $id)->get();

$educations = Education::where('resume_id', $id)->get();

$references = Reference::where('resume_id', $id)->get();



$pdf = PDF::loadView('PDF.default', compact('resume', 'objectives', 'achievements', 'skills', 'certifications', 'publications', 'awards', 'experiences', 'educations', 'references'));
return $pdf->setOrientation('landscape')->setOption('margin-top', 0)->stream('invoice.pdf');

/*return PDF::loadFile('http://www.google.com')->stream('github.pdf');*/


});




Route::get('/test', function(){
  echo Pesapal::greeting();
});