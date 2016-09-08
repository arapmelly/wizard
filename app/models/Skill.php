<?php

class Skill extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];


	public function resume(){

		return $this->belongsTo('Resume');
	}

	//create
	public static function add($data){

		foreach($data['skills'] as $dt){
			

			$obj = new Skill;
			$obj->resume_id = $dt['resumeid'];
			$obj->skill = $dt['content'];
			$obj->save();
		}
		
	}


	//update
	public static function edit($data){

		$skill =  Skill::find(array_get($data, 'id'));
		$skill->skill = array_get($data, 'skill');
		$skill->update();
		
	}

}