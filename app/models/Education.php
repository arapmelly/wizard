<?php

class Education extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];

	protected $table = 'educations';


	public function resume(){

		return $this->belongsTo('Resume');
	}


	//create
	public static function add($data){


		foreach($data['educations'] as $dt){
			

			$obj = new Education;
			$obj->resume_id = $dt['resumeid'];
			$obj->institution = $dt['institution'];
			$obj->course = $dt['course'];
			$obj->start_period = $dt['start_period'];
			$obj->end_period = $dt['end_period'];
			$obj->remarks = $dt['remarks'];
			$obj->save();
		}

		
		
	}


	//update
	public static function edit($data){

		$education = Education::find(array_get($data, 'id'));
		$education->institution = array_get($data, 'institution');
		$education->course = array_get($data, 'course');
		$education->start_period = array_get($data, 'start_period');
		$education->end_period = array_get($data, 'end_period');
		$education->remarks = array_get($data, 'remarks');
		$education->update();
	}

}