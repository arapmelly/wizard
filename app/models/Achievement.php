<?php

class Achievement extends \Eloquent {

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

		foreach($data['achievements'] as $dt){
			

			$obj = new Achievement;
			$obj->resume_id = $dt['resumeid'];
			$obj->achievement = $dt['content'];
			$obj->save();
		}
	}


	//update
	public static function edit($data){

		$achievement =  Achievement::find(array_get($data, 'id'));
		$achievement->achievement = array_get($data, 'achievement');
		$achievement->update();
	}

}