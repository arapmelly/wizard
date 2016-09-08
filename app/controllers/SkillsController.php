<?php

class SkillsController extends \BaseController {

	/**
	 * Display a listing of skills
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Skill::all());

		
	}

	

	/**
	 * Store a newly created skill in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Skill::$rules);

		if ($validator->fails())
		{
			
			return Response::json(array('success'=>false, 'error'=>$validator));
		} else {

			Skill::add($data);

		}

		

		return Response::json(array('success'=>true, 'notice'=>'sucessfully created'));
	}

	

	/**
	 * Show the form for editing the specified skill.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$content = Skill::where('resume_id', $id)->get();
		return Response::json($content);

		
	}

	/**
	 * Update the specified skill in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
	

		$validator = Validator::make($data = Input::all(), Skill::$rules);

		if ($validator->fails())
		{
			return Response::json(array('success'=>false, 'error'=>$validator));

		} else {
			Skill::edit($data);
		}

		return Response::json(array('success'=>true, 'notice'=>'sucessfully updated'));

		
	}

	/**
	 * Remove the specified skill from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Skill::destroy($id);

		return Response::json(array('success'=>true, 'notice'=>'sucessfully deleted'));
	}


	public function samples($id)
	{
		$resume = Resume::find($id);

		$samples = DB::table('samples')->where('level_id', '=', $resume->level_id)->where('career_id', '=', $resume->career_id)->where('section', '=', 'skill')->orderBy(DB::raw('RAND()'))->take(10)->get();
		
		return Response::json($samples);

		
	}

}
