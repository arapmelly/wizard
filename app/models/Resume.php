<?php

class Resume extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];


	public function user(){

		return $this->belongsTo('User');
	}

	public function achievements(){

		return $this->hasMany('Achievement');
	}

	public function awards(){

		return $this->hasMany('Award');
	}

	public function certifications(){

		return $this->hasMany('Certification');
	}

	public function educations(){

		return $this->hasMany('Education');
	}

	public function experiences(){

		return $this->hasMany('Experience');
	}

	public function objectives(){

		return $this->hasMany('Objective');
	}

	public function publications(){

		return $this->hasMany('Publication');
	}

	public function references(){

		return $this->hasMany('Reference');
	}

	public function skills(){

		return $this->hasMany('Skill');
	}

	//create
	public static function add($data){

		$resume = new Resume;

		$resume->user_id = Confide::user()->id;
		$resume->fullnames = array_get($data, 'fullnames');
		$resume->phone = array_get($data, 'phone');
		$resume->email = array_get($data, 'email');
		$resume->address = array_get($data, 'address');
		$resume->level_id = array_get($data, 'level_id');
		$resume->career_id = array_get($data, 'career_id');
		$resume->template_id = array_get($data, 'template_id');
		$resume->save();


		

		return $resume->id;

		

		

		
	}


	//update
	public static function edit($data){



		$resume =  Resume::find(array_get($data, 'id'));

		$resume->fullnames = array_get($data, 'fullnames');
		$resume->phone = array_get($data, 'phone');
		$resume->email = array_get($data, 'email');
		$resume->address = array_get($data, 'address');
		$resume->level_id = array_get($data, 'level_id');
		$resume->career_id = array_get($data, 'career_id');
		$resume->template_id = array_get($data, 'template_id');
		$resume->save();

		Session::put('resume', $resume);
		
	}








}