<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateExperiencesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('experiences', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('resume_id')->unsigned();
			$table->foreign('resume_id')->references('id')->on('resumes');
			$table->string('organization')->nullable();
			$table->string('title')->nullable();
			$table->string('start_period')->nullable();
			$table->string('end_period')->nullable();
			$table->text('responsibilities')->nullable();
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('experiences');
	}

}
