<?php

class EducationController extends \BaseController {

	/**
	 * Display a listing of education
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Education::all());

		
	}

	

	/**
	 * Store a newly created education in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Education::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			Education::add($data);

		}

		

		return Response::json(array('success'=>true, 'notice'=>'sucessfully created'));
	}

	

	/**
	 * Show the form for editing the specified education.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$content = Education::where('resume_id', $id)->get();
		return Response::json($content);

		
	}

	/**
	 * Update the specified education in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Education::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Education::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified education from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Education::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}

}
