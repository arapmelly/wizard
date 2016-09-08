<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAchievementsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('achievements', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('resume_id')->unsigned();
			$table->foreign('resume_id')->references('id')->on('resumes');
			$table->text('achievement')->nullable();
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
		Schema::drop('achievements');
	}

}
