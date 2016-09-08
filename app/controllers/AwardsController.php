<?php

class AwardsController extends \BaseController {

	/**
	 * Display a listing of awards
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Award::all());

		
	}

	

	/**
	 * Store a newly created award in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Award::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			Award::add($data);

		}

		

		return Response::json(array('success'=>true, 'notice'=>'sucessfully created'));
	}

	

	/**
	 * Show the form for editing the specified award.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$award = Award::where('resume_id', $id)->get();
		return Response::json($award);

		
	}

	/**
	 * Update the specified award in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Award::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Award::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified award from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Award::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}


	public function samples($id)
	{
		$resume = Resume::find($id);

		$samples = DB::table('samples')->where('level_id', '=', $resume->level_id)->where('career_id', '=', $resume->career_id)->where('section', '=', 'award')->orderBy(DB::raw('RAND()'))->take(10)->get();
		
		return Response::json($samples);

		
	}

}
