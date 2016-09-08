<?php namespace Arapmelly\Pesapal;

use Illuminate\Support\ServiceProvider;

class PesapalServiceProvider extends ServiceProvider {

	/**
	 * Indicates if loading of the provider is deferred.
	 *
	 * @var bool
	 */
	protected $defer = false;

	/**
	 * Bootstrap the application events.
	 *
	 * @return void
	 */
	public function boot()
	{
		$this->package('arapmelly/pesapal');
	}

	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		$this->app['pesapal'] = $this->app->share(function($app)
		{
    		return new Pesapal;
  		});

  		$this->app->booting(function()
  		{
  			$loader = \Illuminate\Foundation\AliasLoader::getInstance();
  			$loader->alias('Pesapal', 'Arapmelly\Pesapal\Facades\Pesapal');
		});
	}

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return array('pesapal');
	}




}
