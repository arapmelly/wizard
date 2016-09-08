<?php

class Level extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];



	//create
	public static function add($data){

		$level = new Level;
		$level->name = array_get($data, 'name');
		$level->save();
	}


	//update
	public static function edit($data){

		$level = Level::find(array_get($data, 'id'));
		$level->name = array_get($data, 'name');
		$level->update();
	}

}