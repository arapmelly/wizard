<?php

class CertificationsController extends \BaseController {

	/**
	 * Display a listing of certifications
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Certification::all());

		
	}

	

	/**
	 * Store a newly created certification in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Certification::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			Certification::add($data);

		}

		

		return Response::json(array('success'=>true, 'notice'=>'sucessfully created'));
	}

	

	/**
	 * Show the form for editing the specified certification.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$content = Certification::where('resume_id', $id)->get();
		return Response::json($content);

		
	}

	/**
	 * Update the specified certification in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Certification::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Certification::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified certification from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Certification::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}


	public function samples($id)
	{
		$resume = Resume::find($id);

		$samples = DB::table('samples')->where('level_id', '=', $resume->level_id)->where('career_id', '=', $resume->career_id)->where('section', '=', 'certification')->orderBy(DB::raw('RAND()'))->take(10)->get();
		
		return Response::json($samples);

		
	}

}
