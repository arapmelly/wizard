<?php

class Experience extends \Eloquent {

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

		

		foreach($data['experiences'] as $dt){
			

			$obj = new Experience;
			$obj->resume_id = $dt['resumeid'];
			$obj->organization = $dt['organization'];
			$obj->title = $dt['title'];
			$obj->start_period = $dt['start_period'];
			$obj->end_period = $dt['end_period'];
			$obj->responsibilities = $dt['responsibilities'];
			$obj->save();
		}

		
	}


	//update
	public static function edit($data){

		$experience = Experience::find(array_get($data, 'id'));
		$experience->organization = array_get($data, 'organization');
		$experience->title = array_get($data, 'title');
		$experience->start_period = array_get($data, 'start_period');
		$experience->end_period = array_get($data, 'end_period');
		$experience->responsibilities = array_get($data, 'responsibilities');
		$experience->update();
		
	}

}