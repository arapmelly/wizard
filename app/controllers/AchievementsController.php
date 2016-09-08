<?php

class AchievementsController extends \BaseController {

	/**
	 * Display a listing of achievements
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Achievement::all());

		
	}

	

	/**
	 * Store a newly created achievement in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Achievement::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			Achievement::add($data);

		}

		

		return Response::json(array('success'=>true, 'notice'=>'sucessfully created'));
	}

	

	/**
	 * Show the form for editing the specified achievement.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$content = Achievement::where('resume_id', $id)->get();
		return Response::json($content);

		
	}

	/**
	 * Update the specified achievement in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Achievement::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Achievement::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified achievement from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Achievement::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}


	public function samples($id)
	{
		$resume = Resume::find($id);

		$samples = DB::table('samples')->where('level_id', '=', $resume->level_id)->where('career_id', '=', $resume->career_id)->where('section', '=', 'achievement')->orderBy(DB::raw('RAND()'))->take(10)->get();
		
		return Response::json($samples);

		
	}

}
