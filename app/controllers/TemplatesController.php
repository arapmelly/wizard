<?php

class TemplatesController extends \BaseController {

	/**
	 * Display a listing of templates
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Template::all());

		
	}

	

	/**
	 * Store a newly created template in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Template::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			Template::add($data);

		}

		

		return Response::json(array('success'=>true, 'notice'=>'sucessfully created'));
	}

	

	/**
	 * Show the form for editing the specified template.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Response::json(Template::find($id));

		
	}

	/**
	 * Update the specified template in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Template::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Template::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified template from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Template::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}

}
