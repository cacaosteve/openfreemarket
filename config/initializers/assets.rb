# In config/initializers/assets.rb or similar configuration file
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'stylesheets', 'active_admin')
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets', 'javascripts', 'active_admin')

Rails.application.config.assets.precompile += %w(active_admin.css active_admin.js)
