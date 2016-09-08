<?php

class ResumesController extends \BaseController {

	/**
	 * Display a listing of resumes
	 *
	 * @return Response
	 */
	public function index()
	{
		$resumes = Resume::where('user_id', Confide::user()->id)->get();
		return Response::json($resumes);

		
	}

	

	/**
	 * Store a newly created resume in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Resume::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			$id = Resume::add($data);

		}

		

		return Response::json($id);
	}

	

	/**
	 * Show the form for editing the specified resume.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{


		return Response::json(Resume::find($id));

		
	}


	public function fetch($id)
	{
		
		
		return Response::json(Resume::find($id));

		
	}


	/**
	 * Update the specified resume in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Resume::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Resume::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified resume from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Resume::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}



	public function download($id){

	 $resume = Resume::find($id);

	 if(!$resume->is_paid){

	 	return Redirect::to('payments/create/'.$resume->id);

	 }else {

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
return $pdf->setOption('margin-top', 0)->download('invoice.pdf');

	 }


	}

}
