Rails.application.routes.draw do
  namespace :api do
    get 'session/create'
  end

  namespace :api do
    get 'session/destroy'
  end

  namespace :api do
    get 'users/create'
  end

  namespace :api do
    get 'users/show'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
