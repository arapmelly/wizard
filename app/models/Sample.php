<?php

class Sample extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];



	//create
	public static function add($data){

		$sample = new Sample;
		$sample->level_id = array_get($data, 'level_id');
		$sample->career_id = array_get($data, 'career_id');
		$sample->section = array_get($data, 'section');
		$sample->content = array_get($data, 'content');
		$sample->save();
		
	}


	//update
	public static function edit($data){

		$sample = Sample::find(array_get($data, 'id'));
		$sample->level_id = array_get($data, 'level_id');
		$sample->career_id = array_get($data, 'career_id');
		$sample->section = array_get($data, 'section');
		$sample->content = array_get($data, 'content');
		$sample->update();
		
	}

}