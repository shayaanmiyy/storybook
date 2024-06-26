<?php

class StarterSite
{
	private $config;
	private $routes;

	public function __construct($config = [])
	{
		$this->config = $config;
		$this->routes = [];
		$this->initialize();
	}

	private function initialize()
	{
		if (empty($this->config['base_path'])) {
			$this->config['base_path'] = __DIR__;
		}
		if (empty($this->config['template_path'])) {
			$this->config['template_path'] = $this->config['base_path'] . '/templates';
		}
	}
}
