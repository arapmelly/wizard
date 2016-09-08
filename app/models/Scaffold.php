<?php

class Scaffold {
	

	public static function writeService($model){

		
		$newfile = public_path().'/angular/services/'.$model.'Service.js';

		$filename = public_path().'/templates/service.txt'; // the file to change
		
		$servname = ucfirst($model); // your new stuff
		
		$replace = [
		'{serv}' => $model, 
		'{servname}' => $servname,
		'{models}' => str_plural($model)
		
		];


		file_put_contents($newfile, str_replace(array_keys($replace), array_values($replace), file_get_contents($filename)));
		
		return true;
	}
	

	public static function writeController($model){

		
		$newfile = public_path().'/angular/controllers/'.$model.'Controller.js';

		$filename = public_path().'/templates/seccontroller.txt'; // the file to change
		
		$servname = ucfirst($model);
		
		
		$replace = [
		'{model}' => $model, 
		'{servname}' => $servname, 
		'{models}' => str_plural($model)
		];


		file_put_contents($newfile, str_replace(array_keys($replace), array_values($replace), file_get_contents($filename)));
		
		return true;
	}



	public static function writeModel($model){

		
		$servname = ucfirst($model);

		$newfile = app_path().'/models/'.$servname.'.php';

		$filename = public_path().'/templates/model.txt'; // the file to change
		
		
		
		
		$replace = [
		'{model}' => $model, 
		'{servname}' => $servname, 
		'{models}' => str_plural($model)
		];


		file_put_contents($newfile, str_replace(array_keys($replace), array_values($replace), file_get_contents($filename)));
		
		return true;
	}


	public static function writeAppcontroller($model){

		
		$servname = ucfirst($model);

		$newfile = app_path().'/controllers/'.$servname.'sController.php';

		$filename = public_path().'/templates/appcontroller.txt'; // the file to change
		
		
		
		
		$replace = [
		'{model}' => $model, 
		'{servname}' => $servname, 
		'{models}' => str_plural($model)
		];


		file_put_contents($newfile, str_replace(array_keys($replace), array_values($replace), file_get_contents($filename)));
		
		return true;
	}



	public static function appendRoute($model){


		
		$file = public_path().'/angular/app.js';

		$filename = public_path().'/templates/routes.txt'; // the file to change
		
		
		
		$replace = ['{model}' => $model, '{models}'=> str_plural($model)];

		$content = str_replace(array_keys($replace), array_values($replace), file_get_contents($filename));
		
		File::append($file, $content);

		
		
		return true;
	}



	public static function appendApproutes($model){


		
		$file = app_path().'/routes.php';

		$filename = public_path().'/templates/approutes.txt'; // the file to change
		
		
		
		$replace = 
		[
		'{model}' => $model,
		'{servname}' => ucfirst($model),
		'{models}'=> str_plural($model)
		];

		$content = str_replace(array_keys($replace), array_values($replace), file_get_contents($filename));
		
		File::append($file, $content);

		
		
		return true;
	}




	public static function writeViews($model){
		

		$servname = ucfirst($model);
		$replace = [
		'{model}' => $model, 
		'{servname}' => $servname,
		'{models}' => str_plural($model)
		];

		//write files
		$newfile = public_path().'/views/partials/'.$model.'.html';

		$filename = public_path().'/templates/view.txt'; // the file to change
		
		file_put_contents($newfile, str_replace(array_keys($replace), array_values($replace), file_get_contents($filename)));
		

		
		return true;
		
	}





	public static function writeInnerViews($model){
		

		$servname = ucfirst($model);
		$replace = [
		'{model}' => $model, 
		'{servname}' => $servname,
		'{models}' => str_plural($model)
		];

		//write files
		$newfile = public_path().'/views/partials/resumedata/'.$model.'.html';

		$filename = public_path().'/templates/secview.txt'; // the file to change
		
		file_put_contents($newfile, str_replace(array_keys($replace), array_values($replace), file_get_contents($filename)));
		

		
		return true;
		
	}








	public static function writeCreateForm($inputs, $model){


		
		$file = public_path().'/views/partials/'.$model.'.html';

		

		$inpus = array_reverse($inputs);
		
		
		foreach($inpus as $input){

			clearstatcache();

			if($input['type'] == 'text' || $input['type'] == 'email' || $input['type']  == 'password' || $input['type'] == 'hidden' )
			{
				$filename = public_path().'/templates/inputs/textfield.txt'; // the file to change
			}

			if($input['type'] == 'select'  )
			{
				$filename = public_path().'/templates/inputs/select.txt'; // the file to change
			}

			if($input['type'] == 'textarea'  )
			{
				$filename = public_path().'/templates/inputs/textarea.txt'; // the file to change
			}
			
			$fieldnumber = 1;

			$replace = [
			'{model}' => $model,
			'{servname}' => ucfirst($model),
			'{models}'=> str_plural($model),
			'{label}'=>ucfirst($input['title'] ),
			'{field}'=>$input['field'],
			'{type}'=>$input['type'],
			'{fieldnumber}'=>$fieldnumber
			];

			$content = str_replace(array_keys($replace), array_values($replace), file_get_contents($filename));
			
			$search = "<!-- Add create fields -->";

			$rep = $search. "\n". $content;

			file_put_contents($file, str_replace($search, $rep, file_get_contents($file)));


			$fieldnumber++;
	


		}
		
		
		
		return true;
	}
	



