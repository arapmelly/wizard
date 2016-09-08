<?php

class PublicationsController extends \BaseController {

	/**
	 * Display a listing of publications
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Publication::all());

		
	}

	

	/**
	 * Store a newly created publication in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Publication::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			Publication::add($data);

		}

		

		return Response::json(array('success'=>true, 'notice'=>'sucessfully created'));
	}

	

	/**
	 * Show the form for editing the specified publication.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$content = Publication::where('resume_id', $id)->get();
		return Response::json($content);

		
	}

	/**
	 * Update the specified publication in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Publication::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Publication::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified publication from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Publication::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}


	public function samples($id)
	{
		$resume = Resume::find($id);

		$samples = DB::table('samples')->where('level_id', '=', $resume->level_id)->where('career_id', '=', $resume->career_id)->where('section', '=', 'publication')->orderBy(DB::raw('RAND()'))->take(10)->get();
		
		return Response::json($samples);

		
	}

}
