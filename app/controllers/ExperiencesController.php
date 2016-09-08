<?php

class ExperiencesController extends \BaseController {

	/**
	 * Display a listing of experiences
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Experience::all());

		
	}

	

	/**
	 * Store a newly created experience in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Experience::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			Experience::add($data);

		}

		

		return Response::json(array('success'=>true, 'notice'=>'sucessfully created'));
	}

	

	/**
	 * Show the form for editing the specified experience.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$content = Experience::where('resume_id', $id)->get();
		return Response::json($content);

		
	}

	/**
	 * Update the specified experience in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Experience::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Experience::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified experience from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Experience::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}

}
