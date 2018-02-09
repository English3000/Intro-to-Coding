class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # defines a route, home, which will render /app/views/application/home.html.erb
  def home
  end
end
