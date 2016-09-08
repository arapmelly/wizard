<?php

class Template extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];



	//create
	public static function add($data){

		$template = new Template;
		$template->name = array_get($data, 'name');
		$template->save();
	}


	//update
	public static function edit($data){

		$template = Template::find(array_get($data, 'id'));
		$template->name = array_get($data, 'name');
		$template->update();
	}

}