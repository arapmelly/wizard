<?php

class ReferencesController extends \BaseController {

	/**
	 * Display a listing of references
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Reference::all());

		
	}

	

	/**
	 * Store a newly created reference in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Reference::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			Reference::add($data);

		}

		

		return Response::json(array('success'=>true, 'notice'=>'sucessfully created'));
	}

	

	/**
	 * Show the form for editing the specified reference.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$content = Reference::where('resume_id', $id)->get();
		return Response::json($content);

	}

	/**
	 * Update the specified reference in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Reference::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Reference::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified reference from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Reference::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}

}