	public static function writeUpdateForm($inputs, $model){


		
		$file = public_path().'/views/partials/'.$model.'.html';

		

		$inpus = array_reverse($inputs);
		
		
		foreach($inpus as $input){

			clearstatcache();

			if($input['type'] == 'text' || $input['type'] == 'email' || $input['type']  == 'password' || $input['type'] == 'hidden' )
			{
				$filename = public_path().'/templates/inputs/textfieldupdate.txt'; // the file to change
			}

			if($input['type'] == 'select'  )
			{
				$filename = public_path().'/templates/inputs/selectupdate.txt'; // the file to change
			}

			if($input['type'] == 'textarea'  )
			{
				$filename = public_path().'/templates/inputs/textareaupdate.txt'; // the file to change
			}
			
			$fieldnumber = 1;

			$replace = [
			'{model}' => $model,
			'{servname}' => ucfirst($model),
			'{models}'=> str_plural($model),
			'{label}'=>ucfirst($input['title'] ),
			'{field}'=>$input['field'],
			'{type}'=>$input['type'],
			'{fieldnumber}'=>$fieldnumber
			];

			$content = str_replace(array_keys($replace), array_values($replace), file_get_contents($filename));
			
			$search = "<!-- Add update fields -->";

			$rep = $search. "\n". $content;

			file_put_contents($file, str_replace($search, $rep, file_get_contents($file)));


			$fieldnumber++;
	


		}
		
		
		
		return true;
	}



	public static function writeHeads($inputs, $model){


		
		$file = public_path().'/views/partials/'.$model.'.html';

		

		$inpus = array_reverse($inputs);
		
		
		foreach($inpus as $input){

			clearstatcache();

			
			$filename = public_path().'/templates/table/head.txt'; // the file to change
			
			$fieldnumber = 1;

			$replace = [
			'{field}'=>$input['field'],
			'{model}'=>$model,
			'{fieldnumber}'=>$fieldnumber
			];

			$content = str_replace(array_keys($replace), array_values($replace), file_get_contents($filename));
			
			$search = "<!-- Add heads -->";

			$rep = $search. "\n". $content;

			file_put_contents($file, str_replace($search, $rep, file_get_contents($file)));


			$fieldnumber++;
	


		}
		
		
		
		return true;
	}



	public static function writeFields($inputs, $model){


		
		$file = public_path().'/views/partials/'.$model.'.html';

		

		$inpus = array_reverse($inputs);
		
		
		foreach($inpus as $input){

			clearstatcache();

			
			$filename = public_path().'/templates/table/field.txt'; // the file to change
			
			$fieldnumber = 1;

			$replace = [
			'{field}'=>$input['field'],
			'{model}'=>$model,
			'{fieldnumber}'=>$fieldnumber
			];

			$content = str_replace(array_keys($replace), array_values($replace), file_get_contents($filename));
			
			$search = "<!-- Add fields -->";

			$rep = $search. "\n". $content;

			file_put_contents($file, str_replace($search, $rep, file_get_contents($file)));


			$fieldnumber++;
	


		}
		
		
		
		return true;
	}
	


	public static function writeIncludes($model){


		
			$file = public_path().'/views/includes/head.blade.php';
			$servfile = public_path().'/templates/incservice.txt';
			$contfile = public_path().'/templates/inccontroller.txt';
			clearstatcache();

			$fieldnumber = 1;

			$replace = [
			'{model}' => $model,
			'{fieldnumber}'=>$fieldnumber
			];

			$content = str_replace(array_keys($replace), array_values($replace), file_get_contents($servfile));
			
			$search = "<!-- add service -->";

			$rep = $search. "\n". $content;

			file_put_contents($file, str_replace($search, $rep, file_get_contents($file)));


			//append controller
			$content = str_replace(array_keys($replace), array_values($replace), file_get_contents($contfile));
			
			$search = "<!-- add controller -->";

			$rep = $search. "\n". $content;

			file_put_contents($file, str_replace($search, $rep, file_get_contents($file)));



			$fieldnumber++;
		
		return true;
	}




	public static function writeModelFields($inputs, $model){


		$modelname = ucfirst($model);

		$file = app_path().'/models/'.$modelname.'.php';

		

		$inpus = array_reverse($inputs);
		
		
		foreach($inpus as $input){

			clearstatcache();

			
			$filename = public_path().'/templates/inputs/modelfield.txt'; // the file to change
			
			$fieldnumber = 1;

			$replace = [
			'{field}'=>$input['field'],
			'{model}' => $model,
			'{fieldnumber}'=>$fieldnumber
			];

			$content = str_replace(array_keys($replace), array_values($replace), file_get_contents($filename));
			
			$search = "// Add fields";

			$rep = $search. "\n". $content;

			file_put_contents($file, str_replace($search, $rep, file_get_contents($file)));


			$fieldnumber++;
	


		}
		
		
		
		return true;
	}
	


}